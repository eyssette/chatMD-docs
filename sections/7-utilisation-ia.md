
## Utilisation de l'IA

### Principe général

ChatMD peut se connecter à un LLM en ligne ou en local.

L'intérêt est que l'on peut alors utiliser l'IA de manière sobre et ciblée, au sein d'un parcours scénarisé dont on garde le contrôle.

De plus, l'utilisateur n'aura pas besoin de créer un compte pour accéder à votre chatbot : il faudra simplement lui communiquer un mot de passe.

<!-- TODO: ajouter exemples de chatbots avec IA 
Notamment : utilisation de questions en variables avec de l'aléatoire ? -->


#### Appel à une IA : par l'utilisateur dans son message

L'utilisateur lui-même peut faire appel à une IA en commençant sa question par `!useLLM`.

Cette fonctionnalité est surtout utile pour faire des tests quand on crée son chatbot, ou si on veut donner la possibilité à l'utilisateur de faire des appels, quand il le souhaite, à l'IA, notamment pour lui permettre d'interroger une base de connaissances qu'on a configuré avec du RAG (voir plus loin les explications sur le RAG).

Il vaut mieux sinon désactiver cette fonctionnalité dans la configuration initiale (voir plus bas les explications à propos de `userCanCallLLM` dans les paramètres LLM du YAML).


#### Appel à une IA : dans un message du chatbot

On peut insérer, dans un message du chatbot, du contenu généré dynamiquement par l'IA.

Pour cela, on écrit un bloc avec un prompt qui sera remplacé, au moment de l'affichage, par la réponse du LLM.


:::info Structure d'un bloc prompt
Le bloc prompt doit être écrit de la manière suivante :
1. On commence le bloc par `` `!useLLM` ``
2. On écrit son prompt
3. On termine son bloc par `` `END !useLLM` ``
:::

```markdown
`!useLLM`
Prompt
`END !useLLM`
```


Exemple :

```markdown
## Dictée niveau quatrième
Voici une dictée générée automatiquement  :

`!useLLM`
Rédige une dictée d'environ 80 à 100 mots, destinée à des élèves de quatrième.  
Le texte doit être rédigé au passé simple et à l'imparfait, contenir au moins trois adjectifs accordés en genre et en nombre, ainsi qu'une proposition subordonnée relative.  
Le vocabulaire doit rester accessible pour ce niveau, et le ton peut être narratif ou descriptif.
`END !useLLM`

📝 Conseil : lis d'abord la dictée une première fois en entier, puis fais-la à l'écrit sans te précipiter. Pense à bien accorder les adjectifs et les verbes, surtout à l'imparfait !
```


##### Combiner variables dynamiques et appel à une IA

On peut générer un prompt qui utilise le contenu de certaines variables dynamiques, ce qui permet d'adapter le prompt à la situation spécifique de l'utilisateur.

:::warning Attention
Si vous voulez utiliser les variables dynamiques, il faut avoir activé cette fonctionnalité dans le YAML
:::

```yaml
variablesDynamiques: true
```

Imaginons par exemple qu'on a demandé auparavant à l'utilisateur sa discipline, le niveau de ses élèves et le sujet précis actuellement étudié, on pourrait alors faire un prompt de création d'un exercice qui utilise les variables qui ont récupéré les informations en question.

```markdown
## Création d'un quiz
Voici un exercice généré automatiquement par l'IA :

`!useLLM`
Tu es un enseignant en : `@discipline`
Tes élèves sont en : `@niveauEleves`

Crée un quiz sur ce sujet : `@sujetActuel`

Ton quiz doit comporter trois questions de type QCM avec à chaque fois des distracteurs pertinents.
`END !useLLM`
```

##### Évaluer la réponse de l'utilisateur par l'IA

Un des usages les plus intéressants d'un LLM dans ChatMD est de poser une question à l'utilisateur et de demander à un LLM d'évaluer sa réponse d'après des critères qu'on définit dans le prompt.

:::warning Attention
Cet usage suppose d'avoir au préalable activé les variables dynamiques dans le YAML.
:::

```yaml
variablesDynamiques: true
```

On utilise la directive `!Next` pour poser une question à l'utilisateur, puis aller directement à un autre message dans lequel on va utiliser sa réponse.


```markdown
## Question sur les trois types de roche
Quels sont les trois grands types de roche ?

`!Next: Réponse - question sur les trois types de roche`

## Réponse - question sur les trois types de roche

:::warning Attention
La réponse ci-dessous est générée par l'IA : gardez toujours l'esprit critique !
:::

`!useLLM`
J'ai pose à un élève la question suivante : quels sont les trois grands types de roche ?

Voici la réponse de l'élève : `@INPUT`

Dans la réponse de l'élève, il doit y avoir ces trois catégories : roches sédimentaires, roches magmatiques et roches métamorphiques.

Évalue la réponse de l'élève en lui donnant des conseils pour s'améliorer.
`END !useLLM`

**Fin de la réponse générée par l'IA**

1. [Question numéro 2](Composition du granite)

```

:::info Réponse sur plusieurs lignes possible
Dans le cas où on demande une réponse qu'on fait évaluer par un LLM, l'utilisateur peut faire un message plus long et l'écrire sur plusieurs lignes en utilisant `Shift+Enter` pour aller à la ligne.
:::

##### Permettre un échange prolongé avec l'IA, en utilisant l'historique de la conversation

Par défaut, l'appel à une IA est un appel unique :
- on ne peut pas continuer la conversation avec l'IA,
- l'IA n'a pas accès à l'historique de la conversation.

Si on veut autoriser l'utilisateur à poursuivre une discussion en utilisant l'historique de la conversation, on procède ainsi :

Dans le bloc `!useLLM`, on ajoute au début dans son prompt `!useHistory`.


###### Utiliser l'historique pour un seul message

Activer l'historique de la conversation peut être utile par exemple dans cette situation :
- l'IA crée un exercice,
- l'utilisateur répond à l'exercice,
- l'IA évalue la réponse.

```markdown
## Exo addition

`!useLLM`
Propose un exercice d'addition
`END !useLLM`

!Next: Evaluation addition

## Evaluation addition

`!useLLM`
!useHistory

Voici ma réponse : `@INPUT`.
Cette réponse est-elle correcte ?

`END !useLLM`
```

Tant que l'on utilise le paramètre `!useHistory` l'IA conserve l'historique de la conversation. Mais dès qu'on ne l'utilise plus, l'IA remet à zéro l'historique.

###### Autoriser une conversation continue avec l'IA

Avec la méthode précédente, on pourrait déjà faire une conversation continue en renvoyant à chaque fois à un nouveau message avec un prompt qui utilise l'historique.

Mais c'est parfois plus simple de faire une boucle qui permet à l'utilisateur de prolonger la discussion.

:::warning Attention !
Dans ce cas, il faut penser à deux points importants :
1. Il est préférable d'encadrer la discussion en rappelant des consignes pour que la conversation ne dérive pas vers du hors sujet ou pire …
1. Quand on fait une boucle, la conversation continuera toujours avec le LLM. Donc si on veut emmener l'utilisateur ailleurs dans son chatbot, il faut donner un moyen de sortir de la boucle (voir plus bas).
:::

```markdown

## Exercice explication

`!useLLM`
J'ai demandé à un élève d'expliquer POINT_À_EXPLIQUER

Voici sa réponse : `@INPUT`

CONSIGNES_EVALUATION

Ne donne pas la bonne réponse.
Donne des conseils pour améliorer sa définition.
`END !useLLM`

!Next: Amélioration Exercice explication

## Amélioration Exercice explication

`!useLLM`
!useHistory
`@INPUT`

Attention, la discussion doit rester centrée sur POINT_À_EXPLIQUER.

`END !useLLM`

!Next: Amélioration Exercice explication

```

###### Gérer la sortie de la conversation avec l'IA

Si on utilise une boucle, la conversation va continuer avec l'IA. Pour sortir de cette conversation avec l'IA et aller ailleurs dans le chatbot, il y a plusieurs possibilités :

**1/ Gérer la sortie de la conversation IA avec un bouton à cliquer pour aller ailleurs**


```markdown
## Suite discussion avec Epicure

`!useLLM`
!useHistory
`@INPUT`

Attention, la discussion doit rester centrée sur Epicure et sa philosophie.

`END !useLLM`

!Next: Suite discussion avec Epicure

1. [Je veux maintenant parler avec Platon](Discussion avec Platon)

```

Par défaut le bouton à cliquer s'affichera à chaque fois en fin de message, mais on peut aussi le mettre dans un bloc conditionnel pour l'afficher seulement dans certains cas (voir ci-dessous)

**2/ Utiliser une autre directive !Next pour indiquer qu'on ira ailleurs**

```markdown
## Suite discussion avec Epicure

`!useLLM`
!useHistory
`@INPUT`

Attention, la discussion doit rester centrée sur Epicure et sa philosophie.

`END !useLLM`

`if CONDITION_POUR_POURSUIVRE_CETTE_DISCUSSION_IA`
!Next: Suite discussion avec Epicure
`endif`

`if CONDITION_POUR_SORTIR_DE_CETTE_DISCUSSION_IA`
!Next: Suite du chatbot
`endif`

```

**Utiliser un bloc conditionnel pour le bouton de sortie ou la directive !Next**

Le bouton de sortie donne une possibilité de redirection tandis que la directive `!Next` force la redirection.

Si on utilise un bouton de sortie, on peut le mettre dans un bloc conditionnel.
Si on utilise une directive `!Next`, il faut utiliser un bloc conditionnel (pour faire le choix entre la boucle vers le même message qui continue la conversation ou la redirection vers un autre message qui nous en fait sortir).

On peut utiliser plusieurs types de conditions :
1. À partir d'un certain nombre de messages (ou pour les boutons de sortie seulement : de manière répétée tous les X messages)
2. Présence d'un mot clé dans l'input de l'utilisateur (il faut évidemment ne pas oublier de communiquer ce mot clé pour sortir de la conversation)
3. On peut demander au LLM d'évaluer le message de l'utilisateur pour voir s'il veut sortir de la conversation et lui dire de mettre un mot clé, qu'on va ensuite détecter


:::precisions collapsible Exemple 1 : sortie après un certain nombre de messages

```markdown
## Suite discussion avec Epicure
`@NUMBER_OF_MESSAGES=calc(@NUMBER_OF_MESSAGES>0?@NUMBER_OF_MESSAGES+1:1)`
`!useLLM`
!useHistory
`@INPUT`

Attention, la discussion doit rester centrée sur Epicure et sa philosophie.

`END !useLLM`

!Next: Suite discussion avec Epicure

<!-- Affichage à partir de 3 messages -->
`if @NUMBER_OF_MESSAGES >= 3`
1. [Je veux maintenant parler avec Platon](Discussion avec Platon)
`endif`

<!-- Affichage tous les 3 messages  -->
`if @NUMBER_OF_MESSAGES % 3 == 0`
1. [Je veux maintenant parler avec Platon](Discussion avec Platon)
`endif`

```
:::

:::precisions collapsible Exemple 2 : sortie si mot clé détecté dans l'input

```markdown
## Suite discussion avec Epicure 

`if @INPUT.includes("stop")`
D'accord, passons à un autre sujet !
1. [Discuter avec Platon](Discussions avec Platon)
`endif`

`if !@INPUT.includes("stop")`

`!useLLM`
!useHistory
`@INPUT`
Attention, la discussion doit rester centrée sur Epicure et sa philosophie.
`END !useLLM`

!Next: Suite discussion avec Epicure
`endif`
```
:::

:::precisions collapsible Exemple 3 : sortie suite à l'analyse de la conversation par l'IA

```markdown
## Suite discussion avec Epicure 

`!useLLM`
!useHistory
`@INPUT`
La discussion doit rester centrée sur Epicure.
Si l'utilisateur veut sortir de la discussion, réponds-lui gentiment que ce n'est pas un problème.
`END !useLLM`


<div class="analyse-discussion-epicure hidden">

`!useLLM`
!useHistory
!noStream

Analyse cette conversation jusqu'à maintenant.
L'utilisateur a-t-il exprimé dans son dernier message qu'il veut sortir de cette discussion avec Epicure et passer à autre chose dans le chatbot ?
Si oui, écris simplement "<code>SORTIE DISCUSSION</code>" en majuscule et rien d'autre. Sinon écris OK.
`END !useLLM`

</div>

`if @SELECTOR[".analyse-discussion-epicure"].includes("SORTIE DISCUSSION")`
1. [Discussion avec Platon](Discussion avec Platon)
`endif`

`if !@SELECTOR[".analyse-discussion-epicure"].includes("SORTIE DISCUSSION")`
!Next: Suite discussion avec Epicure
`endif`

```
:::



###### Gérer la taille de l'historique

Par défaut l'historique de la conversation est limité à 2000 tokens (estimés d'après le nombre de mots), mais on peut changer ce paramètre dans le YAML en ajoutant le paramètre `maxTokensInHistory` dans la configuration du LLM. Il faut que cette valeur soit cohérente avec les limites du modèles de langage que vous utilisez.

```yaml
---
useLLM:
   maxTokensInHistory: nombre_maximum_de_tokens_dans_l_historique
---
```


##### Afficher la réponse de l'IA d'un coup plutôt qu'en streaming

Par défaut, ChatMD affiche la réponse du LLM petit à petit, en "streaming". Si on préfère afficher la réponse d'un coup, on peut ajouter dans le YAML le paramètre `stream: false` dans la configuration du LLM. Mais on peut aussi le faire pour un seul message en ajoutant `!noStream` au début du prompt.

```markdown
`!useLLM`
!noStream
Prompt
`END !useLLM`
```

##### Utiliser une réponse IA cachée pour analyser un message de l'utilisateur et extraire des informations

On peut créer un bloc `!useLLM` pour analyser ce que dit l'utilisateur, sans afficher la réponse de l'IA à l'utilisateur. Cette analyse sera simplement utilisée en interne pour extraire des informations, qui permettront de faire des redirections dans le chatbot ou de définir des variables dynamiques.

Pour cela, on met le bloc `!useLLM` dans une div avec la classe `hidden` et une autre classe spécifique pour pouvoir sélectionner cette réponse ensuite.

###### Exemple 1 : détection par une IA de la satisfaction de l'utilisateur

```markdown
<div class="analyse-prompt hidden"> 

`!useLLM`
Prompt
`END !useLLM`
</div>
```

On peut ensuite utiliser la réponse de l'IA dans un bloc conditionnel en utilisant le sélecteur `@SELECTOR[".analyse-prompt"]`.

Exemple :

```markdown
## Question satisfaction

Êtes-vous satisfait ?

!Next: Analyse satisfaction

## Analyse satisfaction

<div class="analyse-satisfaction hidden">

`!useLLM`
!noStream

Analyse cette réponse : `@INPUT`
Si l'utilisateur semble satisfait de l'aide apportée, réponds simplement "<code>satisfait</code>".
Si l'utilisateur semble insatisfait, réponds simplement "<code>insatisfait</code>".

`END !useLLM`

</div>

`if @SELECTOR[".analyse-satisfaction"].includes("insatisfait")`
L'utilisateur est insatisfait.
`endif`
`if !@SELECTOR[".analyse-satisfaction"].includes("insatisfait")`
L'utilisateur est satisfait.
`endif`

```

###### Exemple 2 : extraction du nom d'une ville dans la réponse de l'utilisateur

```markdown
## Question ville
Dans quelle ville vis-tu ?

!Next: Extraction ville

## Extraction ville

<div class="extraction-ville hidden"> 

`!useLLM`
!noStream
Analyse cette réponse : `@INPUT`
Extrait le nom de la ville mentionné par l'utilisateur
Réponds simplement par le nom de la ville, sans autre texte, dans ce format :
<code>Nom de la ville</code>
N'ajoute rien avant ou après.
`END !useLLM`
</div>

`@ville = calc(@SELECTOR[".extraction-ville"])`

La ville extraite est : `@ville`

```



#### Appel à une IA : après un clic sur un bouton de réponse

On peut aussi faire un appel à un LLM dans un bouton de réponse. Quand l'utilisateur cliquera sur ce bouton, cela déclenchera un appel à l'IA qui répondra à la question qu'on a intégré dans le bouton.

Dans ce cas, au lieu de mettre dans la cible du lien le titre d'une réponse qu'on a prévue, on utilise la directive `!useLLM` suivie de la question que l'on pose au LLM.

```markdown
1. [Peux-tu m'expliquer autrement ?](!useLLM explique l'intérêt des licences libres de manière simple et claire)
```

Par défaut, si on a configuré l'utilisation d'un LLM, ChatMD ajoute automatiquement un bouton qui propose de poser sa question au LLM quand le chatbot n'a pas trouvé de réponse pertinente dans les réponses prédéfinies.

On peut désactiver ce bouton avec le paramètre `userCanCallLLM: false` dans les paramètres LLM du YAML (voir plus bas). Ce paramètre désactive aussi l'utilisation directe de `!useLLM` dans les messages de l'utilisateur.



### Configuration initiale

#### LLM en ligne

Pour pouvoir accéder aux fonctionnalités IA, il faut avoir une clé API chez un fournisseur de LLM.

:::info Comment créer une clé API ?
Si vous visez un public réduit ou un usage peu intensif et expérimental, certains fournisseurs proposent des plans gratuits qui peuvent être suffisants.

Voir par exemple cette liste : https://github.com/cheahjs/free-llm-api-resources
:::

On va ensuite chiffrer sa clé API afin d'éviter qu'elle soit diffusée publiquement dans le fichier source de son chatbot.

<iframe src="https://chatmd.forge.apps.education.fr/docs/encrypt_api_key.html" style="border:0; width:100%; height:325px"></iframe>

On pourra alors configurer l'accès au LLM dans le YAML, en ajoutant :

```yaml
useLLM:
   url: URL_API
   model: nom_du_modèle_de_langage
   encryptedAPIkey: clé_chiffrée
```

:::warning Attention !
Le fait de chiffrer la clé API empêche seulement que la clé soit récupérée par quelqu'un qui n'a pas le mot de passe.

Mais une personne qui a le mot de passe et un peu de connaissances techniques pourrait récupérer la clé API. Ce n'est donc pas une solution parfaite et il faut donc vérifier les usages de sa clé, et la réinitialiser en cas de problème.
:::

#### Utiliser un serveur intermédiaire pour sécuriser la clé API

Une autre approche, plus sécurisée, consiste à ne pas exposer directement la clé API du LLM dans votre application, même sous forme chiffrée.

Vous pouvez pour cela utiliser un serveur intermédiaire (par exemple via un outil d'automatisation comme n8n) qui se chargera de faire l'appel au modèle de langage et de renvoyer la réponse.

Les avantages :
1. la clé API reste totalement cachée ;
2. vous pouvez appliquer des filtres, des quotas ou des règles d'accès ;
3. cela facilite la supervision et le changement de fournisseur si nécessaire.

L'inconvénient est qu'il faut mettre en place ce serveur, ce qui suppose des connaissances techniques et l'accès à un serveur.

:::warning
Attention, selon la solution choisie, le serveur permettra ou non de renvoyer une réponse "streamée". Il faudra donc adapter la valeur du paramètre `stream` (voir les options plus en détails, ci-dessous).
:::


#### LLM en local

Plusieurs logiciels permettent de faire tourner un LLM en local et d'avoir une clé API qui va permettre à ChatMD d'envoyer un prompt au LLM et d'obtenir une réponse.

:::info Quel logiciel utiliser ?
Voici quelques solutions possibles :
- [Jan.ai](https://jan.ai/docs/api-server)
- [Ollama](https://github.com/ollama/ollama)
- [LLM Studio](https://lmstudio.ai/docs/app/api)
:::

Dans ce cas, on a simplement besoin d'indiquer dans le YAML l'URL du serveur local et le nom du modèle.

```yaml
useLLM:
   url: URL_API
   model: nom_du_modèle_de_langage
```

#### Options possibles

```yaml
useLLM:
   userCanCallLLM: false
   maxTokens: nombre_maximum_de_tokens
   maxTokensInHistory: nombre_maximum_de_tokens_dans_l_historique
   systemPrompt: "Prompt système général"
   preprompt: "Pré prompt, avant la demande"
   postprompt: "Post prompt, après la demande"
   maxProcessingTime: temps_d_attente_maximum
   always: false
   stream: true
   simulateStream: true
```

Si on utilise `userCanCallLLM: false`, alors l'utilisateur ne peut pas mettre `!useLLM` dans son message pour interroger comme il le souhaite l'IA, et il n'y aura pas de bouton automatiquement ajouté pour répondre avec l'IA en cas de réponse non trouvée. Il vaut mieux utiliser ce paramètre pour éviter des usages non contrôlés de l'IA par les utilisateurs.

Si on utilise `maxProcessingTime`, le temps d'attente maximum de la réponse du LLM doit être exprimé en millisecondes.

On peut configurer le chatbot pour qu'il utilise toujours le LLM. Il faut alors mettre le paramètre `always: true` dans l'en-tête YAML. Dans ce cas, les réponses prévues dans le chatbot servent simplement de support pour la génération d'une réponse par le LLM.

On peut demander à obtenir la réponse du LLM d'un coup, sans "streaming" de la réponse, avec le paramètre `stream: false`.

Si on utilise un outil, comme n8n, pour cacher sa clé API, alors le streaming de la réponse n'est pas possible, il faut donc mettre le paramètre `stream: false`, mais on peut utiliser le paramètre `simulateStream: true` pour afficher la réponse petit à petit, comme si elle était "streamée".


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

La base de connaissance doit être constituée de fichiers texte. On ne peut pas utiliser des fichiers PDF.

On peut éventuellement mettre directement du texte, si la base de connaissances est très succincte.

```yaml
useLLM:
   url: URL_API
   model: nom_du_modèle_de_langage
   encryptedAPIkey: clé_chiffrée
   RAGinformations: |
      hédonisme : défense de la valeur du plaisir ; thèse selon laquelle le plaisir est un bien qu'il faut rechercher
      aponie : absence de souffrance dans le corps
      ataraxie: absence de trouble dans l'âme
```

Si on a récupéré les sources de ChatMD, on peut utiliser le fichier `app/js/ai/rag/sources.mjs` pour définir un fichier RAG local et l'intégrer automatiquement à son chatbot au moment de la compilation de ChatMD. Dans ce cas, il faut mettre `RAGinformations: useFile` comme paramètre.


#### Utilisation du RAG dans un bloc prompt au sein d'un message

Si on utilise un bloc prompt dans un message avec la directive `!useLLM`, alors on peut ajouter une base de connaissances à son prompt.

Cette base de connaissance pourra être spécifique à chaque prompt (alors que la base de connaissances définie dans le RAG est générale).

Pour cela, on utilise la syntaxe suivante : `!RAG: {question posée au LLM} {url:urlFichierRAG1 url:urlFichierRAG2}`

ChatMD transformera alors cette ligne par une sélection des informations les plus pertinentes dans la base de connaissances (en fonction de la question posée), et un message indiquant de répondre à partir de ces informations.

Voici un exemple :

```markdown
## question sur les programmes
Quelle est votre question sur les programmes ?

`@questionProgramme = @INPUT : traitement question programmes`

## traitement question programmes

`!useLLM`
Tu es un expert en didactique des mathématiques.

Un professeur a posé la question suivante : `@questionProgramme`

!RAG: {`@questionProgramme`} {url:"URL_fichier_texte_du_programme"}
`END !useLLM`

```

On peut aussi configurer le RAG avec certaines options :
- `maxResults:` pour définir le nombre de résultats maximum à intégrer dans le RAG
- `separator:` : pour définir le séparateur des différents segments de la base de connaissance
- `prompt:` : pour définir le message qui précise comment on doit utiliser les informations issues de la base de connaissance (vous pouvez consulter ci-dessous, dans les options de configuration, le prompt par défaut).

Par exemple :
`!RAG: {Question posée au LLM} {url:"URL" maxResults:5 separator:"---"}`


#### Fonctionnement du RAG

ChatMD utilise un système de RAG simplifié qui fonctionne ainsi :

1. **Préparation de la base de connaissances :** ChatMD découpe en segments (_chunks_) la base de connaissances.
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
   RAGseparator: "\n"
   RAGmaxTopElements: 3
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


#### Préchargement de la base de connaissances

Par défaut, les données utilisées pour le RAG sont chargées uniquement lorsque le LLM est sollicité.

Si la base de connaissances est volumineuse, cela peut être intéressant de précharger les données au moment du démarrage du chatbot, afin d'améliorer les performances.

Pour cela, ajoutez dans le YAML le paramètre `preload` avec la liste des URLs à précharger.

```yaml
---
preload:
   - URL_DES_DONNÉES_1
   - URL_DES_DONNÉES_2
---
```

#### Intégration de données externes de manière dynamique dans la base de connaissances

On peut utiliser le plugin `readcsv` pour lire des données externes (au format csv, tsv ou json) et intégrer ces données dans le prompt.

Il suffit pour cela d'utiliser le plugin `readcsv` (voir la partie “Contenus dynamiques”) et d'insérer le bloc `readcsv` dans le prompt du bloc `!useLLM`.

Exemple :

````markdown
`!useLLM`

Voici le nombre de médailles d'or gagnées en France en natation aux JO en 2024.
Fais une phrase pour féliciter cette personne, en précisant les épreuves gagnées

```readcsv https://codimd.apps.education.fr/OKNRFBnnS1ucVdjSLq6OIA/download
condition: $6=="Swimming" && $2==1 && $11=="France"
sort: $2 date desc
$4 : $2 pour l'épreuve $8
```

`END !useLLM`
````

