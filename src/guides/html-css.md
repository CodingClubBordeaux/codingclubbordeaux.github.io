# <Icon icon="logos:html-5" /> Guide langages HTML/CSS

HTML et CSS sont deux **langages de présentation** utilisés pour la création de
pages web. Ils permettent respectivement de définir la structure d'une page web
(HTML) et son apparence (CSS).

::: info À propos

Cette page est une référence rapide des fonctionnalités de base des langages
HTML et CSS dont tu auras besoin pour les sujets du Coding Club. N'hésite pas à
demander des explications supplémentaires si tu as besoin ! :smile:

Le bouton <Badge type="info"><Icon icon="simple-icons:jsfiddle" /> Exécuter sur JSFiddle</Badge>
ouvre un éditeur de code avec le résultat de l'exécution du code. Tu peux t'en
servir pour changer le code et comprendre ce qu'il s'y passe.

:::

::: tip Liens utiles 🔗

Quelques liens utiles pour aller plus loin et se documenter sur les langages HTML/CSS:

- [_Structuring the web with HTML_ sur le MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [_CSS_ sur le MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

On te recommande d'utiliser l'éditeur de code <Icon icon="logos:visual-studio-code" /> [VSCode](https://code.visualstudio.com/)
pour débuter. L'extension [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
(optionnelle) permet d'afficher ta page web dans l'éditeur et de visualiser les modifications en direct.

Pour exécuter rapidement du code HTML/CSS sans installer de logiciel, tu peux utiliser <Icon icon="simple-icons:jsfiddle" /> [JSFiddle](https://jsfiddle.net/).

:::

## Page HTML basique

Une page HTML est constituée de différents éléments représentés sous forme de
balises. Toute page HTML valide doit contenir certaines balises:

- `<!doctype html>` et `<html>` indiquent que document est écrit en HTML
  moderne.
- `<head>` contient les **métadonnées de la page**, c'est à dire des
  informations qui ne font pas partie du contenu de la page mais peuvent être
  utilisées par le navigateur (comme le titre de la page avec `<title>`).
- `<body>` contient le **contenu de la page**. C'est ici que tu rajoutera ton
  propre HTML (sauf indiqué autrement).

```html
<!doctype html>
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
</html>
```

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/cdnmf26k/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

## Éléments HTML

Il existe de nombreux éléments HTML différents, voici quelques uns des plus
utiles que tu utilisera au Coding Club:

- **Les titres** `<h1>`, `<h2>`, ..., `<h6>` (le nombre définissant l'importance
  du titre - `<h1>` est un titre principal, `<h2>` un sous-titre, etc.).
- **Les paragraphes** `<p>` pour afficher du texte.
- **Les blocs** `<div>` permettant de grouper plusieurs éléments ensemble.
- **Les liens** `<a>` pour naviguer sur une autre page.
- **Les boutons** `<button>`, qui peuvent effectuer des actions sur la page en
  utilisant le langage [<Icon icon="logos:javascript" /> JavaScript](./javascript.md).
- **Les images** avec `<img>`.

```html
<!doctype html>
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <h1>Top-level title</h1>
    <h2>Subtitle</h2>

    <div>
      <p>Some text</p>
      <img src="image.jpg" alt="Awesome image" />
    </div>
  </body>
</html>
```

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/xc9s7a0h/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

::: info Pour les curieux 🤓

Il existe de nombreux éléments HTML qui n'ont qu'un but _sémantique_, c'est à
dire que **leur utilisation permet à des logiciels qui analysent des pages web de
mieux comprendre sa structure** (comme Google - qui scanne les pages pour les
afficher dans ses résultats).

Par exemple, l'élément `<article>` délimite un article (de presse, blog, ...),
mais a en réalité le même comportement qu'un élément `<div>`.

N'hésite pas à consulter le [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) pour une liste exhaustive des éléments
HTML disponibles.

:::

## Classes et identifiants

Pour identifier un élément HTML, il est possible de leur assigner une classe
et/ou un identifiant (avec un nom de votre choix, _sans espace_).

- **Plusieurs éléments peuvent partager la même classe**. Les classes sont le plus
  souvent utilisées pour appliquer une apparence identique à plusieurs éléments en utilisant CSS.
- **Un seul élément peut avoir le même identifiant**. Les identifiants sont le plus souvent utilisés pour sélectionner un élément précis en JavaScript.

```html
<!doctype html>
<html>
  <head>
    <title>My website</title>
  </head>
  <body>
    <h1 class="title">Top-level title</h1>
    <h2 class="subtitle" id="subtitle-1">Subtitle 1</h2>
    <h2 class="subtitle" id="subtitle-2">Subtitle 2</h2>
  </body>
</html>
```

## Ajouter un fichier CSS

Pour modifier l'apparence d'une page, il faut créer un fichier `.css` dans le
même dossier et l'inclure dans la page à l'aide d'un élément `<link>` (**à
placer dans le `<head>`**).

::: code-group

```html{5} [index.html]
<!doctype html>
<html>
  <head>
    <title>My website</title>
    <link rel="stylesheet" ref="style.css" />
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
</html>
```

```css [style.css]
body {
  background-color: blue;
  color: white;
}
```

:::

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/91L2bv0n/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

## Sélecteurs CSS

Les sélecteurs CSS permettent de **définir sur quels éléments un style va s'appliquer**. On peut sélectionner:

- Tous **les éléments HTML d'un même type** avec leur nom (par exemple, `body`
  ou `h1`).
- **Les éléments avec une classe spécifique** en la préfixant par `.` (par
  exemple, `.title` pour les éléments avec `class="title"`).
- **L'élément avec un identifiant spécifique** en le préfixant par `#` (par exemple, `#subtitle-1` pour l'élément avec `id="subtitle-1"`).

::: code-group

```css [style.css]
body {
  background-color: blue;
}

.title {
  font-size: 25px;
  color: purple;
}

.subtitle {
  font-size: 20px;
}

#subtitle-2 {
  color: red;
}
```

```html [index.html]
<!doctype html>
<html>
  <head>
    <title>My website</title>
    <link rel="stylesheet" ref="style.css" />
  </head>
  <body>
    <h1 class="title">Top-level title</h1>
    <h2 class="subtitle" id="subtitle-1">Subtitle 1</h2>
    <h2 class="subtitle" id="subtitle-2">Subtitle 2</h2>
  </body>
</html>
```

:::

<Badge type="info">
  <Icon icon="simple-icons:jsfiddle" />
  <a href="https://jsfiddle.net/1sxy38hc/" target="_blank">
    Exécuter sur JSFiddle
  </a>
</Badge>

## Propriétés CSS

Il existe de nombreuses propriétés CSS permettant de modifier l'apparence des
éléments. **N'hésite pas à consulter la liste complète sur le [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).**

Voici quelques propriétés utiles:

- `margin` pour définir l'espace vide autour d'un élément en `px` (ex. `margin: 5px`). Existent aussi `margin-top`, `margin-bottom`, `margin-left` et `margin-right`.

- `color` et `background-color` pour définir respectivement la couleur du texte
  et du fond.

- `font-size` et `font-weight` pour définir la taille et l'épaisseur du texte.

::: info Positionnement avancé 🤓

Pour modifier la position des éléments dans la page, renseigne-toi sur l'utilisation des flexbox.

[_Flexbox_ sur le MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

:::
