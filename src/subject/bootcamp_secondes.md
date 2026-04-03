# Atelier code découverte et renforcement des bases de python
Bienvenue dans le premier jour de ce bootcamp, l'objectif de cette journée et de découvrir ou renforcer vos **bases en python**.
Pour cela, ce sujet regroupe guides d'installations et exercices pour travailler sur chaque concept clé de python.

---

## Étape 1: Mise en place de votre environnement de travail

Bien que Windows soit simple d’utilisation et compatible avec de nombreux outils, ce n’est pas toujours l’environnement le plus agréable pour développer.
Pour travailler simplement avec python, nous allons utiliser **WSL** (**Windows Subsystem for Linux**).

WSL permet d’utiliser un environnement Linux directement depuis Windows, sans machine virtuelle classique ni dual boot.

### 1.1 Installer WSL

Ouvrez **PowerShell en administrateur** puis lancez la commande suivante :

```bash
wsl --install
```

Cette commande active les composants nécessaires à WSL et installe **Ubuntu** par défaut.

Une fois l’installation terminée, redémarrez votre machine.

### 1.2 Premier lancement

Après le redémarrage :

1. Ouvrez WSL.
2. Attendez la fin de l’initialisation.
3. Choisissez un **nom d’utilisateur** puis un **mot de passe**.

Vous êtes maintenant dans votre terminal Linux.

---

## Étape 2: Installer VS Code et l’utiliser avec WSL

Pour coder proprement, nous allons utiliser **Visual Studio Code**.

VS Code doit être installé du côté Windows, pour cela rendez-vous [ici](https://code.visualstudio.com/download). Ensuite depuis **WSL** il suffit de taper la commande suivante pour ouvrir vscode dans le dossier actuel.
```bash
code .
```

---

## Étape 3: Installer python dans WSL

Bien que vscode soit installer, WSL n'est pas encore en mesure d'éxécuter du code python, pour ce faire, dans votre terminal WSL, lancez la commande suivante (votre mot de passe sera demandé et ne s'affichera pas quand vous l'écrirez) :

```bash
sudo apt update
sudo apt install -y python3-full python3-pip python3-pip-whl
```

Vérifiez ensuite que tout fonctionne :

```bash
python3 --version
pip --version
```

---

## Étape 4: Premières commandes utiles dans WSL

Avant de commencer python, il faut être capable de se déplacer un minimum dans le terminal, pour plus de detail sur chaque commande vous pouvez utiliser **man** de cette manière :
```bash
man commande_de_votre_choix
```

### 4.1 Voir le contenu d’un dossier

```bash
ls
```

Cette commande permet d’afficher les fichiers et dossiers présents dans le dossier courant.

### 4.2 Changer de dossier

```bash
cd nom_du_dossier
```

Exemples :

```bash
cd Documents
cd ..
```

- `cd ..` permet de remonter d’un dossier

### 4.3 Créer un dossier de travail

```bash
mkdir atelier_python
cd atelier_python
```

### 4.4 Créer un fichier

```bash
touch nom_du_fichier
```

- `touch ex01.py` permet de créer un fichier python nommé ex01.

---

## Étape 5: Créer un environnement virtuel python

Quand on développe en python, il est très important d’éviter de tout installer globalement sur la machine.
Pour cela, on crée un **environnement virtuel**.

### 5.1 Création

Dans votre dossier de travail :

```bash
python3 -m venv .venv
```

### 5.2 Activation

```bash
source .venv/bin/activate
```

Si tout se passe bien, vous devriez voir apparaître `(.venv)` au début de votre ligne de commande.

### 5.4 Désactivation

Quand vous avez terminé de travailler :

```bash
deactivate
```

Maintenant, votre environnement de travail est prêt pour la journée !

Pour plus de confort, nous vous recommandons d'installer les extensions python depuis vs code, l'onglet pour ce faire se trouve sur la gauche.

Si code ne trouve pas votre dossier de travail WSL, le raccourci **Ctrl + Alt + o** vous permet de choisir votre environnement WSL.

En cas de problèmes supplémentaires, n'hésitez pas à solliciter de l'aide de la part des étudiants !

---

# Exercices python

Pour tous les exercices suivants, nous vous recommandons de créer **un fichier par exercice**. Et de produire le code le plus propre possible !
Le but n'est pas seulement de faire un programme qui va uniquement "fonctionner", il doit aussi être assez clair et lisible pour pouvoir retourner travailler dessus pendant plusieurs semaines et ne pas être perdu.

S'il s'agit de votre premier contact avec python, vous pouvez retrouver une documentation sur l'utilisation basique de python [ici](https://codingclubbordeaux.github.io/guides/python)

L'exécution de chaque exercice se fait de cette manière dans votre terminal WSL.

```bash
python3 nom_du_fichier.py
```
---

## Exercice 1: Hello World

Premier contact avec python.

### Consigne

Créez un programme python qui affiche le texte suivant :

```python
Hello World
```

### Objectif

- lancer un script python
- découvrir les appels de fonctions

---

## Exercice 2: Fonctions addition et soustraction

On commence avec les fonctions les plus simples.

### Consigne

Créez un fichier contenant :
- une fonction `addition(a, b)`
- une fonction `soustraction(a, b)`

Ces fonctions doivent **retourner** le résultat de l’opération.
Pour vous assurer que vos fonctions sont correctes, stockez les résultats de ces dernières dans une variable avant de les afficher.

### Objectif

- créer une fonction avec paramètres
- faire la différence entre calculer et afficher

---

## Exercice 3: Fonction factorielle

Même principe... mais on monte un peu en difficulté.

### Consigne

Créez une fonction `factorielle(n)` qui retourne la factorielle de `n`.
En plus de calculs plus complexes, cette fonction doit pouvoir vérifier si l'utilisateur envoie des paramètres corrects.
Vous pouvez la tester de la même manière que la précédente, seulement, n'oubliez pas de tester les cas d'erreurs.

Rappel :
- La factorielle d'un nombre s'écrit sous cette forme `nombre!`
- La factorielle ne s'applique pas aux nombres négatifs
- `0! = 1`
- `1! = 1`
- `5! = 5 × 4 × 3 × 2 × 1 = 120`

### Objectif

- manipuler des boucles (ou de la récursivité pour plus de défi!)
- manipuler des conditions
- gérer un cas particulier

---

## Exercice 4: Fonction nombre premier

On reste dans le même style.

### Consigne

Créez une fonction `est_premier(n)` qui retourne :
- `True` si `n` est un nombre premier
- `False` sinon

Rappel :
Un nombre premier est un entier supérieur à 1 qui n’est divisible que par 1 et lui-même.

### Objectif

- manipuler des booléens

---

## Exercice 5: Formatage de chaîne avec `clean_str`

On commence à manipuler les chaînes de caractères proprement.

### Consigne

Créez une fonction `clean_str(texte)` qui :
- met tout le texte en minuscules
- supprime les espaces en trop
- remet une majuscule au début de la phrase
- garantit **un seul espace** entre chaque mot
- retourne le texte formaté

Vous devez utiliser `split()` et `join()`. La documentation officielle pourra vous aider sur leur utilisation.

### Exemple

```python
print(clean_str("   bonJOUR     tOUt   LE    monde   "))
```

Résultat attendu :

```python
Bonjour tout le monde
```

### Objectif

- manipuler les strings
- utiliser `split()` et `join()`

---

## Exercice 6: Fonction input basique type `cat`

On introduit maintenant l’interaction utilisateur.

### Consigne

Créez une fonction `cat()` **sans paramètre** qui :
1. demande une entrée utilisateur avec `input()`
2. affiche exactement ce que l’utilisateur a écrit

Il s'agit d'une imitation de la fonction **cat** sans paramètres que vous pouvez essayer depuis WSL.

### Objectif

- utiliser `input()`
- créer une fonction sans argument
- comprendre la différence entre entrée utilisateur et affichage

---

## Exercice 7: Reprise du `cat` avec tri des nombres

On reprend l’idée précédente, mais cette fois on ajoute un peu de logique.

### Consigne

Créez un programme qui :
1. demande plusieurs entrées utilisateur
2. si l’entrée est un nombre, l’ajoute dans un tableau
3. trie le tableau (`sort()`)
4. affiche le tableau trié
5. si l’entrée n’est pas un nombre, on l’ignore
6. pouvoir arrêter le programme à l'aide d'un certain mot

### Exemple

```bash
Entrez une valeur: 8
[8]

Entrez une valeur: bonjour
entrée ignorée

Entrez une valeur: 3
[3, 8]

Entrez une valeur: 12
[3, 8, 12]

Entrez une valeur: stop
```

### Objectif

- réutiliser `input()`
- stocker des données dans une liste
- faire du tri
- filtrer les entrées invalides

---

## Exercice 8: Gestion d’inventaire

On commence à faire un petit programme de stockage plus complet.

### Consigne

Créez un programme de gestion d’inventaire qui fonctionne comme un [shell](https://fr.wikipedia.org/wiki/Shell_Unix).
L’utilisateur doit pouvoir écrire des commandes dans le terminal et votre programme doit pouvoir les interpréter.

Le stock sera stocké sous la forme d'un dictionnaire
Chaque élément est donc sous la forme :

```python
nom: nombre_elements
```

### Commandes à gérer

Votre programme doit reconnaître au minimum :

- `add nom quantité` ajoute la quantité au stock
- `remove nom quantité` retire la quantité
- `display` affiche l’inventaire
- `exit` quitte le programme

### Exemple

```bash
inventaire> add pomme 5
inventaire> add banane 2
inventaire> display
pomme: 5
banane: 2

inventaire> remove pomme 2
inventaire> display
pomme: 3
banane: 2
```

### Objectif

- utiliser un dictionnaire
- manipuler des chaînes tapées par l’utilisateur
- découper une commande avec `split()`
- faire une boucle principale de programme

---

## Exercice 9: Introduction aux classes avec un personnage

On termine avec une première approche orientée objet.

### Consigne

Créez une classe `Personnage` avec les attributs suivants :
- `nom`
- `hp`
- `attaque`
- `defense`
- `parole`

Votre classe doit contenir :
- une méthode `parler()` qui affiche la phrase du personnage
- une méthode `afficher_stats()` qui affiche ses statistiques
- une méthode `est_vivant()` qui retourne `True` si les `hp` sont supérieurs à 0
- une méthode `attaquer(cible)` qui inflige des dégâts à un autre personnage

example de formule simple pour les combats :

```python
degats = attaque - defense
```

### Exemple

1. créer 2 personnages
2. afficher leurs stats
3. faire parler les deux personnages
4. lancer un combat tour par tour jusqu’à ce que l’un des deux tombe à 0 hp

execution du programme :
```bash
Chevalier: Aaaaaahhhhhh !
Gobelin: Wabbaabababbaa !

Chevalier attaque Gobelin et inflige 4 dégâts
Gobelin a maintenant 6 hp

Gobelin attaque Chevalier et inflige 2 dégâts
Chevalier a maintenant 18 hp
```

### Objectif

- découvrir les objets
- stocker des données dans un objet
- faire interagir deux objets entre eux

---

Le sujet est terminé, n'hésite pas à ajouter quelques bonus ou de nouveaux programmes selon tes préférences!
