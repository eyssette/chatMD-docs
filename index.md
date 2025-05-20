---
addOns: copycode, lightbox, highlight
theme: colors
style: |
   .displayHomepage .admonition{font-size:0.95em}
   .displayHomepage .admonition ul{padding-left: 1.75em;}
   .displayHomepage li{margin-top: 0.25em}
   h1 aside{font-weight:normal}
   h3 span {font-weight: normal; font-size: 0.8em; vertical-align: text-top;}
   h3 aside{font-weight:normal;font-size:0.9em!important}
   h5{font-size: 0.85em;background: #EEE;padding: 1em;margin-top: 3em;color: black;}
   li{margin-top:0.5em}
   pre{padding-top:3em; min-width:60%}
   .admonition{margin:1.25em auto}
   .admonitionTitle{margin-top:0.5em}
   .hljs{background:white; text-wrap:auto}
   .hljs-code{background:#eefff9d9}
   .language-html .hljs-tag{background:none}
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
- Support du <abbr title="Retrieval-Augmented Generation">RAG</abbr> : ajout de bases de connaissances pour des réponses IA plus précises

**Compatibilité RGPD**
- Mode sans IA (par défaut) ou avec IA en local :
	- pas de compte à créer
	- pas de collecte de données personnelles
- Avec IA en ligne :
	- nécessité de créer un compte pour le créateur du chatbot : accès à l'IA avec <abbr title="mot de passe pour pouvoir interroger un LLM et obtenir une réponse">clé API</abbr>
	- pas besoin de compte pour l'utilisateur
	- ⚠️ collecte de données possible (selon le fournisseur du service IA)

**Code optimisé et écoresponsable**
- Code très léger, rapide et à faible empreinte carbone (note A+)
- 100 % sur tous les indicateurs Lighthouse
- 100 % de réussite aux tests automatisés d'accessibilité (en attente pour un audit complet)
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

ChatMD peut même intégrer de la géolocalisation, ce qui permet d'autres usages :
- Jeu de piste
- Visite scolaire augmentée 
- Recommandations fondées sur la position de l'utilisateur


La syntaxe de base est simple, mais [ChatMD](https://chatmd.forge.apps.education.fr/) peut être configuré pour des **usages plus complexes** : personnalisation de l'interface, utilisation de variables, de choix aléatoires, intégration avec un LLM, possibilité de faire du RAG…

## Exemples

Merci à toutes les personnes qui ont accepté de partager leur chatbot ci-dessous !

:::success
N'hésitez pas à partager vous aussi vos exemples de chatbot :
- sur le [salon Tchap dédié à ChatMD](https://www.tchap.gouv.fr/#/room/!BLAbHlkynUkpyIfNvT:agent.education.tchap.gouv.fr) 
- par [mail](mailto:forge-apps+guichet+chatmd-chatmd-forge-apps-education-fr-1072-issue-@phm.education.gouv.fr), ou via les [réseaux sociaux](http://eyssette.forge.apps.education.fr/) !
:::


#### Tutoriel pour un logiciel
- [Tutoriel pour l'application _Ma Carte_ de l'IGN](https://ignf-ma-carte.github.io/chatbot/)
- [Aider à l'utilisation de Codabloc en classe de CM2](https://primabord.eduscol.education.fr/un-chatbot-d-aide)
- [Ele@Bot, un chatbot pour accompagner dans la création de parcours Éléa](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/s/uhjFSgThz)
- [Guide technique d'utilisation d'AnalookW 4 pour l'analyse des sons de chauves-souris](https://chatmd.forge.apps.education.fr/#https://raw.githubusercontent.com/guillaumarchais/ChatMD/refs/heads/main/Analook-tuto)
- [Tutoriel pour le logiciel “Evidence of Absence”](https://chatmd.forge.apps.education.fr/#https://github.com/guillaumarchais/ChatMD/blob/main/EoA2-tuto-FR)

#### Guide d'utilisation d'un outil
- [Utilisation d'un microscope](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/xGNHIJSeTVCk6FHas-_71g)
- [Utilisation de la perceuse à colonne dans un atelier Métallerie](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/j2c6hkpCRuua0almpXIMdA?both)

#### FAQ
- [Présentation du dispositif TED-i](https://drne.region-academique-bourgogne-franche-comte.fr/presentation-ted-i/)
- [Besoin d'aide sur le GAR ?](https://drane.ac-lyon.fr/spip/GAR-Besoin-d-aide-utiliser-le)
- [Gestion des avis sur une fiche établissement de Google Map](https://drane.ac-lyon.fr/spip/gestion-avis-google-map)
- [Trouver la bonne plateforme d'assistance](https://drane.ac-lyon.fr/spip/Assistance)
- [EnKbot : une aide associée à l'utilisation du site internet « L'EnK », le restaurant d'application du lycée Louis-Bascan](https://chatmd.forge.apps.education.fr/#https://raw.githubusercontent.com/Moniliformopse/chatbots/main/EnKbot.md)
- [Foire Aux Questions pour les Directeurs en début d'année](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/bGuIqvyBT1iTQnnFFhI5VQ?both)
- [Num44Bot : un chatbot créé par une équipe numérique pour répondre aux questions courantes](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/FziWeluESheEBLZFXBrIvw)

#### Guide pour les élèves, parents ou collègues d'un établissement
- [A-Lyc-IA : chatbot en widget sur le site d'un lycée pour répondre aux questions sur l'établissement](https://brossaud-blancho.paysdelaloire.e-lyco.fr/)
- [Un assistant pour répondre à des questions concernant un collège et des outils numériques utilisés](https://chatmd.forge.apps.education.fr/#https://college-vincent-van-gogh-arles.forge.apps.education.fr/chatbot_assistance_vvg/chatbot.md)
- [ChatBot d'aide de la cité scolaire Réaumur-Buron](https://reaumur-buron.paysdelaloire.e-lyco.fr/accueil/informations-pratiques/vie-de-leleve/chatbot-daide/)
- [RiBascanIA : un assistant virtuel conversationnel pour accompagner l'utilisation du Règlement intérieur du lycée Louis-Bascan](https://chatmd.forge.apps.education.fr/#https://raw.githubusercontent.com/Moniliformopse/chatbots/main/RiBascanIA.md)

#### Outil de formation à destination de la communauté enseignante
- [Rendre la compréhension d'une histoire accessible, par une enseignante en RASED](https://chatmd.forge.apps.education.fr/#https://horvathjulie.forge.apps.education.fr/bot/comprehension.md)
- [BoBot : un chatbot pour accompagner un parcours de formation sur “Enseigner avec les chatbots”](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/s/g7sQ4xUa5)
- [Scénariser sa formation avec la méthode ABC Learning Design](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/VmyzDYolTauP9wRwLnK84g)
- [Chatbot pour accompagner les personnes formées au programme pHARe dans le milieu scolaire.](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/s/HE5zk4vIE)
- [Aide à la mise en œuvre d'un projet EMI autour de la webradio](https://www.pedagogie.ac-aix-marseille.fr/jcms/c_11266070/es/assistant-virtuel-emi-et-webradio)

#### Outil d'aide à la décision ou à la création
- [BTK-Bot : un assistant pour aider à trouver sa future formation après un BAC STL Biotechnologie](https://chatmd.forge.apps.education.fr/#https://biomicrobio.fr/images/BOT/BTKBot.md)
- [Pas à pas pour la création de ”prompts” efficaces afin de créer des activités sur Moodle](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/s/5HamcDX2f)
- [Aide à la préparation d'un interview pour une webradio](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/PXdIW56mQHOhtOwc6WfPoA?view)
- [Arbre de décision pour choisir le bon “commit” quand on a fait une modification d'un code source](https://chatmd.forge.apps.education.fr/#https://pad.numerique.gouv.fr/FurkP8BzRY6lcZLqP5avqw%23)

#### Outil de révision de connaissances ou d'aide méthodologique
- [Méthode de la dissertation en philosophie](https://chatmd.forge.apps.education.fr/#https://eyssette.forge.apps.education.fr/chatbot/dissertation-philosophie.md)
- [ViTa : un chatbot, à destination d'élèves de 1ère spécialité SVT, avec ou sans IA](https://svt.ac-versailles.fr/spip.php?article1355)
- [GRISMS'Bot : un outil pour préparer les élèves au baccalauréat STSS](https://sante-social.ac-creteil.fr/spip.php?article168)
- [EdBot : un assistant pour aider à résoudre les équations différentielles du programme de Physique-Chimie de Terminale](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/bO2VCgMkSSWeET_oEKsZ2A)
- [Une collection de chatbots en Technologie sur sur des Objets ou Systèmes Techniques, en lien avec les smartcities](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/UJrd7S7jQKCws_VB4chFbA)
- [Aide sur les triangles rectangles](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/6oL2iMz0Tlas6TqCp8GV2Q)
- [Le calcul littéral en 4e](https://auxmaths.fr/chatMD/index_calclitte.html)
- [RadcliffeBot : assistance en SVT](https://chatmd.forge.apps.education.fr/#https://raw.githubusercontent.com/Moniliformopse/chatbots/main/RadcliffeBot.md)
- [Accompagnement pour des défis avec Scratch](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/ZK8abNVmSNWhZXzXzzs6Sw)
- [Alpha, assistant pour les études de documents en SVT au collège, avec ou sans IA](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/pCnPSO0CRDWn-Yq-f8D1Xg)

#### Guide de découverte ou d'exploration d'un sujet

- [Etibot, un guide pour explorer les enjeux éthiques liés à l'intelligence artificielle.](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/eFYRHyEiQhWw6B1aWxpayA?view)
- [Découverte de l'intelligence artificielle avec des collégiens](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/F2Pd3ZfDREa1afghO57TrA)
- [Chirobot-sons: petit guide sur les sons émis par les chauves-souris](https://chatmd.forge.apps.education.fr/#https://github.com/guillaumarchais/ChatMD/blob/main/chirobot-sons)

#### Escape Game, aventure, enquête
- [Cyber-3000 : un escape-game sous forme de chatbot](https://ww2.ac-poitiers.fr/srane/spip.php?article1125)
- [ Le chat enquêteur (ionBOT) :  une enquête fictive visant à identifier un suspect à partir d'indices chimiques retrouvés sur une scène de crime](https://pedagogie.ac-lille.fr/physique/traam-2024-2025-ionbot-lille/)
- [Amybot et le complot des pixels : une enquête en SNT autour des enjeux de la photographie numérique](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/4znvEQq_TmOkr4hVgbOQlg?both)

#### Discussion avec un personnage historique
- [Discussion avec Lucie Aubrac](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/6b4axSK3QNOLu69IzBlkjg)
- [Discussion avec Marie-Antoinette](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/foeWS9ONTDW2KEGsu8BaIA)

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

### Structure générale d'un chatbot

Pour faire un chatbot avec [ChatMD](https://chatmd.forge.apps.education.fr/), il faut l'écrire en Markdown avec une structure simple :

```markdown
# Titre du chatbot

Message initial

1. [Premier choix](choix 1)
2. [Deuxième choix](choix 2)

## choix 1
Message pour le choix 1

## choix 2
- déclencheur 1
- déclencheur 2

Message pour le choix 2

1. [Bouton cliquable 1](cible bouton 1)
2. [Bouton cliquable 2](cible bouton 2)
```

:::info Points clés
- Le message initial et le contenu des réponses peuvent inclure toute la syntaxe Markdown : images, vidéos, iframes, HTML, etc.
- Les titres de niveau 2 (`## `) désignent les réponses possibles.
- Pour chaque réponse, on peut associer des déclencheurs
- À la fin de chaque message, on peut mettre des boutons cliquables
:::


:::warning Attention
Pour qu'un lien vers une réponse fonctionne, il faut que la cible du lien soit exactement identique au texte de la réponse.

Il est donc conseillé de faire des copier-coller pour être sûr de ne pas faire d'erreurs.
:::

Voici un [modèle à récupérer](https://codimd.apps.education.fr/mBGbHStJSVOSrlGfGb981A?both) si vous voulez construire votre premier chatbot !


### Interaction <span>(1)</span> <aside>clics sur un bouton de réponse</aside>

Si l'utilisateur clique sur un bouton de réponse, ChatMD cherche la réponse qui correspond à ce bouton et l'affiche.

Pour créer des boutons qui déclenchent des réponses quand on clique dessus, il faut utiliser cette syntaxe :

```markdown
## Choix pilule

Prenez-vous la pilule rouge ou la pilule bleue ?

1. [La rouge](choix pilule rouge)
2. [La bleue](choix pilule bleue)

## choix pilule rouge
Vous avez choisi la pilule rouge.

## choix pilule bleue
Vous avez choisi la pilule bleue.
```

On utilise donc une liste ordonnée avec pour chaque ligne :
- un nombre
- un point
- une espace
- entre crochets : le texte qui s'affiche
- entre parenthèses : le nom de la réponse vers laquelle ChatMD va aller si on clique sur le bouton

:::warning Attention à la syntaxe !
Il faut respecter strictement la syntaxe.
- Il ne faut pas mettre d'espace avant le nombre au début
- Il ne faut pas oublier l'espace après le point avant les crochets
- Il ne faut pas mettre d'espace entre les crochets et les parenthèses
- Le texte de la cible du lien doit être exactement identique au titre de niveau 2 qui correspond à cette cible (en faisant aussi attention aux majuscules et minuscules) : il vaut mieux faire un copier-coller pour éviter les erreurs
:::

### Interaction <span>(2)</span> <aside>saisie libre de l'utilisateur au clavier</aside>

Si on a laissé le clavier disponible, l'utilisateur peut écrire librement sa question.

ChatMD va alors chercher la réponse la plus pertinente.

Pour permettre à ChatMD de renvoyer la réponse la plus adéquate, on indique sous le titre de chaque réponse des déclencheurs (mots clés ou expressions) qui vont renforcer le choix de cette réponse.

On utilise une liste non ordonnée en Markdown, qui suit immédiatement le titre de la réponse (sans ligne vide entre le titre et la liste)

```markdown
## Hors sujet
- éviter le hors sujet
- faire du hors sujet
- rester dans le sujet
- ne pas s'éloigner du sujet
- ne pas s'éloigner de la question

Pour éviter le hors-sujet dans une dissertation philosophique, il faut bien analyser le sujet lors du travail au brouillon et toujours vérifier le lien avec la question posée quand on rédige.

1. [Comment bien analyser le sujet ?](Analyser le sujet)
2. [Comment on rédige ?](Rédiger)
```

Si on laisse la possibilité de poser des questions libres, c'est tout de même recommandé de faire des propositions avec des boutons à cliquer pour guider plus facilement l'utilisateur.

##### Fonctionnement de l'algorithme de recherche

Si on utilise des déclencheurs, ChatMD calcule la réponse la plus adéquate.

Ce n'est pas une simple recherche d'occurrences : le calcul intègre une décomposition en tokens et un calcul de distance lexicale.

La décomposition en tokens permet de retrouver des racines communes et la distance lexicale permet de trouver une réponse malgré des fautes d'orthographe.

### Retour au message initial

Pour pouvoir revenir au message initial, on utilise un lien sans cible.

Si on veut éviter la répétition de certains passages dans le message initial quand il réapparaît, on les met dans une section avec la classe “unique”.

```markdown
# Faire un gâteau

<section class="unique">
Ce chatbot vous permet de choisir une recette. Laissez-vous guider par ce chatbot !
</section>

Quel gâteau voulez-vous faire ?

<section class="unique">
:::info
Ce chatbot a été créé par M. Cuisine
:::
</section>

1. [Un gâteau à la banane](Banane)
2. [Un gâteau à la poire](Poire)

## Banane

La recette : …

1. [Retour au menu initial]()

## Poire

La recette : …

2. [Faire un autre gâteau !]()
```

Voici le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/Up0rojkgRaGtxolcQsbMdw).


## Configuration avancée

### L'en-tête YAML

L'en-tête <abbr title="Yet Another Markup Language">YAML</abbr> est une section spéciale située tout en haut du fichier Markdown.

Elle permet de définir des propriétés qui configurent le comportement du chatbot.

Cet en-tête doit impérativement commencer et se terminer par par une ligne contenant exactement trois tirets `---`, sans espaces avant ni après.

Voici un exemple d'en-tête YAML :

```yaml
---
gestionGrosMots: true
---
```

### Algorithme

Pour améliorer l'algorithme de choix d'une réponse, vous pouvez utiliser ces paramètres dans l'en-tête YAML : 

#### Recherche dans le contenu des réponses


```yaml
rechercheContenu: true
```
L'algorithme ne se contente pas de comparer le message de l'utilisateur avec le titre de la réponse et les déclencheurs, mais il compare aussi ce message avec le contenu entier de la réponse.


#### Gestion des gros mots

```yaml
gestionGrosMots: true
``` 
Permet de détecter les gros mots et les insultes envoyés par l'utilisateur et de formuler une réponse adéquate.

#### Messages qui s'affichent si aucune réponse n'est trouvée

```yaml
messageParDéfaut: ["message 1", "message 2", "message 3"]
```

Permet de modifier le message par défaut qui s'affiche aléatoirement quand le chatbot n'a pas trouvé de réponse pertinente.

Cette liste écrase la [liste définie par défaut](https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr/-/blob/main/app/js/config.mjs#L10).

#### Déclencheurs négatifs

On peut aussi utiliser des déclencheurs négatifs afin d'indiquer des mots-clés ou des expressions qui ne doivent pas se trouver dans la question de l'utilisateur.

On commence dans ce cas le mot-clé avec `! `

```markdown
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

```html
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
```txt
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

```markdown
[texte affiché](#titre de la réponse)
```

Mais si vous voulez un affichage avec des boutons comme pour les réponses en fin de message, il faut alors écrire les options avec du code HTML (voir cet [exemple](https://codimd.apps.education.fr/NJs77ZWnQgalVyA6nfuDLQ?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/NJs77ZWnQgalVyA6nfuDLQ))

### Contenus spéciaux

#### Admonitions (encadrés)

Dans le contenu Markdown, vous pouvez utiliser des admonitions, c'est-à-dire des encadrés pour mettre en valeur certains contenus :

```markdown
:::info
Bloc de texte
en markdown
sur plusieurs lignes
:::
```

On peut mettre un titre

```markdown
:::warning Attention !
Bloc de texte
en markdown
sur plusieurs lignes
:::
```

Ou avoir un élément qui se déplie

```markdown
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

```txt
!Audio : URLduFichierAudio
```

Voir cet [exemple](https://codimd.apps.education.fr/24OabQgvQ_yPd2WE3DrIEg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/24OabQgvQ_yPd2WE3DrIEg)

#### Formules mathématiques (LaTeX)


Pour utiliser LaTeX pour les mathématiques, il faut ajouter dans le YAML :

```yaml
maths: true
```

Vous pouvez alors utilisez la syntaxe `$Latex$` (à l'intérieur un paragraphe) ou `$$Latex$$` (pour un paragraphe à part)

#### Schémas et graphiques

Pour générer des schémas et graphiques via Kroki, ajoutez dans le YAML :

```yaml
plugins: kroki
```

Utilisez ensuite la syntaxe appropriée pour Tikz, GraphViz, Mermaid, PlantUML, Excalidraw, Vega ou Vegalite.

Voir cet [exemple](https://codimd.apps.education.fr/dJpCzTg0SPyPmbj24SSKbg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/dJpCzTg0SPyPmbj24SSKbg)

### Chatbots très longs

#### Variables fixes

Pour les chatbots complexes, vous pouvez définir des variables fixes dans le YAML :

```yaml
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
   ```yaml
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

Un chatbot sert souvent à répondre à des questions, mais ChatMD peut aussi être utilisé pour poser des questions.

#### QCM

On peut poser une question et préparer ensuite des réponses possibles : l'utilisateur doit cliquer sur la bonne réponse.

```markdown
## Question cheval blanc

Quelle est la couleur du cheval blanc d'Henri IV ?

1. [rouge](question cheval blanc - erreur)
2. [bleu](question cheval blanc - erreur)
3. [blanc](question cheval blanc - bonne réponse)

## question cheval blanc - erreur
Ce n'était pas la bonne couleur ! Essaie encore !

## question cheval blanc - bonne réponse
Bravo ! C'était la bonne réponse
```

Si on utilise cette solution, on peut voir par défaut vers quoi renvoie un bouton de réponse en survolant ce bouton avec la souris, ce qui peut donner un indice sur la bonne réponse.

Si on veut éviter cela, on ajoute dans le YAML :

```yaml
obfuscate: true
```

Cela permet d'obscurcir le titre des liens afin qu'ils ne donnent pas un indice sur la bonne réponse.

Voir cet [exemple](https://codimd.apps.education.fr/hWgravuHTTmfRydTUfjgWQ?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr#https://codimd.apps.education.fr/hWgravuHTTmfRydTUfjgWQ).

On peut choisir d'utiliser aussi de l'aléatoire pour que la bonne réponse ne soit pas toujours à la même place dans l'ordre des propositions possibles (voir l'onglet sur l'aléatoire).

#### Question à réponse courte

On peut aussi poser une question et attendre une réponse que l'utilisateur doit taper au clavier.

Dans ce cas, on utilise une directive `!Next: BonneRéponse` qui va évaluer la réponse de la personne en comparant la réponse aux déclencheurs utilisés dans `BonneRéponse`.

Exemple :

```markdown
## Question 1
Quelle est la couleur du cheval blanc d'Henri IV

!Next: Réponse couleur cheval Henri IV

## Réponse couleur cheval Henri IV
- blanc

Oui, le blanc est bien la couleur du cheval blanc d'Henri IV !
```

Après 3 erreurs, un bouton vers la bonne réponse s'affiche.
Si on veut reposer la question tant que l'utilisateur n'a pas trouvé la bonne réponse, on ajoute le paramètre `!loop` après le titre de la bonne réponse.

Voir cet [exemple](https://codimd.apps.education.fr/sp8dwq5rQGq3pIj2DPBD0A?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/sp8dwq5rQGq3pIj2DPBD0A).



### Aléatoire


#### Choix aléatoire d'un message

Pour introduire de la variété dans les messages envoyés par le chatbot, vous pouvez proposer plusieurs formulations d'un même message, séparées par `---`.

```markdown
## Proposition d'aide

Bonjour ! Comment puis-je vous aider aujourd'hui ?  
1. [J'ai un problème avec le vidéoprojecteur](Aide vidéoproj)
2. [J'ai un problème avec l'ordinateur](Aide ordi)

---  

Quel est votre problème ? 
1. [J'ai un problème avec le vidéoprojecteur](Aide vidéoproj)
2. [J'ai un problème avec l'ordinateur](Aide ordi)
```

Pour éviter d'avoir à remettre à chaque fois les mêmes boutons de réponse, on peut définir de l'aléatoire dans des variables (voir l'onglet sur les variables)

#### Ordre aléatoire des boutons de réponse

Si vous voulez que certains boutons de réponse apparaissent dans un ordre différent à chaque affichage, utilisez `1)` au lieu de `1.` pour numéroter les éléments. 

```markdown
1. [Cette proposition s'affichera toujours en première position](prop1)
2) [cette proposition s'affichera en 2e ou en 3e position](prop2)
3) [cette proposition s'affichera en 2e ou en 3e position](prop3)
```

#### Tirer au hasard une ou plusieurs questions à poser à l'utilisateur, 

Il est possible d'afficher aléatoirement un nombre défini de boutons cliquables en fin de message à partir d'une liste plus longue.

C'est surtout utile si les boutons cliquables représentent une liste de questions possibles : cela permet de tirer au hasard une ou plusieurs questions à poser à l'utilisateur, parmi une liste de questions différentes.

Pour cela, on utilise la directive `!Select: x` juste avant la liste, où `x` est le nombre de boutons que l'on souhaite afficher à chaque fois.

```markdown
## Prochain exercice

Choisis un sujet de dissertation pour t'entraîner

!Select: 2
1. [Le bonheur est-il une quête de soi ?](Sujet bonheur)
2. [La liberté consiste-t-elle à faire tout ce qui me plaît ?](Sujet liberté)
3. [Être juste, est-ce traiter tout le monde de la même manière ?](Sujet justice)
4. [Peut-on juger une œuvre d'art d'un point de vue moral ?](Sujet art)
```

<!-- TODO: ajouter exemple de chatbot ?
Sélection aléatoire de propositions : ajoutez `!Select: x` avant la liste (voir cet [exemple](https://codimd.apps.education.fr/f6QP57QNT2S-crAjOwdahg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/f6QP57QNT2S-crAjOwdahg)). -->

#### Redirection aléatoire vers un autre message

On peut créer un message qui redirige automatiquement l'utilisateur vers un autre message choisi au hasard dans une liste, ce qui permet de varier les parcours possibles de l'utilisateur.

```markdown
## Choix de l'exercice

Sur quel thème veux-tu un exercice ?

1. [La poésie lyrique](Exercices - poésie lyrique)
2. [Le fantastique](Exercices - nouvelles fantastique)

## Exercices - poésie lyrique

!SelectNext: exo PL 1 / exo PL 2 / exo PL 1

## Exercices - nouvelles fantastique

!SelectNext: exo Fantastique 1 / exo Fantastique 2 / exo Fantastique 3
```

<!-- TODO: ajouter exemple de chatbot
Redirection aléatoire : utilisez `!SelectNext: titre1 / titre2 / titre3` (voir cet [exemple](https://codimd.apps.education.fr/Yvq5u2btTOmrTFCFoXGTwg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/Yvq5u2btTOmrTFCFoXGTwg)) -->

#### Aléatoire dans les variables

On peut utiliser de l'aléatoire également dans les variables fixes (voir l'onglet : “Chatbots très longs”) ou dans les variables dynamiques (voir le prochain onglet).

### Variables dynamiques

#### Prérequis

Pour utiliser des variables dynamiques, il faut d'abord ajouter dans le YAML :

```yaml
contenuDynamique: true
```

#### Définir la valeur d'une variable

On peut définir la valeur d'une variable de deux manières.

##### Dans un bloc code

```markdown
`@nomDeMaVariable = valeur de ma variable`
```

##### Dans un bouton cliquable

```markdown
Que préférez-vous manger ?
1. [Des légumes @choixAliments=légumes](Analyse régime)
2. [Des hamburgers @choixAliments=hamburgers](Analyse régime)
```

##### Utilisation de l'aléatoire

On peut utiliser de l'aléatoire en donnant une liste de choix possibles pour définir la valeur d'une variable.

ChatMD choisira au hasard une de ces possibilités.

```markdown
`@messageAccueil = Bonjour ! /// Salut ! /// Bienvenue !`
```

#### Variables dynamiques complexes

Vous pouvez aussi définir la valeur d'une variable dynamique à partir de la valeur d'autres variables dynamiques.

Pour cela, il faut utiliser `calc()` et mettre dans la parenthèse une opération de calcul.

```markdown
`@mavariable = calc(@score+1)`
```

Voir cet [exemple](https://codimd.apps.education.fr/6ZFeM407RbyCPxpAxKU8ow?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/6ZFeM407RbyCPxpAxKU8ow)


:::info Par défaut, seules certaines opérations sont autorisées

- Calcul mathématique : `+`, `-`, `*`, `/`, `Math.abs`, `Math.min`, `Math.max`, `Math.round`
- Comparaison :  `<=`, `>=`, `<`, `>`, `==`, `!=`,
- Opérateurs logiques :  `&&`, `||`, `!`,
- Parenthèses :  `(`, `)`,
- Chaîne de caractères : `.length()`, `.includes()`, `.startsWith()`, `.endsWith()`, `.toLowerCase()`, `.trim()`, `encodeURI()`
:::

Si vous modifiez le code de ChatMD, vous pouvez dans le fichier `app/js/config.mjs` utiliser un mode sécurisé qui n'affichera que les fichiers sources que vous avez autorisés et qui permettra alors d'utiliser toutes les opérations que vous souhaitez (attention : cela peut conduire à des failles de sécurité)


#### Bloc conditionnel

Un bloc conditionnel vous permet d'afficher un contenu seulement si une condition est remplie.

:::info Structure
1. On commence un bloc conditionnel par `` `if CONDITION` ``
2. On écrit ensuite le contenu qui doit être affiché si la condition est vérifée
3. On termine le bloc conditionnel par `` `endif` ``
:::

Exemple :

```markdown
`if @score>=10`
Bravo, vous avez atteint le niveau expert !
`endif`
```
On peut mettre plusieurs blocs conditionnels, mais on ne peut pas les imbriquer.

On peut écrire des conditions complexes en utilisant des opérateurs.

La liste des opérateurs autorisés est la même que celle pour les variables dynamiques complexes ci-dessus.


#### Variables prédéfinies

##### Pour récupérer ce qu'a tapé un utilisateur

On peut poser une question à l'utilisateur, récupérer le contenu de sa réponse, et aller directement à un autre message (dans lequel on pourra alors utiliser cette variable).

On utilise la syntaxe suivante : `` `@mavariable = @INPUT : message suivant` `` 

Par exemple :

```markdown
Bonjour ! Quel est ton nom ?
`@nom = @INPUT : question matière préférée`

## question matière préférée
Bonjour `@nom`
Quelle est ta matière préférée ?
```

Ici, on récupère la réponse de l'utilisateur dans la variable `@nom` et on va ensuite au message `question matière préférée`.

<!-- TODO: ajouter exemple de chatbot
Récupération du message utilisateur : `` `@mavariable = @INPUT : Titre réponse` `` (voir cet [exemple](https://codimd.apps.education.fr/_2I1TWwBT22IML7BsR7sWw?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/_2I1TWwBT22IML7BsR7sWw)) -->


##### Pour récupérer les paramètres dans l'URL

La valeur des paramètres dans l'URL est disponible avec `@GETnomduparamètre`

Si on utilise un lien qui contient le paramètre `?departement=69`, on pourra utiliser la variable `@GETdepartement` dans son chatbot.


##### Pour utiliser la géolocalisation

On peut récupérer la latitude, la longitude et le degré de précision de la position, afin de pouvoir afficher des messages différents selon le lieu de l'utilisateur.

Pour cela, il faut écrire dans le yaml :

```yaml
geolocation: true
contenuDynamique: true
```

On pourra ensuite utiliser les variables suivantes : `@LATITUDE` `@LONGITUDE` `@POSITION_ACCURACY`.


```markdown
`if @LATITUDE>41.0 && @LATITUDE<51.5 && @LONGITUDE>-5.0 && @LONGITUDE<9.5`
Vous êtes probablement en France métropolitaine !
`endif`

`if Math.abs(@LATITUDE - 45.7640)<0.5 && Math.abs(@LONGITUDE - 4.8357)<0.5`
Vous habitez probablement près de : Lyon !
`endif`

`if @LATITUDE==undefined`
La géolocalisation n'a malheureusement pas fonctionné.
Essayez de recliquer sur le bouton qui vous a mené ici, ou de reposer votre question.
Si cela ne marche pas, essayez de réactualiser la page.
`endif`
```




### Plusieurs bots

Pour gérer plusieurs personnages de chatbot dans un même projet, il faut d'abord déclarer les bots dans le YAML :
```yaml
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

On uilise ensuite la directive `!Bot: botName` pour changer de bot dans les réponses.

On peut avoir plusieurs bots qui se répondent dans un même message.

```markdown
!Bot: Schopenhauer  
Le désir nous conduit inévitablement à la souffrance.

!Bot: Épicure  
Il faut différencier les désirs ! Seuls les désirs vains nous éloignent du bonheur.
```

Exemple : [source](https://codimd.apps.education.fr/pKXavCOeTfityYVTTS6aMA?both) et [chatbot](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/pKXavCOeTfityYVTTS6aMA)


## Utilisation de l'IA

### Principe général

ChatMD peut se connecter à un LLM en ligne ou en local.

L'intérêt est que l'on peut alors utiliser l'IA de manière sobre et ciblée, au sein d'un parcours scénarisé dont on garde le contrôle.

De plus, l'utilisateur n'aura pas besoin de créer un compte pour accéder à votre chatbot : il faudra simplement lui communiquer un mot de passe.

#### Appel à une IA : dans un bouton de réponse

On peut faire un appel à un LLM dans un bouton de réponse. Quand l'utilisateur cliquera sur ce bouton, cela déclenchera un appel à l'IA qui répondra à la question qu'on a intégré dans le bouton.

Dans ce cas, au lieu de mettre dans la cible du lien le titre d'une réponse qu'on a prévue, on utilise la directive `!useLLM` suivie de la question que l'on pose au LLM.

```markdown
1. [Peux-tu m'expliquer autrement ?](!useLLM explique l'intérêt des licences libres de manière simple et claire)
```

<!-- TODO: ajouter explication sur la création automatique d'un bouton !useLLM si on ne trouve pas de réponse -->

#### Appel à une IA : par l'utilisateur

L'utilisateur lui-même peut faire appel à une IA en commençant sa question par `!useLLM`

#### Appel à une IA : dans le corps d'une réponse

```markdown
## Ma réponse qui intègre de l'IA
On peut utiliser un LLM dans une réponse, en utilisant la syntaxe suivante : 

`!useLLM`
Ceci est mon prompt.

Le prompt peut être sur plusieurs lignes..
`END !useLLM`

On peut ajouter du texte en Markdown avant ou après, et même utiliser plusieurs fois un LLM dans sa réponse.
```

### Configuration initiale

#### LLM en ligne

Pour pouvoir accéder aux fonctionnalités IA, il faut avoir une clé API chez un fournisseur de LLM.

On va ensuite chiffrer sa clé API afin d'éviter qu'elle soit diffusée publiquement dans le fichier source de son chatbot.

<iframe src="https://chatmd.forge.apps.education.fr/docs/encrypt_api_key.html" style="border:0; width:100%; height:325px"></iframe>

On pourra alors configurer l'accès au LLM dans le YAML, en ajoutant :

```yaml
useLLM:
   url: URL_API
   model: nom_du_modèle_de_langage
   encryptedAPIkey: clé_chiffrée
```

<!-- TODO: ajouter page qui montre différents services pour accéder à une clé API -->

#### LLM en local

Plusieurs logiciels permettent de faire tourner un LLM en local.

Dans ce cas, on a simplement besoin d'indiquer dans le YAML l'URL du serveur local et le nom du modèle.

```yaml
useLLM:
   url: URL_API
   model: nom_du_modèle_de_langage
```

<!-- TODO: Ajouter exemples de logiciels pour faire tourner un LLM en local -->

#### Options possibles

```yaml
useLLM:
   maxTokens: nombre_maximum_de_tokens
   systemPrompt: "Prompt système général",
	preprompt: "Pré prompt, avant la demande",
	postprompt: "Post prompt, après la demande",
	maxProcessingTime: temps_d_attente_maximum,
```

Si on utilise `maxProcessingTime`, le temps d'attente maximum de la réponse du LLM doit être exprimé en millisecondes.


<!-- TODO: ajouter autres options de configuration :
On peut configurer le chatbot pour qu'il utilise toujours le LLM. Il faut alors mettre le paramètre `always: true` dans l'en-tête YAML -->

### RAG

:::info Qu'est-ce que le RAG ?
Le RAG (_Retrieval-Augmented Generation_) consiste à demander à une IA générative de répondre, non pas seulement à partir des informations issues de son entraînement, mais à partir d'une base de connaissances qu'on lui a fournie.

On pourrait par exemple fournir une liste de définitions, de méthodes, de textes propres à sa discipline et son approche pédagogique.

Le but est d'améliorer la pertinence du contenu généré et de forcer l'IA à répondre d'après le cadre qu'on lui donne.
:::

#### Configuration initiale du RAG

Pour ajouter une base de connaissances qui sera utilisée par le LLM pour produire sa réponse, on ajoute dans le YAML :

```yaml
useLLM:
   url: URL_API
   model: nom_du_modèle_de_langage
   encryptedAPIkey: clé_chiffrée
   RAGinformations: "URL_base_de_connaissance"
```

On peut mettre plusieurs URLs à récupérer pour constituer sa base de connaissance.

```yaml
useLLM:
   url: URL_API
   model: nom_du_modèle_de_langage
   encryptedAPIkey: clé_chiffrée
   RAGinformations: ["URL1", "URL2", "URL3"]
```

La base de connaissance doit être constituée de fichiers texte.

<!-- TODO: ajouter autres options de configuration du RAG
"useFile" pour utiliser le fichier RAG.js local
On peut aussi mettre directement du texte
 -->


#### Fonctionnement du RAG

ChatMD utilise un système de RAG simplifié qui fonctionne ainsi :

1. **Préparation de la base de connaissances :** ChatMD découpe en segments plus courts (_chunks_) la base de connaissances.
2. **Recherche des passages pertinents lors d'une requête :** quand une question est posée, ChatMD fait un calcul de similarité entre la question et ces différents segments, afin d'identifier les passages les plus pertinents.
3. **Construction du prompt enrichi :** ChatMD ajoute les passages les plus pertinents au prompt et demande au LLM de répondre en prenant en compte ces passages.

:::info collapsible Aspects techniques
Contrairement aux systèmes RAG classiques, ChatMD ne repose pas sur une vectorisation sémantique des documents à l'aide d'_embeddings_ stockés dans une base vectorielle.

À la place, ChatMD effectue une vectorisation lexicale légère : les documents sont représentés sous forme de tokens, et la similarité entre une question et les documents est calculée à l'aide de méthodes classiques (similarité cosinus, calcul de distance lexicale, prise en compte de la taille et de la position des tokens …).

Ce choix vise à :
1. favoriser un usage sobre de l'intelligence artificielle, en évitant les appels à des services d'API pour la vectorisation ;
2. simplifier le déploiement en supprimant la dépendance à une base de données externe ou à un moteur de recherche sémantique.

Par ailleurs le parti-pris est que dans les cadres d'usages de ChatMD, notamment institutionnels ou pédagogiques, les documents utilisés pour la base de connaissance intègrent suffisamment de mots-clés pour pouvoir se passer de la vectorisation sémantique.
:::

#### Options de configuration

Chaque phase du RAG dans ChatMD peut être configurée à l'aide de différents paramètres :

1. **Préparation de la base de connaissances :** il est possible de définir la méthode de découpage des documents en segments (_chunks_). Par défaut, la séparation se fait ligne par ligne, mais d'autres options sont disponibles : découpage par paragraphe, par un séparateur personnalisé (comme `---`), ou tous les _n_ caractères.
2. **Recherche des passages pertinents lors d'une requête :** on peut choisir le nombre de segments à inclure dans la requête. Par défaut, ChatMD sélectionne les 3 passages les plus pertinents.
3. **Construction du prompt enrichi :** on peut changer le message qui précise la manière d'utiliser les informations fournies.

```yaml
useLLM:
   url: URL_API
   model: nom_du_modèle_de_langage
   encryptedAPIkey: clé_chiffrée
   RAGinformations: "URL_base_de_connaissance"
   RAGseparator: "\n",
   RAGmaxTopElements: 3,
   RAGprompt: |
      Voici ci-dessous le contexte à partir duquel tu dois prioritairement partir pour construire ta réponse, tu dois sélectionner dans ce contexte l'information qui est en lien avec la question et ne pas parler du reste. Si l'information n'est pas dans le contexte, indique-le et essaie de répondre malgré tout."
```

Voici un exemple de message pour le paramètre `RAGprompt` afin que l'IA réponde uniquement sur la base des documents disponibles, sans extrapolation.

```yaml
useLLM:
   RAGprompt: |
      Voici ci-dessous le contexte à partir duquel tu dois construire ta réponse, tu dois sélectionner dans ce contexte l'information pertinente et ne pas parler du reste. Si la réponse à la question n'est pas dans le contexte, tu ne dois pas répondre et dire : je ne sais pas.
      CONTEXTE : 

```


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

Lorsqu'on clique sur le bouton, le chatbot s'ouvre dans une fenêtre superposée juste au dessus du bouton.

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

<!-- TODO: ajouter autres possibilités d'intégration dans un site web
Ajouter : déploiement sur une forge + déploiement sur un serveur local + intégration dans une application web avec source en base64
-->


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