# <Icon icon="logos:javascript" /> Guide langage JavaScript

JavaScript est **un langage de programmation interprété** créé en 1995,
initialement pour le navigateur [Netscape](https://fr.wikipedia.org/wiki/Netscape_Navigator).
Il est principalement utilisé pour créer des applications web, mais peut également
être utilisé dans d'autres contextes.

Le JavaScript (et sa "variante" [<Icon icon="logos:typescript-icon" /> TypeScript](https://www.typescriptlang.org/))
est l'un des langages les plus utilisés aujourd'hui, et est simple à prendre en
main pour les débutants.

Attention à ne pas confondre le langage JavaScript avec le langage
[<Icon icon="logos:java" /> Java](<https://fr.wikipedia.org/wiki/Java_(langage)>), qui sont deux langages
complètement différents.

::: info À propos

Cette page est une référence rapide des fonctionnalités de base du langage
JavaScript dont tu auras besoin pour les sujets du Coding Club. N'hésite pas à
demander des explications supplémentaires si tu as besoin ! :smile:

Le bouton <Badge type="info"><Icon icon="simple-icons:jsfiddle" /> Exécuter sur JSFiddle</Badge>
ouvre un éditeur de code avec le résultat de l'exécution du code. Tu peux t'en
servir pour changer le code et comprendre ce qu'il s'y passe.

:::

::: warning Prérequis 📝

Nous utiliserons le langage JavaScript dans le contexte d'une page web, qui doit
être préalablement **créée en utilisant le langage HTML**.

Consulte le guide <Icon icon="logos:html-5" /> [Guide langage HTML/CSS](/guides/html-css.md) pour
connaître les concepts de base de HTML et CSS.

:::

::: tip Liens utiles 🔗

Quelques liens utiles pour aller plus loin et se documenter sur le langage JavaScript:

- [_The Modern JavaScript Tutorial_](https://javascript.info/)
- [_JavaScript_ sur le Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

On te recommande d'utiliser l'éditeur de code <Icon icon="logos:visual-studio-code" /> [VSCode](https://code.visualstudio.com/)
pour débuter. L'extension [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
(optionnelle) permet d'afficher ta page web dans l'éditeur et de visualiser les modifications en direct.

Pour exécuter rapidement du code JavaScript sans installer de logiciel, tu peux utiliser <Icon icon="simple-icons:jsfiddle" /> [JSFiddle](https://jsfiddle.net/).

:::

## Créer un script JavaScript

Un script JavaScript est associée à une page web, créée avec le langage HTML.
Supposons que tu aies créé un fichier `index.html` et un fichier `script.js` dans
le même dossier.

Consulte le guide <Icon icon="logos:html-5" /> [Guide langage HTML/CSS](/guides/html-css.md) pour
connaître les concepts de base de HTML.

::: code-group

```html{8} [index.html]
<!doctype html>
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <h1>Hello world</h1>
    <script src="script.js"></script>
  </body>
</html>
```

```js [script.js]
alert('Hello world');
```

:::

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/kmo9uxst/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

::: info Pour les curieux 🤓

Un script JavaScript n'est pas forcément lié à une page web, il peut être
exécuté indépendamment en utilisant un _runtime_ comme [<Icon icon="logos:nodejs-icon" /> Node.js](https://nodejs.org/en/).

Cependant, **c'est un usage plus avancé du langage** que nous n'utiliserons pas
au Coding Club. Ce guide part du principe que nous utilisons le JavaScript avec
une page web.

:::

## Variables

Les variables permettent de stocker des valeurs de différents types pendant
l'exécution d'un programme.

```js
let age = 25; // Nombre entier
let height = 1.75; // Nombre décimal
let name = 'John'; // Chaîne de caractères
let student = true; // Booléen (vrai/faux)

alert(`age: ${age}, height: ${height}, name: ${name}, student: ${student}`);
```

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/b0admvn3/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

## Fonctions

Une fonction permet de définir un bloc de code qui peut être réutilisé
plusieurs fois dans le programme. Les fonctions peuvent prendre des paramètres
et renvoyer une valeur.

```js
// Fonction qui calcule le carré d'un nombre
function square(x) {
  return x * x;
}

// Fonction qui additionne deux nombres
function add(x, y) {
  return x + y;
}

let x = 5;
let squared = square(x);
let added = add(x, 5);

alert(`carré de x: ${squared}, x + 5 : ${added}`);
```

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/5hrft182/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

## Conditions

Les conditions permettent d'exécuter un bloc de code uniquement si une certaine
condition est remplie. Tu peux utiliser différents opérateurs de comparaison:
`===`, `!==`, `<`, `>`, `<=`, `>=`.

```js
let x = 5;
let y = 10;

if (x === y) {
  alert('x et y sont égaux');
} else if (x > y) {
  alert('x est plus grand que y');
} else {
  alert('x est plus petit que y');
}
```

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/e7f52cbp/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

## Listes

Une liste permet de stocker un nombre inconnu d'éléments.

```js
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);

alert(`premier élément: ${numbers[0]}`);
alert(`dernier élément: ${numbers[numbers.length - 1]}`);
```

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/t5h7d1nj/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

## Boucles

Les boucles permettent de répéter un bloc de code plusieurs fois. Il existe
deux types principaux de boucles: `while` (tant que) et `for` (pour chaque).

La boucle `for ... of` permet de parcourir les éléments d'une liste.

```js
// Boucle while
let x = 0;
while (x < 5) {
  console.log(`x = ${x}`);
  x++;
}

// Boucle for
for (let i = 0; i < 5; i++) {
  console.log(`i = ${i}`);
}

// Boucle for ... of
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(`number = ${number}`);
}
```

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/hxr596kp/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

## Manipulation du HTML

On peut récupérer le contenu d'un élément HTML et le modifier en lui donnant
un identifiant unique (propriété `id` dans le HTML) et le récupérer avec la
fonction `document.getElementById()`.

::: code-group

```js [script.js]
let titleElement = document.getElementById('title');
titleElement.innerHTML = 'Hello JavaScript';
```

```html [index.html]
<!doctype html>
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <h1 id="title">Hello world</h1>
    <script src="script.js"></script>
  </body>
</html>
```

:::

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/c235njqa/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

## Évènements

Vous pouvez exécuter une fonction JavaScript lors d'un évènement spécifique sur
la page (par exemple, lorsqu'un bouton est cliqué).

::: code-group

```js [script.js]
let count = 0;
let buttonElement = document.getElementById('counter');

function incrementCounter() {
  count += 1;
  buttonElement.innerText = `count: ${count}`;
}

buttonElement.addEventListener('click', incrementCounter);
```

```html [index.html]
<!doctype html>
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <button id="counter">count: 0</h1>
    <script src="script.js"></script>
  </body>
</html>
```

:::

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="TODO" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>
