---
sidebar: false
prev: false
next: false
---

# Tek Shooter

Ce projet a pour but de découvrir la programmation en réalisant un jeu d'arcade
de type shooter. Ce sujet détaille les étapes pour créer les bases du jeu, à
toi ensuite de laisser libre cours à ta créativité pour l'améliorer ! 🙌

<video src="/images/tek-shooter/tek-shooter.mp4" width="300" height="400" autoplay loop muted />

## Introduction

Lors de la réalisation de ce jeu, tu découvrira les concepts de base de la
programmation en langage [Python](https://python.org), un langage réputé pour
être idéal pour débuter dans le monde de la programmation.

Le jeu sera développé à l'aide de la bibliothèque
[Pyxel](https://github.com/kitao/pyxel), qui permet de réaliser des jeux
d'arcade en _pixel art_. **Pyxel est volontairement limité pour ressembler à une
console de jeu rétro**, impossible par exemple d'afficher plus de 16 couleurs à
l'écran.

::: tip Installation de Pyxel 👾
Pyxel est déjà installé sur les ordinateurs du Coding Club. Pour l'installer
sur ton ordinateur personnel et lancer ton jeu:

- Installez Python 3 depuis le site officiel: https://www.python.org/downloads/.
  Lors de l'installation, cochez la case _Add Python to PATH_.
- Installez Pyxel avec la commande `pip install -U pyxel`.

**[Documentation de Pyxel en français](https://github.com/kitao/pyxel/blob/main/docs/README.fr.md)**
:::

Crée un nouveau dossier pour votre projet, puis crée un fichier `shooter.py`
dans ce dossier. Nous recommandons d'éditeur le code à l'aide de
[VSCode](https://code.visualstudio.com/) et de son extension
[Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python).

## Créer la fenêtre de jeu

Pour démarrer un jeu Pyxel, il est nécessaire de créer une fenêtre de jeu avec
une taille définie, puis d'indiquer à Pyxel comment afficher le jeu.

Les _fonctions_ permettent de rendre une section de code réutilisable. Pour
commencer, nous aurons besoin de définir deux fonctions:

- `update()` est appelée à chaque frame du jeu, et permet de **mettre à jour
  l'état du jeu**. C'est par exemple ici que nous devons gérer les interactions
  comme le fait d'appuyer sur une touche pour déplacer le joueur.
- `draw()` est appelée après `update()` et permet de **dessiner le jeu à
  l'écran**.

::: tip Boucle principale et _frames_ 🖌️

Un jeu est constitué d'une succession d'images, appelées _frames_ en anglais.
Par défaut, Pyxel affiche 30 images par secondes sur l'écran (_30 frames per
second = 30 fps_)

À chaque frame, **le jeu doit effectuer un certain nombre d'actions comme**:

- Calculer la nouvelle position des ennemis qui se déplacent tout seuls.
- Réagir aux commandes de l'utilisateur, comme déplacer le joueur.
- Créer une nouvelle image et l'afficher à l'écran.

Ces actions sont effectuées par les fonctions `update()` et `draw()`, qui sont
appelées par la boucle principale du jeu, gérée par Pyxel.
:::

Voici un exemple de code pour créer une fenêtre de jeu Pyxel:

```python
import pyxel  # On importe la bibliothèque Pyxel

# Fonction pour mettre à jour l'état du jeu
def update():
    # Quitter le jeu lorsque l'on clique sur Q
    if pyxel.btn(pyxel.KEY_Q):
      pyxel.quit()

# Fonction pour dessiner le jeu à l'écran
def draw():
  pyxel.cls(0) # Efface la fenêtre de jeu et la remplit de noir

pyxel.init(120, 160, title="Tek Shooter")  # On initialise la fenêtre avec une taille de 120x160 pixels
pyxel.run(update, draw)  # On lance la boucle principale du jeu
```

::: info
Tout ce qui est après le symbole `#` est un commentaire et ne change pas le
comportement du code. Tu n'avez pas besoin de les recopier dans ton fichier.
:::

Tu peux lancer le jeu en ouvrant un terminal et en tapant la commande:

```bash
python shooter.py
```

Félicitations, tu avez créé ton premier jeu avec Pyxel ! 🎮

### Utiliser des constantes

Bien que notre jeu soit très simple, il est déjà possible d'améliorer son code.
Tout au long de sa création, nous utilisons **de nombreux nombres qui ne
changeront pas pendant tout le jeu** (ce sont donc des _constantes_). Par
exemple, la taille de la fenêtre de jeu.

Pour rendre le code plus lisible, **il est fortement recommandé de nommer ces
nombres en utilisant des _variables_.** Par convention, les variables constantes
sont écrites en majuscules en Python.

```python{3-5,14-15}
import pyxel

# On définit nos variables constantes
GAME_WIDTH = 120  # [!code ++]
GAME_HEIGHT = 160  # [!code ++]

def update():
    if pyxel.btnp(pyxel.KEY_Q):
      pyxel.quit()

def draw():
  pyxel.cls(0)

# On remplace les nombres par le nom des variables
pyxel.init(GAME_WIDTH, GAME_HEIGHT, title="Tek Shooter")   # [!code ++]
pyxel.run(update, draw)
```

## Création des assets du jeu

Notre jeu a besoin d'un certain nombre d'_assets_ pour fonctionner, comme des
_sprites_ (images d'un élément du jeu) ou des sons. Pyxel propose un éditeur
pour les créer facilement.

Exécute la commande suivante pour ouvrir l'éditeur de Pyxel:

```bash
pyxel edit shooter
```

La barre du haut te permet de naviguer entre les différents éditeurs.
**N'oublie pas de sauvegarder tes modifications avec le bouton le plus à droite
avant de quitter.**

<div style="display: flex; flex-direction: row; gap: 20px;">
  <img src="/images/tek-shooter/image-editor.png" width="350" />
  <img src="/images/tek-shooter/sound-editor.png" width="350" />
</div>

### Création des sprites

Pour ce jeu, nous aurons besoin d'au minimum deux sprites: un pour le joueur et
un pour l'ennemi. Les sprites dans Pyxel on généralement une taille de 8x8
pixels, représentés par la grille sur l'éditeur.

Remarque que **les sprites sont créés sur une seule image**, numérotée 0
(visible en bas à droite de l'éditeur). Pyxel propose également une palette
limitée à 8 couleurs:

<img src="/images/tek-shooter/color-palette.png" />

Laisse libre cours à ta créativité pour créer tes sprites, mais n'oublie
pas que le principal est de créer le jeu. Des carrés de couleur basiques
suffisent amplement pour commencer. 🖌️

### Création des sons

Si tu le souhaite, **tu peux créer des sons pour le jeu**. Pour cela, rends-toi
sur l'avant-dernier outil de l'éditeur (dans la barre du haut) pour créer
différents sons.

Tu pourra ensuite composer plusieurs sons ensemble dans le dernier outil, qui
permet de créer une musique plus complexe:

<img src="/images/tek-shooter/music-editor.png" width="350" />

Tu peux revenir sur cela plus tard, n'y passe pas trop de temps. 🎵

### Importation des assets dans le jeu

L'éditeur sauvegarde les assets créés dans un fichier `shooter.pyxres`. Il faut
utiliser `pyxel.load()` pour importer ces assets dans le jeu.

```python
# ...

pyxel.load("shooter.pyxres")  # [!code ++]
pyxel.run(update, draw)
```

::: info
La ligne `pyxel.run()` **bloque le programme** en lançant la boucle principale.
Il est donc important de lancer `pyxel.load()` (ou tout autre fonction) avant
cette ligne, le code après ne sera pas exécuté tant que le jeu n'est pas fini.
:::

## Affichage des sprites

Nous pouvons désormais **afficher un sprite à l'écran** (par exemple le joueur),
en utilisant la fonction `pyxel.blt()`. Cette fonction doit être appelée dans
`draw()`, puisqu'elle affiche des éléments sur l'écran.

::: tip Définition de la fonction `blt()` 🔧

Voici la définition de la fonction `blt()`, que tu peux retrouver dans la
[documentation de
Pyxel](https://github.com/kitao/pyxel/blob/main/docs/README.fr.md):

```
blt(x, y, img, u, v, w, h, [colkey])
```

- `x` et `y` sont les coordonnées de la position du sprite dans la fenêtre.
- `img` est le numéro de l'image à afficher (normalement `0`).
- `u` et `v` sont les coordonnés du sprite dans l'image.
- `w` et `h` sont les dimensions du sprite.
- `colkey` (optionnel) permet de définir une couleur du sprite comme
  transparente (par exemple `0` pour le noir).

---

**Important:** les coordonnées ont toutes pour origine le coin supérieur gauche.

Par exemple, les coordonnées `x` et `y` seront celles du coin supérieur gauche.
:::

En modifiant notre fonction `draw()` comme suit, nous pouvons afficher le sprite
du joueur (en supposant qu'il soit le premier sprite de l'image):

```python
def draw():
  pyxel.cls(0)
  # Afficher le joueur
  pyxel.blt(0, 0, 0, 0, 0, 8, 8)  # [!code ++]
```

Si tu as aussi créé une musique, tu peux la lancer en exécutant la fonction
`pyxel.playm(0, loop=True)` juste avant de démarrer la boucle principale.

::: warning À toi de jouer ! 🤓

- Affiche le sprite du joueur en bas de la fenêtre (_en bonus, utilise les
  constantes `GAME_HEIGHT` et `GAME_WIDTH`_).
- Affiche le sprite de l'ennemi au milieu de la fenêtre.
- Essaie de remplacer certains nombres par des constantes (_par exemple, crée
  `SPRITE_WIDTH` et `SPRITE_HEIGHT`_).

:::

## Déplacement du joueur

Maintenant que nous avons affiché le joueur, il est temps de lui permettre de se
déplacer. Pour cela, **nous devons détecter lorsque l'utilisateur appuie sur
l'une des flèches de son clavier**, et ensuite **modifier la position du
joueur**.

Pour détecter l'appui d'une touche, nous pouvons utiliser une _condition_ et
la fonction `pyxel.btnp()`. Cela permet à une section de code d'être exécutée
uniquement si l'utilisateur appuie sur une touche.

```python
def update():
  # ...
  if pyxel.btnp(pyxel.KEY_LEFT):  # [!code ++]
    print("Flèche gauche appuyée")  # [!code ++]
```

La fonction `print()` est utilisée pour afficher le texte dans le terminal. Un
message devrait s'afficher si tu appuies sur la flèche gauche de ton clavier.

### Modifier la position du joueur

Jusqu'à présent, nous avons toujours affiché le joueur à la même position. Pour
lui permettre de se déplacer, **nous devons enregistrer sa position dans une
variable**.

Tout d'abord, crée deux variable `player_x` et `player_y` pour stocker la
position du joueur. Ces variables doivent être définies en dehors des fonctions
`update()` et `draw()` pour ne pas être réinitialisées à chaque frame.

Nous pouvons alors utiliser ces variables lors de l'affichage du joueur, plutôt
que définir des valeurs fixes.

```python
player_x = 0  # [!code ++]
player_y = 0  # [!code ++]

def update():
  # ...
  if pyxel.btnp(pyxel.KEY_LEFT):
    player_x -= 1  # [!code ++]

def draw():
  # ...
  pyxel.blt(player_x, player_y, 0, 0, 0, 8, 8)  # [!code ++]
```

::: details Conventions de nommage (avancé) 🤓

Tu remarquera que ces variables sont très similaires aux constantes que nous
avons définies précédemment, mais leur nom est en minuscules. **Il s'agit d'une
convention** pour indiquer qu'elles sont susceptibles de changer pendant le jeu.

Il y a de nombreuses _conventions_ de ce type en programmation, qui permettent
de rendre le code plus lisible et plus facile à comprendre. Mais cela ne change
en réalité rien à son comportement final.

:::

::: warning À toi de jouer ! 💪

- Ajoute les flèches directionnelles manquantes (`pyxel.KEY_RIGHT`,
  `pyxel.KEY_UP`, `pyxel.KEY_DOWN`).
- Teste différentes valeurs pour modifier la vitesse de la déplacement du joueur
  (_peut-être utiliser une constante `PLAYER_SPEED` ici? 😇_).

:::

## Déplacement de l'ennemi

Maintenant que notre joueur se déplace, pourquoi ne pas faire avancer l'ennemi
tout seul ? Pour cela, crééons une variable `enemy_x` et `enemy_y` pour stocker
sa position, et modifions notre `update()` pour déplacer l'ennemi.

```python
enemy_x = 0  # [!code ++]
enemy_y = 0  # [!code ++]

def update():
  # ...
  enemy_y += 1  # [!code ++]
```

::: warning Il manque quelque chose ? 😳

En ajoutant juste les lignes indiquées, l'ennemi ne se déplace toujours pas. À
toi de trouver pourquoi !
:::

## Ajouter plusieurs ennemis

Le jeu devrait désormais afficher un ennemi qui se déplace, ainsi que le joueur.
Pour le rendre _un peu plus_ amusant, il faudrait rajouter beaucoup plus
d'ennemis.

Pour faire cela, **il est nécessaire de modifier notre code pour qu'il utilise
des classes**. Au lieu de par exemple créer des dizaines de variables `enemy_x`
et `enemy_y`, nous pouvons créer une classe `Enemy` qui contient ces variables,
puis en créer des dizaines à la chaine.

Cette section introduit des concepts de programmation plus complexes, mais nous
en avons besoin pour continuer. N'hésite pas à demander de l'aide si tu ne
comprends pas tout.

::: info C'est quoi une classe ? 🧐

Une classe nous permet d'encapsuler le fonctionnement d'un élément de notre jeu
(par exemple un ennemi), et de le répliquer facilement plusieurs fois. **C'est une
sorte de modèle** qui nous permet créer des _objets_ à partir de la classe.

Comme un exemple est souvent plus concret:

```python
class Enemy:
  # De la magie noire (pour l'instant)

enemy1 = Enemy()
enemy2 = Enemy()
```

Ici, les variables `enemy1` et `enemy2` contiennent tous deux des objets créés à
partir de la même classe `Enemy`. On peut ainsi les modifier indépendamment à
partir du même code initial.

---

📥 **Propriétés (ou comment stocker des données dans une classe)**

Chacun de nos ennemis a besoin de stocker certaines informations qui lui sont
propres, comme sa position. Pour cela, nous pouvons lui attribuer des variables
appelées _propriétés_:

```python
class Enemy:
  def __init__(self, x = 0, y = 0):
    self.x = x
    self.y = y

enemy1 = Enemy(0, 0)
enemy2 = Enemy(10, 10)
```

Nous créons ici deux propriétés `x` et `y` pour stocker la position de l'ennemi,
puis deux instances de cette classe avec des positions initiales différentes.

---

📤 **Méthodes (ou comment faire des actions sur des objets)**

Pour faire des actions sur des objets, nous pouvons créer des méthodes. Il
s'agit de fonctions spéciales ayant accès aux propriétés d'un objet.

```python
class Enemy:
  def __init__(self, x = 0, y = 0):
    self.x = x
    self.y = y

  def update(self):
    self.y += 1

  def draw(self):
    pass

enemy1 = Enemy(0, 0)
enemy1.update()
```

Ici, nous avons créé une méthode `update()` qui modifie la position de l'ennemi,
puis nous l'appelons manuellement sur l'instance `enemy1`.
:::

### Afficher plusieurs ennemis

Crée une classe `Enemy` comme présenté ci-dessus. Cette classe à deux méthodes
`update()` et `draw()`, qui seront donc utilisées respectivement pour mettre à
jour et dessiner l'ennemi.

Au lieu de stocker individuellement les coordonnées de l'ennemi, nous pouvons
désormais utiliser une liste pour stocker un nombre inconnu d'ennemis.

::: details Les listes et boucles `for` 🔃

Les listes permettent de stocker plusieurs éléments à la suite. Par exemple,
voici une liste de nombres:

```python
numbers = [1, 2, 3, 4, 5]
```

Il est possible d'ajouter un élément à la liste en utilisant la méthode
`append()` (et oui, les listes sont des classes):

```python
numbers.append(6)
# La liste est maintenant [1, 2, 3, 4, 5, 6]
```

Pour effectuer une action sur _chaque élément_ de la liste, on utilise une boucle
`for`:

```python
# On affiche chaque élément de la liste
for number in numbers:
  print(number)
```

:::

Modifie ton code pour afficher deux ennemis en utilisant la nouvelle classe
`Enemy`:

```python
enemy_x = 0  # [!code --]
enemy_y = 0  # [!code --]
enemies = []  # [!code ++]

# Pour l'instant, on crée quelques ennemis manuellement
enemies.append(Enemy(0, 0))  # [!code ++]
enemies.append(Enemy(10, 10))  # [!code ++]

class Enemy:
  ...

def update():
  enemy_x = 0  # [!code --]

  # On met à jour tous les ennemis à l'aide d'une boucle
  for enemy in enemies:  # [!code ++]
    enemy.update()  # [!code ++]

def draw():
  for enemy in enemies:  # [!code ++]
    enemy.draw()  # [!code ++]

```

## Terminer le jeu

Si tu es arrivé jusque là bravo ! 👏 J'ai une bonne et une mauvaise nouvelle:

- La bonne nouvelle, **c'est que tu as toutes les cartes en main pour créer un
  incroyable jeu de shooter**. 👾
- La mauvaise nouvelle, c'est que j'ai _vraiment la flemme_ de continuer à
  écrire des instructions détaillées. Mais c'est maintenant que les choses
  intéressantes commencent pour toi, se débrouiller c'est la meilleure manière
  d'apprendre la programmation. 🤓

Pour t'aider à terminer, voici une liste de choses à faire. Bien sûr, n'hésite
pas à demander de l'aide, les encadrants du Coding Club sont là pour ça !

::: warning Choses à faire 📝

- **Toujours plus de classes !** Essaie de modifier ton code pour que le joueur
  devienne une classe `Player` et le jeu une classe `Game`.
- **Apparition aléatoire des ennemis.** Crée des nouveaux ennemis toutes les _x_
  frames (avec `pyxel.frame_count` et l'opérateur `%`). Utilise `pyxel.rndi()`
  pour générer un position de départ aléatoire.
- **Tirer sur les ennemis.** Crée une nouvelle classe `Bullet` pour afficher un
  laser lancé par le joueur qui détruit tout ennemi sur son passage (_astuce:
  utilise la touche `pyxel.KEY_SPACE` et ajoute une propriété `is_alive` sur
  l'ennemi_).
- **Afficher le score.** Tu peux compter le score du joueur et l'afficher avec
  `pyxel.text()`.
- Faire une pause en jouant au jeu original
  [ici](https://kitao.github.io/pyxel/wasm/examples/09_shooter.html). 👾
  :::

::: info Fonctionnalités bonus en vrac 💪

- Un écran de victoire (avec le score du joueur).
- Un écran de début de jeu.
- De magnifiques effets sonores.
- Une animation de destruction des ennemis.
- Plusieurs types d'ennemis.
- Des ennemis qui lancent des missiles.
- Des power-ups pour le joueur.
- Un fond animé.
- Une sauvegarde des scores et un leaderboard.
- **Soit créatif !** 🖌️
  :::

---

_Ce sujet est adapté de l'exemple [09_shooter.py](https://github.com/kitao/pyxel/blob/f9346033d00a4ef083ba2650d5555780c51058c8/python/pyxel/examples/09_shooter.py) du projet Pyxel. Si tu est vraiment bloqué, tu peux y jeter un rapide coup d'œil 😉._

<div style="padding-top: 8rem; font-size: 0.5rem; opacity: 0.3;">
Personne ne lit les sujets jusqu'à la fin, est-ce vrai? Bref,
<a href="https://youtu.be/mbeC2w-uIEU" target="_blank">clique ici</a>
si tu lis ceci (pas de rickroll promis).
</div>
