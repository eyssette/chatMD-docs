---
addOns: copycode
theme: colors
style: h1 aside {font-weight:normal}
---

# ChatMD <aside>Manuel d'utilisation</aside>


![](https://chatmd.forge.apps.education.fr/logo.svg =150x) {.center}

ChatMD est un outil libre et gratuit qui permet de créer facilement un chatbot personnalisé à partir d'un simple fichier en Markdown.

:::info ✨ Les Fonctionnalités clés

**Simplicité**
- Créez un chatbot en quelques minutes grâce à une syntaxe facile à apprendre
- Utilisation directe en ligne — aucune installation serveur nécessaire

**Personnalisation et flexibilité**
- Interface entièrement configurable
- Syntaxe étendue (variables, conditions, etc.) pour concevoir des chatbots plus avancés

**Intégration possible de l'IA**
- Pas d'IA par défaut, mais possibilité de l'intégrer de manière sobre et ciblée
- Prise en charge du RAG (Retrieval-Augmented Generation) pour que les réponses de l'IA intègrent une base de connaissances personnalisée.

**Compatibilité RGPD**
- Pas de compte à créer
- Aucune collecte de données personnelles

**Code optimisé et écoresponsable**
- Code très léger, rapide et à faible empreinte carbone (note A+)
- 100 % sur tous les indicateurs Lighthouse
- 100 % de réussite aux tests automatisés d’accessibilité (en attente pour un audit complet)
:::
    
## Principe général

#### Principe de fonctionnement

C'est très simple !
1. Créez un fichier en Markdown accessible en ligne.
2. Respectez la syntaxe de ChatMD pour définir votre chatbot.
3. Votre chatbot est alors accessible à l'adresse suivante : `https://chatmd.forge.apps.education.fr/#URL`


<label for="urlSourceChatbot">Collez ici l'URL de votre fichier et cliquez sur "OK" pour accéder à votre chatbot :</label>
<input type="url" id="urlSourceChatbot" placeholder="Votre URL" role="textbox" title="Votre URL" style="width:75%"> <button id="openNewChatbot" type="button">OK</button>



#### Cas d'usages

On peut imaginer de nombreux usages :
- Outil interactif pour pouvoir répondre à des questions fréquentes (FAQ)
- Tutoriel pour un outil informatique
- Guide méthodologique
- Révision de connaissances, quiz interactif
- Discussion avec un personnage historique
- Histoire dont vous êtes le héros
- Escape games …


La syntaxe de base est simple, mais ChatMD peut être configuré pour des **usages plus complexes** : personnalisation de l'interface, utilisation de variables, de choix aléatoires, intégration avec un LLM, possibilité de faire du RAG…

## Exemples

#### Modèle de démarrage

[Modèle à récupérer](https://codimd.apps.education.fr/mBGbHStJSVOSrlGfGb981A?both)

#### Exemples de chatbots

- [Méthode de la dissertation en philosophie](https://chatmd.forge.apps.education.fr/#https://eyssette.forge.apps.education.fr/chatbot/dissertation-philosophie.md)
- [Utilisation d'un microscope](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/xGNHIJSeTVCk6FHas-_71g) ([voir la source](https://codimd.apps.education.fr/xGNHIJSeTVCk6FHas-_71g?both))

N'hésitez pas à partager vos exemples de chatbot !

Contact : [Mastodon](https://scholar.social/@eyssette)


## Le Markdown

#### Le format Markdown

Le Markdown est un format de balisage très léger qui permet d'écrire rapidement du texte formaté.

Par exemple on écrit `**texte en gras**` pour écrire du **texte en gras**, ou alors `_texte en italique_` pour écrire du _texte en italique_.

Pour découvrir le Markdown, vous pouvez suivre ce [tutoriel](https://docs.forge.apps.education.fr/modeles/tutoriels/tutomd/).

#### Hébergement du fichier Markdown

Il existe plusieurs services pour créer un fichier Markdown accessible en ligne.

Si vous êtes prof en France et que avez des identifiants académiques, vous pouvez utiliser [CodiMD](https://codimd.apps.education.fr/) sur le [portail Apps Edu](https://portail.apps.education.fr/).

D'autres outils fonctionnent avec ChatMD et notamment : [Digipage](https://digipage.app/) de La Digitale et [Framapad](https://framapad.org/) de Framasoft

Il est également possible d'utiliser la [Forge des Communs Numériques Éducatifs](https://forge.apps.education.fr/).

#### Hébergement sur la Forge

Une forge est un outil qui permet d'héberger des fichiers texte et de les transformer en site web, en carte mentale, ou encore ici en chatbot ! ChatMD est présent sur la [Forge des Communs Numériques Éducatifs](https://forge.apps.education.fr/) et vous pouvez aussi mettre vos fichiers sur cette forge.

Si vous êtes prof en France et que vous souhaitez utiliser la forge, rejoignez le [groupe Tchap de LaForgeÉdu](https://www.tchap.gouv.fr/#/room/!fnVhKrpqraWfsSirBK:agent.education.tchap.gouv.fr) pour plus d'explications !

## Syntaxe de base

La syntaxe pour écrire un chatbot avec ChatMD est la suivante :

```
# Titre du chatbot
Message initial
1. [Premier choix](Réponse 1)
2. [Deuxième choix](Réponse 2)

## Réponse 1- déclencheur 2 (optionnel)
Contenu de la réponse
1. [Proposition 1](Titre Proposition 1)
2. [Proposition 2](Titre Proposition 2)
```

Dans le message initial et le contenu de chaque réponse, **on peut utiliser toute la syntaxe Markdown** : intégrer des images, des vidéos, des iframes, et même utiliser des balises HTML.

Les **titres de niveau 2** servent à identifier les réponses possibles du chatbot.

#### Méthodes pour déclencher une réponse

Il existe deux manières principales pour déclencher une réponse dans ChatMD :

1. **Avec la souris** : l'utilisateur clique sur une proposition
   
   Pour créer des boutons qui déclenchent des réponses quand on clique dessus, il faut utiliser une liste ordonnée en Markdown :
   
   `1. [intitulé de l'option qui s'affiche pour l'utilisateur](titre de la réponse correspondante dans le fichier en Markdown)`

2. **Avec le clavier** : l'utilisateur pose une question
   
   Pour permettre au chatbot de renvoyer la réponse la plus adéquate, on indique sous le titre de la réponse des déclencheurs (mots clés ou expressions) qui vont renforcer le choix de cette réponse. On utilise une liste non ordonnée en Markdown.

Il est préférable de combiner ces 2 options pour être sûr que l'utilisateur trouve les réponses à ses questions !

#### Fonctionnement de l'algorithme de recherche

Si on utilise des déclencheurs, ChatMD calcule la réponse la plus adéquate.

Ce n'est pas une simple recherche d'occurrences : le calcul intègre une décomposition en tokens et un calcul de distance lexicale.

La décomposition en tokens permet de retrouver des racines communes et la distance lexicale permet de trouver une réponse malgré des fautes d'orthographe.

## Configuration avancée

### L'en-tête YAML

La plupart des options reposent sur l'ajout de paramètres dans l'en-tête YAML du fichier Markdown.

Un en-tête YAML est une section spéciale dans laquelle on déclare certaines variables, qu'un programme comme ChatMD peut ensuite utiliser.

Cet en-tête doit se trouver au tout début du fichier. Il faut commencer et terminer l'en-tête par trois tirets `---`.

Voici un exemple d'en-tête YAML :

```
---
gestionGrosMots: true
---
```

### Algorithme

Pour améliorer l'algorithme de choix d'une réponse, vous pouvez utiliser ces paramètres dans l'en-tête YAML : 

- `rechercheContenu: true` : l'algorithme ne se contente pas de comparer le message de l'utilisateur avec le titre de la réponse et les déclencheurs, mais il compare aussi ce message avec le contenu entier de la réponse.
- `gestionGrosMots: true` : permet de détecter les gros mots et les insultes envoyés par l'utilisateur et de formuler une réponse adéquate.
- `messageParDéfaut: ["message 1", "message 2", "message 3"]` : permet de modifier le message par défaut qui s'affiche aléatoirement quand le chatbot n'a pas trouvé de réponse pertinente.

On peut aussi utiliser des déclencheurs négatifs afin d'indiquer des mots-clés ou des expressions qui ne doivent pas se trouver dans la question de l'utilisateur :

`- ! déclencheur négatif`

### Apparence

Pour personnaliser l'apparence du chatbot, vous pouvez utiliser ces paramètres dans l'en-tête YAML :

- `style: a{color:red}` : permet d'ajouter des styles CSS personnalisés.
- `avatar: URL` : permet de changer l'avatar du chatbot (il faut mettre l'url de son image à la place de URL)
- `avatarCercle: true` : permet d'avoir un avatar en forme de cercle
- `favicon: URL` : permet de changer l'icône du chatbot dans les onglets (il faut mettre l'url de son image à la place de URL)
- `footer: false` : permet de supprimer le pied de page
- `footer: 'Mon footer'` : permet de customiser ce qui apparaît dans le pied de page
- `theme: bubbles` : permet d'utiliser un thème CSS particulier (ici le thème "bubbles")
- `typewriter: false` : désactive l'effet "machine à écrire"
- `clavier: false` : désactive le champ d'entrée clavier si on souhaite simplement guider l'utilisateur avec les options proposées en fin de chaque réponse.

Pour contrôler le clavier et l'effet typewriter au niveau des réponses individuelles :

- Pour activer/désactiver le clavier : `contenuDynamique: true` dans le YAML, puis ``` `@KEYBOARD = true` ``` ou ``` `@KEYBOARD = false` ``` dans le code markdown
- Pour désactiver l'effet typewriter :
  - Pour un passage : `` \`texte sans effet typewriter\` ``
  - Pour tout un message : `!Typewriter: false` ou `!Typewriter: true`

Vous pouvez définir des classes CSS personnalisées et les utiliser ainsi :
- Pour une ligne : ajouter ` {.maClasse}` à la fin de la ligne
- Pour plusieurs lignes :
  ```
  <div markdown class="maClasse">
  Bloc de texte Markdown multiligne
  </div>
  ```

### Contenus spéciaux

#### Admonitions (encadrés)

Dans le contenu Markdown, vous pouvez utiliser des admonitions, c'est-à-dire des encadrés pour mettre en valeur certains contenus :

```
:::info
contenu
:::
```

Plusieurs types d'admonitions sont disponibles : [exemple](https://codimd.apps.education.fr/9U7L4wpOSmaRFl6aRK-J9Q?both) et [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/9U7L4wpOSmaRFl6aRK-J9Q)

#### Contenus multimédias

Vous pouvez aussi utiliser :
1. Des iframes pour intégrer des contenus interactifs comme H5P (placez-les en fin de réponse pour éviter les problèmes d'affichage ou bien désactivez l'effet typewriter pour les messages qui contiennent des iframes)
2. La directive `!Audio : URLduFichierAudio` pour jouer automatiquement un son lors du déclenchement d'une réponse (voir cet [exemple](https://codimd.apps.education.fr/24OabQgvQ_yPd2WE3DrIEg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/24OabQgvQ_yPd2WE3DrIEg)).

#### Formules mathématiques (LaTeX)

Pour utiliser LaTeX pour les mathématiques :
1. Ajoutez `maths: true` dans le YAML
2. Utilisez la syntaxe `$Latex$` (à l'intérieur un paragraphe) ou `$$Latex$$` (pour un paragraphe à part)

#### Schémas et graphiques

Pour générer des schémas et graphiques via Kroki :
1. Ajoutez `plugins: kroki` dans le YAML
2. Utilisez la syntaxe appropriée pour Tikz, GraphViz, Mermaid, PlantUML, Excalidraw, Vega ou Vegalite (voir cet [exemple](https://codimd.apps.education.fr/dJpCzTg0SPyPmbj24SSKbg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/dJpCzTg0SPyPmbj24SSKbg))

### Chatbots très longs

#### Variables fixes

Pour les chatbots complexes, vous pouvez définir des variables fixes dans le YAML :

```
variables:
  maVariable1: "Ceci est ma variable 1"
  maVariable2: "Ceci est ma variable 2"
```

Dans votre contenu Markdown, utilisez-les ainsi : `@{maVariable1}`

- Les variables sans préfixe `_` sont interprétées au déclenchement (ce qui permet d'intégrer de l'aléatoire avec `///` comme séparateur entre les différents choix possibles)
- Les variables avec préfixe `_` sont interprétées à la génération du chatbot, ce qui permet de créer des variables fixes pour les menus de choix d'option en fin de message

Voir cet [exemple](https://codimd.apps.education.fr/WySjMI5iQKOtTSJ3XhCZBQ?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/WySjMI5iQKOtTSJ3XhCZBQ)

#### Répartition du contenu entre plusieurs fichiers

Pour les chatbots avec beaucoup de contenu, vous pouvez répartir la source entre plusieurs fichiers :

1. Via le YAML :
   ```
   include: ['URL fichier 1', 'URL fichier 2']
   ```

2. Via le projet source dans les fichiers de données :
   - Modifiez `js/data/index.md`
   - Ajoutez des fichiers `.md` dans le dossier `data`
   - Exécutez `npx task build` après avoir installé les dépendances

3. Via le projet source avec le fichier de configuration
    - Modifiez `js/config.mjs`

#### Structuration du document

Si vous souhaitez ajouter des liens internes vers des réponses du chatbot, mais qui ne sont pas à la fin du message :
1. Écrivez les options avec du code HTML directement (voir cet [exemple](https://codimd.apps.education.fr/NJs77ZWnQgalVyA6nfuDLQ?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/NJs77ZWnQgalVyA6nfuDLQ))
2. Utilisez `[intitulé du lien](#titre de la réponse)` pour créer des liens sans générer de boutons

Si vous souhaitez utiliser les titres 2 ou d'autres niveaux de titres pour structurer votre chatbot, et définir les identifiants de réponse avec d'autres niveaux de titre :
4. Utilisez par exemple `titresRéponses: ["### ", "#### "]` dans le YAML pour utiliser les titres de niveaux 3 et 4 comme définition des réponses possibles du chatbot

### Quiz

Un chatbot sert souvent à répondre à des questions, mais ChatMD peut aussi être utilisé pour poser des questions :

1. **Réponses par clavier** :
   - Utilisez `!Next: Titreréponse` pour forcer la redirection vers une réponse spécifique
   - Le message de l'utilisateur est comparé aux déclencheurs ou même au contenu entier de la réponse si on a ajouté `rechercheContenu: true` dans le YAML.
   - Après 3 erreurs, un bouton vers la bonne réponse s'affiche (sauf si on ajouté `!loop` après le titre de la réponse)

Voir cet [exemple](https://codimd.apps.education.fr/sp8dwq5rQGq3pIj2DPBD0A?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/sp8dwq5rQGq3pIj2DPBD0A).

2. **Réponses par clic** :
   - Utilisez `obfuscate: true` dans le YAML pour cacher le titre des liens, afin d'éviter de donner un indice en survolant un lien (voir cet [exemple](https://codimd.apps.education.fr/hWgravuHTTmfRydTUfjgWQ?both)
   - Combinez avec l'aléatoire pour varier les questions

### Aléatoire

Pour diversifier les réponses :

1. Versions multiples d'une réponse : séparez-les dans votre message par `---`. Le chatbot sélectionnera aléatoirement l'une de ces versions.
2. Ordre aléatoire des propositions : utilisez `1)` au lieu de `1.` dans la numérotation pour que ChatMD choisisse l'ordre d'apparition de cette proposition.
3. Sélection aléatoire de propositions : ajoutez `!Select: x` avant la liste (voir cet [exemple](https://codimd.apps.education.fr/f6QP57QNT2S-crAjOwdahg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/f6QP57QNT2S-crAjOwdahg)).
4. Redirection aléatoire : utilisez `!SelectNext: titre1 / titre2 / titre3` (voir cet [exemple](https://codimd.apps.education.fr/Yvq5u2btTOmrTFCFoXGTwg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/Yvq5u2btTOmrTFCFoXGTwg))

On peut utiliser de l'aléatoire également dans les variables fixes ou dans les variables dynamiques.

### Variables dynamiques

Pour utiliser des variables dynamiques :

1. Ajoutez `contenuDynamique: true` dans le YAML
2. Définissez des variables :
   - Dans un bloc code : `` `@mavariable = contenu` ``
   - Dans un bouton : `1. [intitulé @mavariable=contenu](titre réponse)`
3. Pour l'aléatoire : `` `@mavariable = option1 /// option2 /// option3` ``
4. Pour les conditions :
   - Commencez avec `` `if @mavariable==valeur` ``
   - Vous pouvez écrire des conditions complexes : `` `if (@var1==2 && @var2>3 || @var4!="oui")` ``
   - Écrivez dessous le contenu qui doit être affiché si la condition est vérifiée, sautez une ligne
   - Terminez avec `` `endif` ``

Autres fonctionnalités des variables dynamiques :
- Récupération du message utilisateur : `` `@mavariable = @INPUT : Titre réponse` `` (voir cet [exemple](https://codimd.apps.education.fr/_2I1TWwBT22IML7BsR7sWw?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/_2I1TWwBT22IML7BsR7sWw))
- Calculs : `` `@mavariable = calc(@score+1)` `` (voir cet [exemple](https://codimd.apps.education.fr/6ZFeM407RbyCPxpAxKU8ow?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/6ZFeM407RbyCPxpAxKU8ow))
- La valeur des paramètres dans l'URL est disponible avec `@GETnomduparamètre`
    - Assignation immédiate de la valeur d'un paramètre dans une variable dédiée : `` ` `@mavariable = calc(@GETnomduparamètre)` ``

### Plusieurs bots

Pour gérer plusieurs personnages de chatbot dans un même projet :

1. Déclarez les bots dans le YAML :
   ```
   bots:
     nomBot1:
       avatar: URLimageBot1
       cssAvatar: "CSS particulier pour l'avatar du Bot1"
       cssMessage: "CSS particulier pour les messages du Bot1"
     nomBot2:
       avatar: URLimageBot2
       cssAvatar: "CSS particulier pour l'avatar du Bot2"
       cssMessage: "CSS particulier pour les messages du Bot2"
   ```

2. Utilisez la directive `!Bot: botName` pour changer de bot dans les réponses


On peut avoir plusieurs bots qui se répondent dans un même message

Exemple : [source](https://codimd.apps.education.fr/pKXavCOeTfityYVTTS6aMA?both) et [chatbot](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/pKXavCOeTfityYVTTS6aMA)


## Utilisation de l'IA

#### Principe

ChatMD peut se connecter à un LLM en ligne ou en local :

- Configuration complète : modèle, préprompt, nombre de tokens, etc.
- Mode d'utilisation flexible : réponse entièrement par LLM ou enrichissement ponctuel
- RAG simplifié : indication de sources d'information pour le LLM

ChatMD permet également de faire du RAG de manière simplifiée : on peut indiquer des sources d'informations, qui seront utilisées par le LLM pour produire sa réponse.
Ce RAG ne repose pas sur une vectorisation préalable de l'information. On pourrait le faire, mais l'intérêt est ici de ne pas multiplier les appels à une API externe, afin d'avoir un usage plus sobre de l'IA.

#### Configuration

Exemples de configuration :
- [Utiliser ChatMD avec un LLM en local](https://codimd.apps.education.fr/unR-D6xRSMOnvySa5-kCdg?both)
- [Utiliser ChatMD avec un LLM en ligne](https://codimd.apps.education.fr/nVOl6sQKTfqq_OWAUmxcYg?both)

## Intégration dans un site web

#### Intégration par iframe

```html
<iframe src="https://chatmd.forge.apps.education.fr/#URLDEVOTRECHATBOT" style="border:0; width:100%; height:700px"></iframe>
```

#### Intégration comme widget

Insérez ce code en bas de page dans l'élément `body` :

```js
<script id="chatmdWidgetScript" src="https://chatmd.forge.apps.education.fr/widget.min.js" data-chatbot="URL_SOURCE_CHATBOT"></script>
```

Pour customiser l'image du widget, ajoutez `data-image="URL_IMAGE"` comme paramètre.



## À propos

ChatMD a été créé par Cédric Eyssette, professeur de philosophie et chargé de projet à la DRANE à Lyon.

C'est un logiciel libre sous licence MIT. Les sources sont disponibles sur [la Forge des Communs Numériques Éducatifs](https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr).

#### Signalement de bugs et suggestions

Vous pouvez :
- [Faire une suggestion](https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr/-/issues/new?issuable_template=suggestion) de nouvelles fonctionnalités
- [Signaler un bug](https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr/-/issues/new?issuable_template=bug)
- Discuter via les [tickets](https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr/-/issues/)
- Contacter par [mail](mailto:forge-apps+guichet+chatmd-chatmd-forge-apps-education-fr-1072-issue-@phm.education.gouv.fr)

#### Communauté et aide

- Sur Tchap : [salon dédié à ChatMD](https://www.tchap.gouv.fr/#/room/!BLAbHlkynUkpyIfNvT:agent.education.tchap.gouv.fr)
- Via le système des [tickets](https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr/-/issues/)


#### Soutiens et remerciements

ChatMD n'aurait pas pu exister sans :
- Le soutien institutionnel de la DRANE Lyon et de la DNE
- L'aide de l'[Incubateur de l'Éducation Nationale](https://incubateur.education.gouv.fr/) et particulièrement Thomas Sanson
- Les suggestions de Perrine Douhéret, Laetitia Allegrini, Romain Estampes, Charlie Rollo, Mélanie Fenaert, Jean-Marc Viglino
- Les retours de tous les testeurs

#### Technologies utilisées

ChatMD repose sur plusieurs logiciels libres :
- [js-yaml](https://github.com/nodeca/js-yaml) pour la gestion des en-têtes yaml
- [typed.js](https://github.com/mattboldt/typed.js) pour l'effet "machine à écrire"
- [showdown](https://github.com/showdownjs/showdown) pour la conversion du markdown en html
- [leo-profanity](https://github.com/jojoee/leo-profanity) et [french-badwords-list](https://github.com/darwiin/french-badwords-list/) pour la gestion des gros mots
- [katex](https://katex.org/) pour la gestion des mathématiques en Latex
- [textFit](https://github.com/STRML/textFit) pour la gestion du redimensionnement automatique

Pour découvrir d'autres outils du créateur : [son site personnel](https://eyssette.forge.apps.education.fr)