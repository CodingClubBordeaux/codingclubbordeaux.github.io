# Sujet Coding Club - Semaine de l'IA

## Introduction

L'intelligence artificielle est aujourd'hui partout : moteurs de recommandation, assistants conversationnels, détection de fraude, analyse d'images, modération de contenus ou encore aide à la décision. Derrière ce mot très large, on trouve surtout des programmes capables d'apprendre à partir de données pour reconnaître des motifs, classer des informations ou générer du contenu.

L'IA ouvre beaucoup de possibilités :
- automatiser des tâches répétitives
- aider à analyser de grandes quantités de données
- améliorer l'expérience utilisateur
- créer de nouveaux outils de production, de recherche et de communication

Mais elle pose aussi des questions importantes :
- d'où viennent les données d'entraînement ?
- les résultats sont-ils fiables ?
- le modèle reproduit-il des biais ?
- que faire quand il se trompe ?
- quel est l'impact sur les métiers, la vie privée et l'énergie ?

Aujourd'hui nous allons :
1. préparer un environnement Python propre ;
2. charger et manipuler un vrai jeu de données ;
3. entraîner un modèle de classification de texte ;
4. évaluer ses performances ;
5. tester le modèle sur des phrases libres.

## Le contexte du projet

Nous allons travailler sur le fichier `sentiment-emotion-labelled_Dell_tweets.csv`. Il contient des tweets liés à Dell, avec deux informations cibles :

- un `sentiment` global : `negative`, `neutral`, `positive` ;
- une `emotion` : `anger`, `joy`, `anticipation`, etc.

L'idée est donc de construire une petite IA capable de prédire, à partir d'un texte, à la fois le sentiment et l'émotion.

## Exercice 1 - Préparer l'environnement et explorer les données

### 1. Créer un environnement de travail

Dans le dossier de votre choix, lancez les commandes suivantes:

```bash
python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install pandas scikit-learn jupyter
```
Maintenant que l'environnement python est créer, il faut créer un fichier dans lequel nous allons faire notre IA, pour ca, lancez la commande suivante:
```bash
touch semaineIA.ipynb
```


### 2. Charger le CSV avec pandas

Pandas est une bibliothèque python qui vas nous permettre de manipuler la donnée que notre IA a utiliser pour apprendre. Ici nous allons ouvrir notre donnée d'entrainement et la manipulaé pour mieux visualiser son ocntenue.
```python
import pandas as pd

df = pd.read_csv("sentiment-emotion-labelled_Dell_tweets.csv", index_col=0)

print(df.columns.tolist())
print("-" * 60)

df = df.drop(columns=["Datetime", "Tweet Id", "Username"])

print(df.columns.tolist())
print("-" * 60)
print(df.head(3))
print("-" * 60)
print(df.shape)
```

Pour obtenir quelques informations numériques:

```python
print(df.isna().sum())
print("-" * 60)
print(df["sentiment"].value_counts())
print("-" * 60)
print(df["emotion"].value_counts())
```

### Ce qu'on attend de Pandas
Comme ous avez pu le constater, pandas contient de nombreuses fonctions utiles qui nous ont permis de :
- comprendre les colonnes du fichier
- supprimer les colonnes inutiles pour notre modèle
- observer la répartition des classes
- repérer si certaines émotions sont beaucoup plus rares que d'autres

## Pourquoi la donnée est si importante

On résume souvent le problème avec une phrase simple : `garbage in, garbage out`. Si les données sont mauvaises, incomplètes, mal étiquetées ou très déséquilibrées, le modèle apprendra mal.

Dans ce dataset, on observe par exemple :

- `24970` lignes 
- des sentiments assez présents dans les trois classes
- des émotions très inégales

Exemple de déséquilibre :

- `anger` apparaît `7520` fois 
- `joy` apparaît `6326` fois 
- `anticipation` apparaît `5171` fois 
- `surprise` n'apparaît que `34` fois

Ce point est essentiel : si une classe est très rare, le modèle aura beaucoup plus de mal à bien la prédire. Si vous voyez plus tard un très mauvais score sur `surprise`, ce n'est pas "juste parce que l'IA est nulle" ; c'est aussi parce qu'elle a très peu d'exemples pour apprendre.

La qualité d'un projet IA dépend donc énormément :

- de la quantité de données 
- de leur diversité 
- de leur qualité de labellisation 
- de leur équilibre entre les classes 
- de leur proximité avec les cas réels qu'on veut traiter

## Exercice 2 - IA n°1 : une premiere pipeline de classification

On commence par un pipeline simple, proche du playbook :

- on transforme le texte en nombres 
- on applique un score TF-IDF 
- on entraîne un classifieur linéaire 
- on prédit deux sorties : le sentiment et l'émotion

```python
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.linear_model import SGDClassifier
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.multioutput import MultiOutputClassifier
from sklearn.metrics import classification_report

pipeline = Pipeline([
    ("vect", CountVectorizer(ngram_range=(1, 2), min_df=5, max_df=0.8)),
    ("tfidf", TfidfTransformer()),
    (
        "clf",
        MultiOutputClassifier(
            SGDClassifier(
                alpha=1e-5,
                penalty="l2",
                loss="log_loss",
                random_state=42,
            )
        ),
    ),
])

X = df["Text"]
Y = df[["sentiment", "emotion"]]

X_train, X_test, Y_train, Y_test = train_test_split(
    X, Y, test_size=0.2, random_state=42
)

pipeline.fit(X_train, Y_train)
Y_pred = pipeline.predict(X_test)

print("Sentiment report")
print(classification_report(Y_test["sentiment"], Y_pred[:, 0], zero_division=0))
print("-" * 60)
print("Emotion report")
print(classification_report(Y_test["emotion"], Y_pred[:, 1], zero_division=0))
```

### Résultats observés dans le playbook

Sur le notebook de référence, on obtient environ :

- `0.78` d'accuracy sur le `sentiment` ;
- `0.65` d'accuracy sur `emotion`.

Ce n'est pas surprenant : prédire 3 sentiments est plus simple que prédire 8 émotions, surtout quand certaines classes sont très rares.

## Exercice 3 - IA n°2 : une version testée plus sérieusement

Dans le playbook, une deuxième version ajoute une validation croisée. C'est une bonne idée, car un seul découpage `train/test` peut donner une vision trop optimiste ou trop pessimiste.

```python
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.linear_model import SGDClassifier
from sklearn.model_selection import train_test_split, cross_validate, KFold
from sklearn.pipeline import Pipeline
from sklearn.multioutput import MultiOutputClassifier
from sklearn.metrics import classification_report, make_scorer


def exact_match_accuracy(y_true, y_pred):
    y_true = np.asarray(y_true)
    y_pred = np.asarray(y_pred)
    return (y_true == y_pred).all(axis=1).mean()


pipeline_cv = Pipeline([
    ("vect", CountVectorizer(ngram_range=(1, 2), min_df=5, max_df=0.8)),
    ("tfidf", TfidfTransformer()),
    (
        "clf",
        MultiOutputClassifier(
            SGDClassifier(
                alpha=1e-5,
                penalty="l2",
                loss="log_loss",
                random_state=42,
            )
        ),
    ),
])

X = df["Text"]
Y = df[["sentiment", "emotion"]]

X_train, X_test, Y_train, Y_test = train_test_split(
    X, Y, test_size=0.2, random_state=42
)

pipeline_cv.fit(X_train, Y_train)
Y_pred = pipeline_cv.predict(X_test)

print("Sentiment report")
print(classification_report(Y_test["sentiment"], Y_pred[:, 0], zero_division=0))
print("-" * 60)
print("Emotion report")
print(classification_report(Y_test["emotion"], Y_pred[:, 1], zero_division=0))
print("-" * 60)

cv = KFold(n_splits=5, shuffle=True, random_state=42)

cv_result = cross_validate(
    pipeline_cv,
    X,
    Y,
    cv=cv,
    scoring=make_scorer(exact_match_accuracy),
    return_train_score=False,
)

print("Exact match accuracy sur les 5 folds :")
print(cv_result["test_score"])
print("Moyenne :", cv_result["test_score"].mean())

pipeline_cv.fit(X, Y)
```

### Ce que mesure cette deuxième IA

Cette deuxième version ne change pas radicalement d'algorithme, mais elle apporte une évaluation plus robuste :

- on ne juge pas le modèle sur un seul découpage ;
- on observe la stabilité des scores sur plusieurs folds ;
- on peut comparer plus proprement plusieurs variantes plus tard.

Dans nos tests, la moyenne d'`exact match accuracy` tourne autour de `0.57`. C'est une métrique plus sévère, car il faut prédire correctement à la fois le sentiment et l'émotion sur une même ligne pour marquer un point.

## Comment lire un `classification_report`

Le `classification_report` est indispensable pour comprendre ce que fait réellement un modèle.

### Les colonnes importantes

- `precision` : parmi toutes les prédictions faites pour une classe, combien étaient correctes ?
- `recall` : parmi tous les vrais exemples d'une classe, combien ont été retrouvés ?
- `f1-score` : compromis entre la précision et le rappel 
- `support` : nombre d'exemples de cette classe dans le jeu de test

### Les lignes de synthèse

- `accuracy` : proportion totale de bonnes prédictions 
- `macro avg` : moyenne simple entre les classes, utile quand les classes sont déséquilibrées 
- `weighted avg` : moyenne pondérée par le nombre d'exemples, utile pour avoir une vision globale

### Comment choisir le meilleur modèle ?

Ne regardez pas uniquement l'`accuracy`.
Un bon réflexe est de vérifier :
- si le score global est correct 
- si le `macro avg` reste bon 
- si les classes rares ne sont pas complètement abandonnées 
- si les résultats sont stables d'un test à l'autre.

Exemple ici :

le `sentiment` est plutôt bien appris, l'`emotion` est plus difficile.
les classes très rares comme `surprise` ont un score très faible.
Pourquoi ? Ces problèmes viennent en partie du déséquilibre des données.

Donc, pour choisir "le meilleur modèle", il faut regarder à la fois :

- les scores ;
- la stabilité ;
- la qualité sur les classes rares ;
- et le besoin métier réel.

## Exercice 4 - Tester notre IA

Une fois le pipeline entraîné, on peut tester des phrases libres.

```python
def predict_emotion_sentiment(sentence):
    prediction = pipeline_cv.predict([sentence])[0]
    print(f"Phrase     : {sentence}")
    print(f"Sentiment  : {prediction[0]}")
    print(f"Emotion    : {prediction[1]}")
    print("-" * 40)


if __name__ == "__main__":
    predict_emotion_sentiment("i'm angry but also hopeful")
    predict_emotion_sentiment("i'm so happy about this")
    predict_emotion_sentiment("i expect a lot")
    predict_emotion_sentiment("let's hope tomorrow will be better")
```

Vous pouvez ensuite inventer vos propres phrases, cependant, la donnée d'entrainement étant uniquement en anglais, notre IA ne sera en mesure de comprendre uniquement l'anglais. Ce qui montre encore une fois le role important de la donnée d'entrainement.

## Conclusion

Ce mini-projet illustre déjà une idée importante : une IA n'est pas seulement un modèle. C'est un ensemble composé de données, de choix techniques, de métriques d'évaluation, d'interprétation humaine et de décisions d'usage.

Aujourd'hui, l'IA va bien plus loin que la classification de texte :
- génération de texte 
- génération d'images 
- systèmes multimodaux 
- assistants de code 
- agents capables d'enchaîner plusieurs actions

Mais les questions de fond restent les mêmes :

- peut-on faire confiance au résultat ?
- avec quelles données le système a-t-il appris ?
- qui est responsable en cas d'erreur ?
- comment garder l'humain dans la boucle ?

Le vrai enjeu n'est donc pas seulement de savoir "utiliser l'IA", mais de savoir la comprendre, l'évaluer et l'utiliser avec esprit critique.
