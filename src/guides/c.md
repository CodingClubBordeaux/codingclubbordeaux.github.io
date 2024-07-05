# <Icon icon="logos:c" /> Guide langage C

Le C est **un langage de programmation de bas niveau** créé dans les années
1970, offrant au développeur une marge de contrôle importante sur la machine.

Il est utilisé par la plupart des logiciels constituant les fondations des
systèmes informatiques que nous utilisons aujourd'hui (Windows, Linux, ...), et
a inspiré la plupart des langages de programmation qui ont suivi.

C'est le premier langage que tu utiliseras lors de ton cursus Epitech.

::: info À propos

Cette page est une référence rapide des fonctionnalités de base du langage C
dont tu auras besoin pour les sujets du Coding Club. N'hésite pas à demander des
explications supplémentaires si tu as besoin ! :smile:

Le bouton <Badge type="info"><Icon icon="simple-icons:compilerexplorer"/> Exécuter sur Compiler Explorer</Badge>
ouvre un éditeur de code avec le résultat de l'exécution du code. Tu peux t'en
servir pour changer le code et comprendre ce qu'il s'y passe.

:::

::: tip Liens utiles 🔗

Quelques liens utiles pour aller plus loin et se documenter sur le langage C:

- [_C (programming language)_ sur Wikipedia](<https://en.wikipedia.org/wiki/C_(programming_language)>)
- [_C_ sur cppreference](https://en.cppreference.com/w/c)
- [_Beej's Guide to C Programming_](https://beej.us/guide/bgc/html/split/)

On te recommande d'utiliser l'éditeur de code <Icon icon="logos:visual-studio-code" /> [VSCode](https://code.visualstudio.com/)
avec l'extension [clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd)
pour débuter.

Pour exécuter rapidement du code C sans installer de logiciel, tu peux utiliser <Icon icon="simple-icons:compilerexplorer" /> [Compiler Explorer](https://godbolt.org/).

:::

## Structure d'un programme

Un programme C est composé au minimum d'une fonction `main`, qui contient le
code exécuté lorsque le programme est lancé.

Les instructions `#include` sont utilisées pour inclure des fonctions
supplémentaires dans le programme. Par exemple, la fonction `printf` est ajoutée
par `stdio.h`.

```c:line-numbers
#include <stdio.h>

int main(void) {
  // Code du programme
}
```

## Variables et types

Les variables permettent de stocker des valeurs de différents types pendant
l'exécution d'un programme.

```c:line-numbers{5-8}
#include <stdbool.h>
#include <stdio.h>

int main(void) {
  int age = 25;  // Nombre entier
  float height = 1.75;  // Nombre décimal
  char name[] = "John";  // Chaîne de caractères
  bool student = true;  // Booléen (vrai/faux)

  printf("age: %d, height: %f, name: %s, student: %d\n", age, height, name, student);
  return 0;
}
```

<Badge type="info">
  <Icon icon="simple-icons:compilerexplorer" />
  <a href="https://godbolt.org/z/zWcE6rWvs" target="_blank">
    Exécuter sur Compiler Explorer
  </a>
</Badge>

## Fonctions

Une fonctions permet de définir un bloc de code qui peut être réutilisé
plusieurs fois dans le programme. Les fonctions peuvent prendre zéro, une ou
plusieurs valeurs en argument, et renvoient une valeur.

```c:line-numbers{3-11}
#include <stdio.h>

// Fonction qui calcule le carré d'un nombre
int square(int x) {
  return x * x;
}

// Fonction qui additionne deux nombres
int add(int x, int y) {
  return x + y;
}

int main(void) {
  int x = 5;

  printf("carré de x: %d\n", square(x));
  printf("x + 5 : %d\n", add(x, 5));
  return 0;
}
```

<Badge type="info">
  <Icon icon="simple-icons:compilerexplorer" />
  <a href="https://godbolt.org/z/xnsT3nPca" target="_blank">
    Exécuter sur Compiler Explorer
  </a>
</Badge>

## Conditions

Les conditions permettent d'exécuter un bloc de code uniquement si une certaine
condition est remplie. Tu peux utiliser différents opérateurs de comparaison:
`==`, `!=`, `<`, `>`, `<=`, `>=`.

```c:line-numbers{7-13}
#include <stdio.h>

int main(void) {
  int x = 5;
  int y = 10;

  if (x == y) {
    printf("x et y sont égaux\n");
  } else if (x > y) {
    printf("x est plus grand que y\n");
  } else {
    printf("x est plus petit que y\n");
  }

  return 0;
}
```

<Badge type="info">
  <Icon icon="simple-icons:compilerexplorer" />
  <a href="https://godbolt.org/z/dPsKT9KsY" target="_blank">
    Exécuter sur Compiler Explorer
  </a>
</Badge>

## Boucles

Les boucles permettent de répéter un bloc de code plusieurs fois. Il existe
deux types de boucles: `while` (tant que) et `for` (pour chaque).

```c:line-numbers{5-9,12-14}
#include <stdio.h>

int main(void) {
  // Boucle while
  int x = 0;
  while (x < 5) {
    printf("x = %d\n", x);
    x++;
  }

  // Boucle for
  for (int i = 0; i < 5; i++) {
    printf("i = %d\n", i);
  }

  return 0;
}
```

<Badge type="info">
  <Icon icon="simple-icons:compilerexplorer" />
  <a href="https://godbolt.org/z/PfvaPMfoq" target="_blank">
    Exécuter sur Compiler Explorer
  </a>
</Badge>

## Tableaux / Strings

Un tableau permet de stocker plusieurs valeurs de même type. Une chaîne de
caractères (_string_) est une un tableau d'éléments de type `char`, et toujours
terminée par le caractère `\0`.

La taille d'un tableau est fixe.

```c:line-numbers{4-5}
#include <stdio.h>

int main(void) {
  char name[] = "John";  // Chaîne de caractères (le \0 est implicite)
  int numbers[3] = {33, 42, 84};  // Tableau d'entiers (3 éléments)

  printf("name: %s\n", name);
  printf("numbers: %d, %d, %d\n", numbers[0], numbers[1], numbers[2]);
  return 0;
}
```

<Badge type="info">
  <Icon icon="simple-icons:compilerexplorer" />
  <a href="https://godbolt.org/z/xPcbMsfn7" target="_blank">
    Exécuter sur Compiler Explorer
  </a>
</Badge>

## Pointeurs

Un pointeur permet de stocker l'adresse d'un emplacement mémoire ou d'une
variable. Le type d'un pointeur se définit avec `*` (par exemple, `int *` pour un
pointeur sur un entier).

Pour accéder à la valeur d'un pointeur, on utilise l'opérateur `*`. On peut
obtenir le pointeur d'une variable avec `&`.

```c:line-numbers{3-5,9}
#include <stdio.h>

void add_one(int *number) {
  *number += 1;
}

int main(void) {
  int x = 5;
  add_one(&x);
  printf("x: %d\n", x);
}
```

<Badge type="info">
  <Icon icon="simple-icons:compilerexplorer" />
  <a href="https://godbolt.org/z/Grad15rrc" target="_blank">
    Exécuter sur Compiler Explorer
  </a>
</Badge>

## Allocation de mémoire

La fonction `malloc` permet d'obtenir un emplacement mémoire d'une taille
choisie. C'est par exemple utile pour créer des listes d'un grand nombre
d'éléments, ou d'une taille inconnue avant l'exécution du programme.

La quantité de mémoire à allouer doit être indiquée en octets, l'opérateur
`sizeof` permet d'obtenir la taille d'un type de données.

La fonction `malloc` renvoie un pointeur vers le début de la zone de mémoire
allouée. Cette mémoire doit être libérée avec `free` lorsqu'on n'en a plus
besoin.

```c:line-numbers{5-9,15}
#include <stdio.h>
#include <stdlib.h>

int main(void) {
  // Allocation d'une zone de mémoire que l'on remplit avec 50 entiers
  int *list = malloc(50 * sizeof(int));
  for (int i = 0; i < 50; i++) {
    list[i] = i * 2;
  }

  printf("list[0]: %d\n", list[0]);
  printf("list[15]: %d\n", list[15]);
  printf("list[49]: %d\n", list[49]);

  free(list);  // On libère la mémoire
}
```

<Badge type="info">
  <Icon icon="simple-icons:compilerexplorer" />
  <a href="https://godbolt.org/z/Kfe3hT5bW" target="_blank">
    Exécuter sur Compiler Explorer
  </a>
</Badge>
