# <Icon icon="logos:python" /> Guide langage Python

Le Python est **un langage de programmation de haut niveau** créé à la fin des
années 1980, conçu pour privilégier la lisibilité, la simplicité et la rapidité
de développement.

Il est utilisé dans de nombreux domaines de l’informatique aujourd’hui
(développement web, automatisation, science des données, intelligence
artificielle...), et s’est imposé comme l’un des langages les plus populaires
grâce à sa syntaxe claire et à la richesse de son écosystème.

::: info À propos

Cette page est une référence rapide des fonctionnalités de base du langage Python
dont tu auras besoin pour les sujets du Coding Club. N'hésite pas à demander des
explications supplémentaires si tu as besoin ! :smile:

:::

::: tip Liens utiles 🔗

Quelques liens utiles pour aller plus loin et se documenter sur le langage C:

- [Python_ sur Wikipedia](<https://fr.wikipedia.org/wiki/Python_(langage)>)
- [Documentation_Officielle](https://docs.python.org/3/)

On te recommande d'utiliser l'éditeur de code <Icon icon="logos:visual-studio-code" /> [VSCode](https://code.visualstudio.com/)
avec l'extension python pour débuter.

:::

## Structure d'un programme

Un programme python ne demande rien de special pour pouvoir etre éxécuter a la diffrérence d'autres langages comme le C.
Par convention et propreter de code on definit toujours un `main`. Ici on définit notre main et on appelle la fonction `print` qui
est une fonction de base en python qui permet d'afficher des informations.

```python:line-numbers
if __name__ == "__main__":
  print("hello world!")
```

## Variables et types

Les variables permettent de stocker des valeurs de différents types pendant
l'exécution d'un programme. Par défaut Python n'impose pas d'écrire le `type` de nos variables mais il est recommandé de le faire

```python:line-numbers{2-5}
  if __name__ == "__main__":
    age: int = 25  #Nombre entier
    height: float = 1.75  #Nombre décimal
    name: str = "John"  #Chaîne de caractères
    student: bool = true  #Booléen (vrai/faux)

    print(f"age: {age}, height: {height}, name: {name}, student: {student}")
```

## Fonctions

Une fonctions permet de définir un bloc de code qui peut être réutilisé
plusieurs fois dans le programme. Les fonctions peuvent prendre zéro, une ou
plusieurs valeurs en argument, et renvoient une valeur.

```python:line-numbers{1-7}
#Fonction qui calcule le carré d'un nombre
def square(x: int) -> int:
  return x * x

#Fonction qui additionne deux nombres
def add(x: int, y: int) -> int:
  return x + y

if __name__ == "__main__":
  x: int = 5

  print(f"carré de x: {square(x)}")
  print(f"x + 5 : {add(x, 5)}")
```

## Conditions

Les conditions permettent d'exécuter un bloc de code uniquement si une certaine
condition est remplie. Tu peux utiliser différents opérateurs de comparaison:
`==`, `!=`, `<`, `>`, `<=`, `>=`.

```python:line-numbers{5-10}
if __name__ == "__main__":
  x: int = 5
  y: int = 10

  if (x == y):
    print("x et y sont égaux")
  elif x > y:
    print("x est plus grand que y")
  else:
    print("x est plus petit que y")
```

## Boucles

Les boucles permettent de répéter un bloc de code plusieurs fois. Il existe
deux types de boucles: `while` (tant que) et `for` (pour chaque).

```python:line-numbers{3-6,9-10}
if __name__ == "__main__":
  #Boucle while
  x: int = 0
  while x < 5:
    print(f"x = {x}")
    x += 1 # On incremente la valeur de x de 1

  #Boucle for
  for i in range(5):
    print(f"i = {i}")
```

## Listes / Strings

Une liste permet de stocker plusieurs valeurs. Une chaîne de
caractères (_str_) est une liste qui ne contient que des `char`, et toujours
terminée par le caractère `\0`.

```python:line-numbers{2-3}
if __name__ == "__main__":
  name: str = "John"  #Chaîne de caractères (le \0 est implicite)
  numbers: list = [33, 42, 84]  #Tableau d'entiers (3 éléments)

  print(f"name: {name}")
  print(f"numbers: {numbers[0]}, {numbers[1]}, {numbers[2]}")
```
