---
addOns: copycode, lightbox
theme: colors
style: |
   h1 aside{font-weight:normal}
   h5{font-size: 0.85em;background: #EEE;padding: 1em;margin-top: 3em;color: black;}
   li{margin-top:0.5em}
   pre{padding-top:3em}
   .admonition{margin:1.25em auto}
   .admonitionTitle{margin-top:0.5em}
---

# ChatMD <aside>Manuel d'utilisation</aside>


![](https://chatmd.forge.apps.education.fr/logo.svg =150x) {.center}

[ChatMD](https://chatmd.forge.apps.education.fr/) est un outil libre et gratuit qui permet de créer facilement un chatbot personnalisé à partir d'un simple fichier en Markdown.

:::info ✨ Les Fonctionnalités clés

**Simplicité**
- Créez un chatbot en quelques minutes grâce à une syntaxe facile à apprendre
- Utilisation directe en ligne : aucune installation serveur nécessaire

**Personnalisation et flexibilité**
- Interface entièrement configurable
- Syntaxe étendue (variables, conditions, etc.) pour concevoir des chatbots plus avancés

**Intégration possible de l'IA**
- Pas d'IA par défaut, mais possibilité de l'intégrer de manière sobre et ciblée
- Prise en charge du RAG (_Retrieval-Augmented Generation_) pour que les réponses de l'IA intègrent une base de connaissances personnalisée

**Compatibilité RGPD**
- Dans le mode sans IA (par défaut) ou avec une IA en local :
	- Pas de compte à créer
	- Aucune collecte de données personnelles
- Avec IA en ligne :
	- Le créateur du chatbot doit créer un compte pour avoir une clé API (mais pas l'utilisateur)
	- ⚠️ Collecte possible de données personnelles de l'utilisateur selon le fournisseur de LLM utilisé

**Code optimisé et écoresponsable**
- Code très léger, rapide et à faible empreinte carbone (note A+)
- 100 % sur tous les indicateurs Lighthouse
- 100 % de réussite aux tests automatisés d’accessibilité (en attente pour un audit complet)
:::

## Principe général

#### Principe de fonctionnement
:::info C'est très simple !
1. Créez un fichier en Markdown accessible en ligne.
2. Respectez la syntaxe de ChatMD pour définir votre chatbot.
3. Votre chatbot est alors accessible à l'adresse suivante : `https://chatmd.forge.apps.education.fr/#URL`


<label for="redirect">Collez ici l'URL de votre fichier et cliquez sur “OK” pour accéder à votre chatbot :</label>
<input type="url" id="redirect" class="redirect-input" placeholder="Votre URL" role="textbox" title="Votre URL" style="width:75%" data-base-url="chatmd.forge.apps.education.fr"> <button class="redirect-button" data-input-id="redirect" type="button">OK</button>

:::


#### Cas d'usages

On peut imaginer de nombreux usages :
- Réponse à des questions fréquentes (FAQ)
- Tutoriel pour un outil informatique
- Aide à la décision ou à la création
- Guide méthodologique
- Révision de connaissances, quiz interactif
- Outil de formation, d'aide méthodologique ou de découverte d'un sujet
- Discussion avec un personnage historique
- Histoire dont vous êtes le héros
- Escape game, enquête …


La syntaxe de base est simple, mais [ChatMD](https://chatmd.forge.apps.education.fr/) peut être configuré pour des **usages plus complexes** : personnalisation de l'interface, utilisation de variables, de choix aléatoires, intégration avec un LLM, possibilité de faire du RAG…

## Exemples

#### Modèle de démarrage

[Modèle à récupérer](https://codimd.apps.education.fr/mBGbHStJSVOSrlGfGb981A?both)

#### Exemples de chatbots

:::success Partagez vos chatbots !
N'hésitez pas à partager vos exemples de chatbot sur le [salon Tchap dédié à ChatMD](https://www.tchap.gouv.fr/#/room/!BLAbHlkynUkpyIfNvT:agent.education.tchap.gouv.fr) ou par [mail](mailto:forge-apps+guichet+chatmd-chatmd-forge-apps-education-fr-1072-issue-@phm.education.gouv.fr) !

Vous pouvez aussi me contacter sur les [réseaux sociaux](http://eyssette.forge.apps.education.fr/)
:::


##### Tutoriel pour un logiciel ou un outil
- [Tutoriel pour l'application _Ma Carte_ de l'IGN](https://ignf-ma-carte.github.io/chatbot/)
- [Utilisation d'un microscope](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/xGNHIJSeTVCk6FHas-_71g)
- [Aider à l’utilisation de Codabloc en classe de CM2](https://primabord.eduscol.education.fr/un-chatbot-d-aide)
- [Ele@Bot, un chatbot pour accompagner dans la création de parcours Éléa](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/s/uhjFSgThz)
- [Guide technique d'utilisation d'AnalookW 4 pour l'analyse des sons de chauves-souris](https://chatmd.forge.apps.education.fr/#https://raw.githubusercontent.com/guillaumarchais/ChatMD/refs/heads/main/Analook-tuto)
- [Tutoriel pour le logiciel “Evidence of Absence”](https://chatmd.forge.apps.education.fr/#https://github.com/guillaumarchais/ChatMD/blob/main/EoA2-tuto-FR)


##### FAQ
- [Présentation du dispositif TED-i](https://drne.region-academique-bourgogne-franche-comte.fr/presentation-ted-i/)
- [Besoin d'aide sur le GAR ?](https://drane.ac-lyon.fr/spip/GAR-Besoin-d-aide-utiliser-le)
- [Gestion des avis sur une fiche établissement de Google Map](https://drane.ac-lyon.fr/spip/gestion-avis-google-map)
- [Trouver la bonne plateforme d'assistance](https://drane.ac-lyon.fr/spip/Assistance)
- [EnKbot : une aide associée à l'utilisation du site internet « L'EnK », le restaurant d'application du lycée Louis-Bascan](https://chatmd.forge.apps.education.fr/#https://raw.githubusercontent.com/Moniliformopse/chatbots/main/EnKbot.md)
- [Foire Aux Questions pour les Directeurs en début d'année](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/bGuIqvyBT1iTQnnFFhI5VQ?both)
- [Num44Bot : un chatbot créé par une équipe numérique pour répondre aux questions courantes](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/FziWeluESheEBLZFXBrIvw)

### Guide pour les élèves, parents ou collègues d'un établissement
- [A-Lyc-IA : chatbot en widget sur le site d'un lycée pour répondre aux questions sur l'établissement](https://brossaud-blancho.paysdelaloire.e-lyco.fr/)
- [Un assistant pour répondre à des questions concernant un collège et des outils numériques utilisés](https://chatmd.forge.apps.education.fr/#https://college-vincent-van-gogh-arles.forge.apps.education.fr/chatbot_assistance_vvg/chatbot.md)
- [ChatBot d'aide de la cité scolaire Réaumur-Buron](https://reaumur-buron.paysdelaloire.e-lyco.fr/accueil/informations-pratiques/vie-de-leleve/chatbot-daide/)
- [RiBascanIA : un assistant virtuel conversationnel pour accompagner l'utilisation du Règlement intérieur du lycée Louis-Bascan](https://chatmd.forge.apps.education.fr/#https://raw.githubusercontent.com/Moniliformopse/chatbots/main/RiBascanIA.md)

##### Outil de formation à destination de la communauté enseignante
- [Rendre la compréhension d'une histoire accessible, par une enseignante en RASED](https://chatmd.forge.apps.education.fr/#https://horvathjulie.forge.apps.education.fr/bot/comprehension.md)
- [BoBot : un chatbot pour accompagner un parcours de formation sur “Enseigner avec les chatbots”](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/s/g7sQ4xUa5)
- [Scénariser sa formation avec la méthode ABC Learning Design](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/VmyzDYolTauP9wRwLnK84g)
- [Chatbot pour accompagner les personnes formées au programme pHARe dans le milieu scolaire.](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/s/HE5zk4vIE)

##### Outil d'aide à la décision ou à la création
- [Pas à pas pour la création de ”prompts” efficaces afin de créer des activités sur Moodle](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/s/5HamcDX2f)
- [Arbre de décision pour choisir le bon “commit” quand on a fait une modification d'un code source](https://chatmd.forge.apps.education.fr/#https://pad.numerique.gouv.fr/FurkP8BzRY6lcZLqP5avqw%23)

##### Outil de révision de connaissances, d'aide méthodologique ou de découverte sur un sujet
- [Méthode de la dissertation en philosophie](https://chatmd.forge.apps.education.fr/#https://eyssette.forge.apps.education.fr/chatbot/dissertation-philosophie.md)
- [ViTa : un chatbot, à destination d’élèves de 1ère spécialité SVT, avec ou sans IA](https://svt.ac-versailles.fr/spip.php?article1355)
- [GRISMS’Bot : un outil pour préparer les élèves au baccalauréat STSS](https://sante-social.ac-creteil.fr/spip.php?article168)
- [EdBot : un assistant pour guider dans l'automatisation de la résolution d’une équation différentielle du 1er ordre](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/89_9jQXNRga1mbGgXOUuJw?both#)
- [Une collection de chatbots en Technologie sur sur des Objets ou Systèmes Techniques, en lien avec les smartcities](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/UJrd7S7jQKCws_VB4chFbA)
- [Aide sur les triangles rectangles](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/6oL2iMz0Tlas6TqCp8GV2Q)
- [Découverte de l'intelligence artificielle avec des collégiens](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/F2Pd3ZfDREa1afghO57TrA)
- [Le calcul littéral en 4e](https://auxmaths.fr/chatMD/index_calclitte.html)
- [RadcliffeBot : assistance en SVT](https://chatmd.forge.apps.education.fr/#https://raw.githubusercontent.com/Moniliformopse/chatbots/main/RadcliffeBot.md)
- [Chirobot-sons: Petit guide sur les sons émis par les chauves-souris](https://chatmd.forge.apps.education.fr/#https://github.com/guillaumarchais/ChatMD/blob/main/chirobot-sons)
- [Accompagnement pour des défis avec Scratch](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/ZK8abNVmSNWhZXzXzzs6Sw)

##### Escape Game, aventure, enquête
- [Cyber-3000 : un escape-game sous forme de chatbot](https://ww2.ac-poitiers.fr/srane/spip.php?article1125)
- [ Le chat enquêteur (ionBOT) :  une enquête fictive visant à identifier un suspect à partir d’indices chimiques retrouvés sur une scène de crime](https://pedagogie.ac-lille.fr/physique/traam-2024-2025-ionbot-lille/)

##### Discussion avec un personnage historique
- [Discussion avec Lucie Aubrac](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/6b4axSK3QNOLu69IzBlkjg)

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

La syntaxe pour écrire un chatbot avec [ChatMD](https://chatmd.forge.apps.education.fr/) est la suivante :

```
# Titre du chatbot

Message initial

1. [Premier choix](Réponse 1)
2. [Deuxième choix](Réponse 2)

## Réponse 1
- déclencheur 1 (optionnel)
- déclencheur 2 (optionnel)

Contenu de la réponse

1. [Proposition 1](Titre Proposition 1)
2. [Proposition 2](Titre Proposition 2)
```

Dans le message initial et le contenu de chaque réponse, **on peut utiliser toute la syntaxe Markdown** : intégrer des images, des vidéos, des iframes, et même utiliser des balises HTML.

Les **titres de niveau 2** servent à identifier les réponses possibles du chatbot.
Pour qu'un lien vers une réponse fonctionne, il faut que la cible du lien soit exactement identique au texte de la réponse. Il est donc conseillé de faire des copier-coller pour être sûr de ne pas faire d'erreurs.

#### Retour au message initial

Si on ne met pas de cible, le lien renverra alors vers le message initial.

Si on veut éviter la répétition de certains passages dans le message initial quand il réapparaît, on les met dans une section avec la classe "unique" (voir un [exemple](https://codimd.apps.education.fr/XwV4qVY8RM6K65P9PylgGg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/XwV4qVY8RM6K65P9PylgGg))

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

```yaml
---
gestionGrosMots: true
---
```

### Algorithme

Pour améliorer l'algorithme de choix d'une réponse, vous pouvez utiliser ces paramètres dans l'en-tête YAML : 

##### Recherche dans le contenu des réponses


```yaml
rechercheContenu: true
```
L'algorithme ne se contente pas de comparer le message de l'utilisateur avec le titre de la réponse et les déclencheurs, mais il compare aussi ce message avec le contenu entier de la réponse.


##### Gestion des gros mots

```yaml
gestionGrosMots: true
``` 
Permet de détecter les gros mots et les insultes envoyés par l'utilisateur et de formuler une réponse adéquate.

##### Messages qui s'affichent si aucune réponse n'est trouvée

```yaml
messageParDéfaut: ["message 1", "message 2", "message 3"]
```

Permet de modifier le message par défaut qui s'affiche aléatoirement quand le chatbot n'a pas trouvé de réponse pertinente.

Cette liste écrase la [liste définie par défaut](https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr/-/blob/main/app/js/config.mjs#L10).

##### Déclencheurs négatifs

On peut aussi utiliser des déclencheurs négatifs afin d'indiquer des mots-clés ou des expressions qui ne doivent pas se trouver dans la question de l'utilisateur.

On commence dans ce cas le mot-clé avec `! `

```
## Introduction
- intro
- introduire
- ! introuvable
- ! introspection
```

### Apparence

Pour personnaliser l'apparence du chatbot, vous pouvez utiliser différents paramètres dans l'en-tête YAML.

#### Avatar et favicon


Pour changer l'avatar du chatbot (il faut mettre l'url de son image à la place de URL) :
```yaml
avatar: URL
```

Pour que l'avatar soit en forme de cercle :
```yaml
avatarCercle: true
```

Pour changer l'icône du chatbot dans les onglets (il faut mettre l'url de son image à la place de URL)
```yaml
favicon: URL
```



#### Footer

Pour supprimer le pied de page :
```yaml
footer: false
```

Pour customiser ce qui apparaît dans le pied de page (il vaut mieux ne pas mettre un texte très long) :
```yaml
footer: 'Mon footer'
```


#### Thème et styles CSSS

Pour utiliser un thème CSS particulier :
```yaml
theme: bubbles
```
Pour le moment, seul le [thème _bubbles_](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/zQTZQgJVRhy8SP0Gr1AQTQ) est disponible. Il permet d'avoir une conversation qui s'affiche à la manière d'un échange de SMS.

![](https://minio.apps.education.fr/codimd-prod/uploads/71de238fd9d9e28e5a52575fc.png)


Pour ajouter des styles CSS personnalisés.
```yaml
style: |
    a{color:red}
    p{text-align:center}
```

Pour le CSS, le mieux est d'utiliser les outils de développement de votre navigateur, de repérer avec le sélecteur l'élément que vous voulez changer et de repérer la propriété qu'il faut modifier. Vous pouvez tester directement la modification pour voir avant de l'intégrer à votre chatbot.

Pour apprendre le CSS, vous pouvez commencer par les conseils sur le [site de documentation des technologies web de Mozilla](https://developer.mozilla.org/fr/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content).

Vous pouvez aussi demander de l'aide dans le [salon Tchap](https://www.tchap.gouv.fr/#/room/!BLAbHlkynUkpyIfNvT:agent.education.tchap.gouv.fr) ou en faisant un [ticket](https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr/-/issues/new?issuable_template=help)

#### Attributs génériques (classes CSS personnalisées)

Si vous ajoutez ` {.maClasse}` à la fin de la ligne, cette ligne aura la classe `.maClasse`, et vous pouvez utiliser cette classe pour personnaliser l'apparence de cette ligne.

Vous pouvez bien sûr aussi utiliser du HTML dans votre Markdown, pour des mises en page plus complexe.
Si vous souhaitez utiliser de la syntaxe Markdown dans une balise HTML, il faut ajouter l'attribut `markdown`

Exemple :

```htmlmixed=
<div markdown class="maClasse">
Bloc de texte **Markdown** multiligne
</div>
```

#### Effet “machine à écrire”

Pour désactiver l'effet “machine à écrire” pour tout son chatbot (peut être pratique notamment au moment de la conception du chatbot, pour éviter d'attendre l'affichage des réponses), on met dans le YAML :
```yaml
typewriter: false
```

Pour désactiver l'effet typewriter pour un passage seulement, on met `` `\ `` avant et après le passage à afficher d'un coup.

Exemple :
```
\`
texte sans
effet typewriter
\`
```
Si on veut désactiver l'effet typewriter pour tout un message : on écrit `!Typewriter: false` ou `!Typewriter: true` dans le message (de préférence au début du message).

#### Clavier

Pour désactiver le champ d'entrée clavier (si on souhaite simplement guider l'utilisateur avec les options proposées en fin de chaque réponse), on ajoute dans le YAML :

```yaml
clavier: false
```


Si on veut activer ou désactiver le clavier pour un message seulement, on écrit `!Keyboard: false` ou `!Keyboard: true` dans le message (de préférence au début du message).


### Liens internes

Si vous souhaitez ajouter des liens internes vers des réponses du chatbot, mais qui ne sont pas à la fin du message, vous pouvez tout simplement utiliser la syntaxe d'un lien interne en Markdown, avec la cible qui commence par `#`, immédiatement suivi du titre de la réponse :

```
[texte affiché](#titre de la réponse)
```

Mais si vous voulez un affichage avec des boutons comme pour les réponses en fin de message, il faut alors écrire les options avec du code HTML (voir cet [exemple](https://codimd.apps.education.fr/NJs77ZWnQgalVyA6nfuDLQ?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/NJs77ZWnQgalVyA6nfuDLQ))

### Contenus spéciaux

#### Admonitions (encadrés)

Dans le contenu Markdown, vous pouvez utiliser des admonitions, c'est-à-dire des encadrés pour mettre en valeur certains contenus :

```
:::info
Bloc de texte
en markdown
sur plusieurs lignes
:::
```

On peut mettre un titre

```
:::warning Attention !
Bloc de texte
en markdown
sur plusieurs lignes
:::
```

Ou avoir un élément qui se déplie

```
:::success collapsible En savoir plus
Bloc de texte
en markdown
sur plusieurs lignes
:::
```


Plusieurs types d'admonitions sont disponibles : [exemple](https://codimd.apps.education.fr/9U7L4wpOSmaRFl6aRK-J9Q?both) et [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/9U7L4wpOSmaRFl6aRK-J9Q)

#### Iframes

Vous pouvez utiliser ces iframes pour intégrer des contenus interactifs comme H5P ou des vidéos.

Il est conseillé de placer les iframes en fin de réponse pour éviter les problèmes d'affichage ou bien de désactiver l'effet typewriter pour chaque message qui contient un iframe. 

#### Sons

Pour jouer automatiquement un son lors du déclenchement d'une réponse, utiliser la directive suivante dans votre réponse :

```
!Audio : URLduFichierAudio
```

Voir cet [exemple](https://codimd.apps.education.fr/24OabQgvQ_yPd2WE3DrIEg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/24OabQgvQ_yPd2WE3DrIEg)

#### Formules mathématiques (LaTeX)


Pour utiliser LaTeX pour les mathématiques, il faut ajouter dans le YAML :

```
maths: true
```

Vous pouvez alors utilisez la syntaxe `$Latex$` (à l'intérieur un paragraphe) ou `$$Latex$$` (pour un paragraphe à part)

#### Schémas et graphiques

Pour générer des schémas et graphiques via Kroki, ajoutez dans le YAML :

```
plugins: kroki
```

Utilisez ensuite la syntaxe appropriée pour Tikz, GraphViz, Mermaid, PlantUML, Excalidraw, Vega ou Vegalite.

Voir cet [exemple](https://codimd.apps.education.fr/dJpCzTg0SPyPmbj24SSKbg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/dJpCzTg0SPyPmbj24SSKbg)

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

Si vous souhaitez utiliser les titres 2 ou d'autres niveaux de titres pour structurer votre chatbot, et définir les identifiants de réponse avec d'autres niveaux de titre, vous pouvez indiquer dans le YAML :

```yaml
titresRéponses: ["### ", "#### "]
```

Dans cet exemple, cela signifie qu'on décide d'utiliser les titres de niveaux 3 et 4 comme définition des réponses possibles du chatbot. Cela permettra de garder les titres 2 pour structurer les différents types de réponse dans son chatbot (côté créateur du bot, car cela ne changera rien pour l'utilisateur)

### Quiz

Un chatbot sert souvent à répondre à des questions, mais ChatMD peut aussi être utilisé pour poser des questions :

1. **Réponses par clavier** :
   - Utilisez `!Next: Titreréponse` pour forcer la redirection vers une réponse spécifique
   - Le message de l'utilisateur est comparé aux déclencheurs ou même au contenu entier de la réponse si on a ajouté `rechercheContenu: true` dans le YAML.
   - Après 3 erreurs, un bouton vers la bonne réponse s'affiche (sauf si on ajouté `!loop` après le titre de la réponse)

Voir cet [exemple](https://codimd.apps.education.fr/sp8dwq5rQGq3pIj2DPBD0A?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/sp8dwq5rQGq3pIj2DPBD0A).

2. **Réponses par clic** :
   - Utilisez `obfuscate: true` dans le YAML pour cacher le titre des liens, afin d'éviter de donner un indice en survolant un lien (voir cet [exemple](https://codimd.apps.education.fr/hWgravuHTTmfRydTUfjgWQ?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr#https://codimd.apps.education.fr/hWgravuHTTmfRydTUfjgWQ)
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

[ChatMD](https://chatmd.forge.apps.education.fr/) peut se connecter à un LLM en ligne ou en local :

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

:::warning Attention
Il faudra changer `URL_SOURCE_CHATBOT` par l'URL de votre fichier en Markdown, qui doit correspondre à l'URL directe de votre fichier (par exemple du fichier CodiMD), et non pas l'URL du chatbot.
:::

Pour customiser l'image du widget, ajoutez `data-image="URL_IMAGE"` comme paramètre.



## À propos

[ChatMD](https://chatmd.forge.apps.education.fr/) a été créé par Cédric Eyssette, professeur de philosophie et chargé de projet à la DRANE à Lyon.

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

[ChatMD](https://chatmd.forge.apps.education.fr/) n'aurait pas pu exister sans :
- Le soutien institutionnel de la DRANE Lyon et de la DNE
- L'aide de l'[Incubateur de l'Éducation Nationale](https://incubateur.education.gouv.fr/) et particulièrement de Thomas Sanson
- Les suggestions de Perrine Douhéret, Laetitia Allegrini, Romain Estampes, Charlie Rollo, Mélanie Fenaert, Jean-Marc Viglino …
- Les retours de toutes les personnes qui ont testé l'application !

Merci beaucoup !

#### Technologies utilisées

ChatMD repose sur plusieurs logiciels libres :
- [js-yaml](https://github.com/nodeca/js-yaml) pour la gestion des en-têtes yaml
- [typed.js](https://github.com/mattboldt/typed.js) pour l'effet "machine à écrire"
- [showdown](https://github.com/showdownjs/showdown) pour la conversion du markdown en html
- [leo-profanity](https://github.com/jojoee/leo-profanity) et [french-badwords-list](https://github.com/darwiin/french-badwords-list/) pour la gestion des gros mots
- [katex](https://katex.org/) pour la gestion des mathématiques en Latex
- [textFit](https://github.com/STRML/textFit) pour la gestion du redimensionnement automatique

Pour découvrir d'autres outils du créateur de ChatMD : [son site personnel](https://eyssette.forge.apps.education.fr)