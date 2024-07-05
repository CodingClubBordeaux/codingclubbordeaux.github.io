# Petit Bain

La piscine d'Epitech est une période mythique du début de votre cursus. Pour
vous y préparer, ce sujet te propose de découvrir la programmation en C avec
des exercices inspirés la piscine. Bon courage ! 😄

Pour te guider, n'hésite pas à consulter le <Icon icon="logos:c" /> [Guide langage C](/guides/c.md)
et à demander de l'aide aux Cobras qui encadrent l'activité Coding Club.

::: info Mise en place 💻

Si tu es venu avec ton propre ordinateur, nous te conseillons d'utiliser le
site Compiler Explorer pour exécuter ton code C.

<Icon icon="simple-icons:compilerexplorer" /> [Ouvrir Compiler Explorer](https://godbolt.org/z/9YWf7Wjq9)

:::

## Exercice 1: Hello World

Pour commencer, un programme classique pour découvrir un nouveau langage: le
"Hello World". En utilisant la fonction `printf()` (regarde le guide langage C
pour des exemples), écris un programme affichant "Hello World".

Sortie attendue:

```
Hello World
```

## Exercice 2: `my_print_alpha`

Crée une fonction qui affiche les lettres dans l'ordre alphabétique en minuscules,
sur une seule ligne.

Les caractères sont encodés en utilisant [le code ASCII](https://man7.org/linux/man-pages/man7/ascii.7.html).

```c
void my_print_alpha(void);
```

Sortie attendue:

```
abcdefghijklmnopqrstuvwxyz
```

## Exercice 3: `my_print_digits`

Crée une fonction qui affiche les chiffres de 0 à 9 en ordre décroissant, sur
une seule ligne.

```c
void my_print_digits(void);
```

Sortie attendue:

```
9876543210
```

## Exercice 4: `my_isneg`

Crée une fonction qui renvoie `1` si le nombre passé en paramètre est négatif,
et `0` sinon.

```c
int my_isneg(int n);
```

Sortie attendue:

```
my_isneg(0): 0
my_isneg(-5): 1
```

## Exercice 5: `my_strlen`

Crée une fonction qui renvoie la longueur d'une chaîne de caractères.

```c
int my_strlen(char *str);
```

Sortie attendue:

```
my_strlen("Hello World"): 11
my_strlen("Bonjour"): 7
```

## Exercice 6: `my_cesar`

Crée une fonction qui chiffre un message en utilisant le code de César. Ce
code consiste à décaler chaque lettre d'un nombre donné en paramètre (la clé).

Par exemple, avec la clé `3`, le message "Bonjour" deviendra "Erqmrxu".

```c
char *my_cesar(char *str, int key);
```

_Bonus_: au lieu de modifier la chaîne de caractères passée en paramètre, crée une
nouvelle chaîne de caractères avec `malloc()` et renvoie la.

---

::: info Bravo, tu est prêt pour la piscine ! 🏋️

Si tu as réussi à résoudre tous ces exercices, tu est bien parti pour affronter
la piscine d'Epitech. Sinon ne t'inquiète pas, tu verra plus en détails toutes
les notions de cette activité (et bien plus!) au début de ton année à
Epitech.

:::
