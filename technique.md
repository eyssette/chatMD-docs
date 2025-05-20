---
addOns: copycode
---

# ChatMD : documentation technique

## Options dans le YAML

```yaml
gestionGrosMots: true
rechercheContenu: true
messageParDéfaut: ["message 1", "message 2", "message 3"]
avatar: URL
avatarCercle: true
favicon: URL
footer: false
footer: 'Mon footer'
theme: bubbles
style: |
   a{color:red}
   p{text-align:center}
typewriter: false
clavier: false
maths: true
plugins: kroki lightbox
variables:
   maVariable1: "variable fixe traitée au moment de l'affichage du message" 
   _maVariable2: "variable fixe traitée lors de l'initialisation du chatbot"
   maVariable1: "variable fixe /// qui contient /// de l'aléatoire"
include: ['URL fichier 1', 'URL fichier 2']
titresRéponses: ["### ", "#### "]
obfuscate: true
variablesDynamiques: true
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

```yaml
useLLM:
   url: URL_API
   model: nom_du_modèle_de_langage
   encryptedAPIkey: clé_chiffrée
	maxTokens: nombre_maximum_de_tokens
   systemPrompt: "Prompt système général"
	preprompt: "Pré prompt, avant la demande"
	postprompt: "Post prompt, après la demande"
	maxProcessingTime: temps_d_attente_maximum
   always: false
	RAGinformations: ["URL1", "URL2", "URL3"]
	RAGseparator: "\n"
   RAGmaxTopElements: 3,
   RAGprompt: |
      Voici ci-dessous le contexte à partir duquel tu dois prioritairement partir pour construire ta réponse, tu dois sélectionner dans ce contexte l'information qui est en lien avec la question et ne pas parler du reste. Si l'information n'est pas dans le contexte, indique-le et essaie de répondre malgré tout."
```

## Directives

`!Audio : URLduFichierAudio`

`!Next: BonneRéponse`
`!Next: BonneRéponse !loop`

`!Typewriter: true`
`!Typewriter: false`

`!Keyboard: true`
`!Keyboard: false`

`!Select: x`

`!SelectNext: titre réponse 1 / titre réponse 2 / titre réponse 3`

`!Bot: nomduBot`

```markdown
`!useLLM`
Prompt
`END !useLLM`
```

```markdown
`!useLLM`
Prompt avec du RAG
!RAG: {question} {url:"url1" url:"url2"}
`END !useLLM`
```

## Custom Markdown


`{.classe}`

`[texte affiché](#titre de la réponse)`

```html
<ul class="messageOptions">
    <li><a href="#choix 1">Je veux faire le choix 1</a></li>
    <li><a href="#choix 2">Je veux faire le choix 2</a></li>
</ul>
```

```markdown
:::info collapsible titre
encadré
:::
```

`$latex$` `$$latex$$`

`---`

`1. `
`1) `


```markdown
`@nomDeMaVariable = valeur de ma variable`
`@messageAccueil = Bonjour ! /// Salut ! /// Bienvenue !`
`@mavariable = calc(@score+1)`

`if CONDITION`
`endif`

`@mavariable = @INPUT : message suivant`

`@GETnomduparamètre`

`@LATITUDE` `@LONGITUDE` `@POSITION_ACCURACY`
```
