
## Configuration avancée


### L'en-tête YAML


L'en-tête <abbr title="Yet Another Markup Language">YAML</abbr> est une section spéciale située tout en haut du fichier Markdown.

Elle permet de définir des propriétés qui configurent le comportement du chatbot.

Cet en-tête doit impérativement commencer et se terminer par une ligne contenant exactement trois tirets `---`, sans espaces avant ni après.

Voici un exemple d'en-tête YAML :

```yaml
---
gestionGrosMots: true
---
```

Le récapitulatif de toutes les options disponibles dans le YAML est disponible dans la [documentation technique](https://chatmd.forge.apps.education.fr/docs/#technique.md)

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


Pour changer l'avatar du chatbot (il faut mettre l'url de son image à la place de `URL`) :

```yaml
avatar: URL
```

Pour que l'avatar soit en forme de cercle :

```yaml
avatarCercle: true
```

Pour changer l'icône du chatbot dans les onglets (il faut mettre l'url de son image à la place de `URL`) :

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


#### Thème

Pour utiliser un thème CSS particulier :

```yaml
theme: sms
```

Les thèmes disponibles pour le moment sont :
1. Le [thème _sms_](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/zQTZQgJVRhy8SP0Gr1AQTQ) pour avoir une conversation qui s'affiche à la manière d'un échange de SMS.
2. Le [thème _DSFR_](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/sOP4v0AuQNaKn4WjPsV1Yw?both), réservé aux sites qui ont le droit d'utiliser le système de design de l'État.
3. Le [thème _light_](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/5n3vewQlTYKh2pS_z8xlhw) pour avoir une interface plus claire et épurée.


#### Styles CSS

Vous pouvez ajouter des styles CSS personnalisés au chatbot entier, dans l'en-tête YAML :

```yaml
style: |
	 a{color:red}
	 p{text-align:center}
```

Mais vous pouvez aussi modifier le style d'un message en particulier, en ajoutant une balise HTML `<style scoped></style>` au début de votre message :

```markdown
## Message

<style scoped>p{color:red}</style>

Ce message s'affichera en rouge

```

:::warning Gestion du thème sombre
ChatMD a un thème sombre qui s'active par défaut pour les utilisateurs qui ont la préférence du mode sombre dans leur navigateur.

Si vous ajoutez des styles personnalisés, il faut donc :
- soit désactiver le thème sombre, en ajoutant `darkmode: false` dans votre en-tête YAML,
- soit définir des styles particuliers propres au thème sombre, en préfixant les règles que vous voulez modifier pour le thème sombre avec la classe CSS `.darkmode ` 
:::


Pour le CSS, le mieux est d'utiliser les outils de développement de votre navigateur, de repérer avec le sélecteur l'élément que vous voulez changer et de repérer la propriété qu'il faut modifier. Vous pouvez tester directement la modification pour voir avant de l'intégrer à votre chatbot.

Pour apprendre le CSS, vous pouvez commencer par les conseils sur le [site de documentation des technologies web de Mozilla](https://developer.mozilla.org/fr/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content).

Vous pouvez aussi demander de l'aide dans le [salon Tchap](https://tchap.gouv.fr/#/room/!BLAbHlkynUkpyIfNvT:agent.education.tchap.gouv.fr?via=agent.education.tchap.gouv.fr&via=agent.diplomatie.tchap.gouv.fr&via=agent.dev-durable.tchap.gouv.fr) ou en faisant un [ticket](https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr/-/issues/new?issuable_template=help)

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

Par défaut l'effet “machine à écrire” est activé, sauf si vous avez désactivé les effets d'animation sur votre système (généralement dans les paramètres d'accessibilité).

Pour désactiver l'effet “machine à écrire” pour tout son chatbot, on met dans le YAML :
```yaml
typewriter: false
```

Pour désactiver l'effet typewriter pour un passage seulement, on met `` \` `` avant et après le passage à afficher d'un coup.

Exemple :
```txt
\`
texte sans
effet typewriter
\`
```

Si on veut désactiver ou activer l'effet typewriter pour tout un message : on écrit `!Typewriter: false` ou `!Typewriter: true` dans le message (de préférence au début du message).


De manière générale, la désactivation de l'effet machine à écrire est surtout utile :
- quand on teste son chatbot pour éviter d'attendre l'affichage des réponses ;
- si on n'aime pas cette animation ou bien qu'on vise un public qui pourrait ne pas apprécier un effet d'animation ;
- si on veut, en cours ou en fin de message, afficher un point supplémentaire annexe d'un seul coup, au lieu d'attendre le temps de l'écriture avec l'effet d'animation ;
- si on a mis dans son message du HTML un peu complexe qui doit être interprété d'un coup.

#### Clavier

Pour désactiver le champ d'entrée clavier (si on souhaite simplement guider l'utilisateur avec les options proposées en fin de chaque réponse), on ajoute dans le YAML :

```yaml
clavier: false
```


Si on veut activer ou désactiver le clavier pour un message seulement, on écrit `!Keyboard: false` ou `!Keyboard: true` dans le message (de préférence au début du message).

C'est surtout utile :
- si on a désactivé le clavier de manière générale, afin de guider l'utilisateur avec des boutons à cliquer pour faire des choix, mais qu'on veut à un moment particulier laisser l'individu pouvoir poser une question, ou bien répondre à une question (parce qu'on a fait un quiz à ce moment-là)
- ou au contraire, si on a laissé le clavier actif de manière générale, mais qu'on veut à un moment donné contraindre l'utilisateur à faire un choix entre plusieurs boutons à cliquer.


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

Pour générer des schémas et graphiques, on va utiliser le plugin _Kroki_, que l'on active en ajoutant `kroki` à la liste des plugins dans le YAML :

```yaml
plugins: plugin1 plugin2 kroki
```

Vous pouvez ensuite utiliser la syntaxe des schémas Tikz, GraphViz, Mermaid, PlantUML, Excalidraw, Vega ou Vegalite dans votre chatbot.

Voir cet [exemple](https://codimd.apps.education.fr/dJpCzTg0SPyPmbj24SSKbg?both) et le [chatbot correspondant](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/dJpCzTg0SPyPmbj24SSKbg)

#### Lightbox pour les images, les PDF et les liens

:::info Qu'est-ce qu'une _lightbox_ ?
Une _lightbox_ permet de voir en grand une image, un PDF ou de visualiser un lien externe, le tout sans quitter votre chatbot, mais en affichant ce contenu dans une fenêtre superposée qui s'ouvre au-dessus du contenu principal.
:::

Pour activer le plugin _lightbox_, on l'ajoute à la liste des plugins dans le YAML :

```yaml
plugins: plugin1 plugin2 lightbox
```

Si on veut désactiver l'effet de lightbox pour une image ou un PDF, on ajoute simplement `?nolightbox` à la fin de l'URL de l'image ou du PDF.

```markdown
Ce fichier s'affichera avec une lightbox :
[](https://exemple.fr/monfichier.pdf)

Ce fichier s'affichera sans lightbox :
[](https://exemple.fr/monfichier.pdf?nolightbox)
```

Si on veut qu'un lien s'ouvre dans une iframe dans une lightbox, il faut que ce lien ait la classe ou soit dans un élément qui a la classe `iframe`

```markdown
Ce lien s'affichera dans une iframe dans une lightbox :
[](https://monlien.fr) {.iframe}
```



### Chatbots très longs

#### Variables fixes

Pour les chatbots complexes, vous pouvez définir des variables fixes dans le YAML :

```yaml
variables:
  maVariable1: "Ceci est ma variable 1"
  maVariable2: "Ceci est ma variable 2"
```

On peut utiliser de l'aléatoire dans une variable fixe, en utilisant une liste de choix possibles.

```yaml
variables:
  maVariable1: ["Première possibilité", "Deuxième possibilité", "Troisième possibilité"]
```

Dans votre contenu Markdown, utilisez-les ainsi : `@{maVariable1}`

- Les variables sans préfixe `_` sont interprétées au déclenchement : si on utilise de l'aléatoire, on pourra avoir une sélection différente à chaque utilisation de la variable
- Les variables avec préfixe `_` sont interprétées à la génération du chatbot, ce qui permet d'utiliser des variables fixes pour les menus de choix d'option en fin de message

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

On utilise ensuite la directive `!Bot: botName` pour changer de bot dans les réponses.

On peut avoir plusieurs bots qui se répondent dans un même message.

```markdown
!Bot: Schopenhauer  
Le désir nous conduit inévitablement à la souffrance.

!Bot: Épicure  
Il faut différencier les désirs ! Seuls les désirs vains nous éloignent du bonheur.
```

Exemple : [source](https://codimd.apps.education.fr/pKXavCOeTfityYVTTS6aMA?both) et [chatbot](https://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/pKXavCOeTfityYVTTS6aMA)

