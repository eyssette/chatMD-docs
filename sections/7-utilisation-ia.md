
## Utilisation de l'IA

### Principe général

ChatMD peut se connecter à un LLM en ligne ou en local.

L'intérêt est que l'on peut alors utiliser l'IA de manière sobre et ciblée, au sein d'un parcours scénarisé dont on garde le contrôle.

De plus, l'utilisateur n'aura pas besoin de créer un compte pour accéder à votre chatbot : il faudra simplement lui communiquer un mot de passe.

<!-- TODO: ajouter exemples de chatbots avec IA 
Notamment : utilisation de questions en variables avec de l'aléatoire ? -->

#### Appel à une IA : après un clic sur un bouton de réponse

On peut faire un appel à un LLM dans un bouton de réponse. Quand l'utilisateur cliquera sur ce bouton, cela déclenchera un appel à l'IA qui répondra à la question qu'on a intégré dans le bouton.

Dans ce cas, au lieu de mettre dans la cible du lien le titre d'une réponse qu'on a prévue, on utilise la directive `!useLLM` suivie de la question que l'on pose au LLM.

```markdown
1. [Peux-tu m'expliquer autrement ?](!useLLM explique l'intérêt des licences libres de manière simple et claire)
```

Par défaut, si on a configuré l'utilisation d'un LLM, ChatMD ajoute automatiquement un bouton qui propose de poser sa question au LLM quand le chatbot n'a pas trouvé de réponse pertinente dans les réponses prédéfinies.

#### Appel à une IA : par l'utilisateur dans son message

L'utilisateur lui-même peut faire appel à une IA en commençant sa question par `!useLLM`.

Cette fonctionnalité est surtout utile si on a activé le RAG et défini une base de connaissances que l'utilisateur peut alors interroger de cette manière.

#### Appel à une IA : dans un message du chatbot

Il est également possible d'insérer, dans un message du chatbot, du contenu généré dynamiquement par l'IA.

Pour cela, on écrit un bloc avec un prompt qui sera remplacé, au moment de l'affichage, par la réponse du LLM.


:::info Structure d'un bloc prompt
Le bloc prompt doit être écrit de la manière suivante :
1. On commence le bloc par `` `!useLLM` ``
2. On écrit son prompt
3. On termine son bloc par `` `END !useLLM` ``
:::

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

```
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
   maxTokens: nombre_maximum_de_tokens
   systemPrompt: "Prompt système général"
   preprompt: "Pré prompt, avant la demande"
   postprompt: "Post prompt, après la demande"
   maxProcessingTime: temps_d_attente_maximum
   always: false
   stream: true
   simulateStream: true
```

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
