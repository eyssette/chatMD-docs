## Intégration dans un site web

### Iframe

Une _iframe_ permet d'intégrer directement votre chatbot dans une page web à l'aide d'une balise HTML.

Cela affiche l'interface du chatbot dans un cadre intégré à votre site.

```html
<iframe src="https://chatmd.forge.apps.education.fr/#URLDEVOTRECHATBOT" style="border:0; width:100%; height:700px"></iframe>
```

:::info Explications
- `src` : remplacez URLDEVOTRECHATBOT par l'URL de la source du chatbot que vous souhaitez intégrer.
- `border:0` : pas de bordure autour de l'_iframe_.
- `width:100%` : largeur de l'_iframe_ égale à 100% pour que l'_iframe_ prenne toute la largeur de son conteneur.
- `height:700px` : hauteur fixe de 700px de l'_iframe_ (vous pouvez l'ajuster selon vos besoins)
:::

### Widget

Le widget permet d'ajouter un bouton flottant en bas à droite de la page.

Lorsqu'on clique sur le bouton, le chatbot s'ouvre dans une fenêtre superposée juste au-dessus du bouton.

#### Code à insérer

Placez ce script, de préférence en bas de page, dans l'élément `body` :

```html
<script id="chatmdWidgetScript" src="https://chatmd.forge.apps.education.fr/widget.min.js" data-chatbot="URL_SOURCE_CHATBOT"></script>
```

:::info Explications
- `id` : ne changez pas l'identifiant sinon le widget ne marchera pas
- `src` : ne changez pas cette URL qui correspond à l'adresse du script qui permet d'afficher le widget
- `data-chatbot` : remplacez `URL_SOURCE_CHATBOT` par l'URL directe de votre fichier Markdown (par exemple, un lien vers votre CodiMD).
:::

:::warning Attention
`URL_SOURCE_CHATBOT` doit correspondre à l'URL directe de votre fichier source.

Il est important de ne pas utiliser l'URL complète du chatbot lui-même, mais bien celle de votre source en Markdown.
:::

#### Personnalisation de l'image du widget

Pour customiser l'image du widget, ajoutez `data-image="URL_IMAGE"` comme paramètre.

```html
<script
  id="chatmdWidgetScript"
  src="https://chatmd.forge.apps.education.fr/widget.min.js"
  data-chatbot="URL_SOURCE_CHATBOT"
  data-image="URL_IMAGE"
></script>
```

Remplacez `URL_IMAGE` par le lien direct vers l'image que vous souhaitez utiliser (par exemple, un logo personnalisé).

L'image doit idéalement être de petite taille pour un bon rendu.

#### Exemples d'utilisation de ChatMD en widget

- [Sandbot : chatbot du lycée Georges Sand - Domont dans l'académie de Versailles](https://www.lyc-sand-domont.fr/)


### URL personnalisée <aside>sur la Forge des communs numériques éducatifs</aside>


Vous pouvez créer votre propre dépôt sur la [Forge des communs numériques éducatifs](http://forge.apps.education.fr/), afin d'avoir une URL personnalisée pour votre chatbot.

Attention à choisir un nom bien spécifique à votre projet !

Pour créer votre chatbot sur la Forge, il suffit de bifurquer le [modèle de déploiement avec ChatMD](https://forge.apps.education.fr/docs/modeles/modele-chatmd).

Pour comprendre comment bifurquer un projet et choisir votre URL, vous pouvez suivre ce tutoriel : https://avoir-un-super-chemin-d-acces-sur-la.forge.apps.education.fr/

### Export SCORM pour Moodle :<aside>intégration dans _Magistère_ ou _Éléa_</aside>

L'export SCORM permet d'intégrer votre chatbot dans les plateformes de type _Moodle_ comme _Magistère_ et _Éléa_.

:::info Intégrer ChatMD en tant que module SCORM présente deux avantages importants
1. Pouvoir **calculer un score ou un statut de réussite** dans ChatMD et l'envoyer ensuite dans Moodle pour qu'il soit récupéré en tant que note ou condition d'achèvement du parcours
2. Pouvoir **enregistrer les interactions de l'utilisateur avec le chatbot** afin que la personne qui a conçu le parcours puisse voir ce que les participants ont fait avec le chatbot
:::


#### Configurer son chatbot pour l'utiliser avec Moodle

Pour activer l'intégration de votre chatbot avec Moodle, il faut ajouter la propriété `scorm: true` dans l'en-tête YAML.

L'enregistrement des interactions de l'utilisateur avec le chatbot sera alors automatique.

Mais si vous souhaitez faire remonter un score ou bien un statut de réussite, il faut activer les variables dynamiques dans le YAML et utiliser les variables suivantes :
- `scormScore` pour définir un nombre de points
- `scormScoreMax` pour définir le nombre de points maximal possible
- `scormSuccess` pour définir un statut de réussite, qui est soit `true`, soit `false`, soit `undefined` par défaut.

Vous pouvez aussi faire remonter d'autres informations, en utilisant la variable `scormComment`.

Enfin, vous pouvez utiliser dans votre chatbot le nom de l'utilisateur Moodle avec la variable `@GETscormName`.

#### Exporter son chatbot en tant que module SCORM

Utilisez l'outil ci-dessous pour créer le package SCORM (fichier zip) à intégrer ensuite comme activité dans Moodle.

<iframe src="https://chatmd.forge.apps.education.fr/docs/create_scorm_package.html" style="border:0; width:100%; height:200px"></iframe>


#### Récupérer les informations dans Moodle

Pour pouvoir voir les informations envoyées par ChatMD vers Moodle, il faut aller dans les rapports du module SCORM et cliquer sur la tentative de l'utilisateur.

Si vous avez calculé un score ou un statut de réussite, il sera déjà affiché et vous aurez aussi accès au temps passé sur le chatbot.

Pour pouvoir voir la conversation de l'utilisateur, il faut cliquer sur les détails du parcours, vous pouvez alors utiliser le bookmarklet suivant pour pouvoir afficher automatiquement dans une nouvelle fenêtre la conversation de l'utilisateur.

Enregistrez ce bookmarklet en le glissant-déposant dans vos favoris et cliquez dessus quand vous êtes sur les détails d'un parcours d'utilisateur.

<a href="javascript:(function(){const script=document.createElement('script');script.src='https://chatmd.forge.apps.education.fr/docs/js/open_chatbot_from_moodle_report.js';document.body.appendChild(script);})();">Voir la conversation</a>

<!-- TODO: ajouter autres possibilités d'intégration dans un site web
Ajouter : déploiement sur une forge + déploiement sur un serveur local + intégration dans une application web avec source en base64
-->