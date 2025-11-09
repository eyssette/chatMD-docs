
## Contenus dynamiques


### Introduire de l'aléatoire


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

### Utiliser des variables dynamiques

Les variables dynamiques sont des variables dont la valeur peut changer au cours de la conversation avec le chatbot.

Par exemple, une variable dynamique peut enregistrer le prénom de l'utilisateur, calculer un score selon ses réponses, ou mémoriser les choix qu'il a effectués précédemment.

Grâce à ces variables, le chatbot peut adapter son comportement de manière plus fine et proposer des contenus plus pertinents selon le contexte, en tenant compte de l'historique de la conversation.

#### Prérequis

Pour utiliser des variables dynamiques, il faut d'abord ajouter dans le YAML :

```yaml
variablesDynamiques: true
```

#### Définir la valeur d'une variable

On peut définir la valeur d'une variable de deux manières.

##### À l'intérieur d'un message prévu du chatbot

On utilise un bloc code, avec la syntaxe suivante : `@nomVariable = valeur de la variable`

```markdown
## Question 1 Réponse 3
`@pointQ1 = 3`
Oui, c'était bien la bonne réponse !
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

#### Laisser l'utilisateur définir la valeur d'une variable avec un formulaire

##### Élément `<select>` pour proposer un choix dans une liste déroulante

On peut proposer à l'utilisateur un choix dans une liste déroulante afin de définir la valeur d'une variable dynamique.

Pour cela, on utilise dans un message un élément HTML `<select>`.

Lorsque l'utilisateur fait un choix, la valeur sélectionnée est enregistrée automatiquement dans la variable associée.

Cette variable peut ensuite être utilisée pour afficher du contenu différent selon le choix effectué.

Exemple : 

```html
<label for="niveau">Vous enseignez dans</label> <select name="niveau" id="niveau" data-selected="`@niveau`">
   <option value="">À sélectionner</option>
   <option value="1D">une école</option>
   <option value="2D collège">un collège</option>
   <option value="2D lycée">un lycée</option>
</select>
```

##### Élément `<input>` pour laisser l'utilisateur écrire une réponse dans un petit champ texte

On peut proposer à l'utilisateur de saisir librement du texte afin de définir la valeur d'une variable dynamique.

Pour cela, on utilise dans un message un élément HTML `<input>` avec l'attribut type="text".

Lorsque l'utilisateur saisit du texte et appuie sur la touche "Enter", il est automatiquement enregistré dans la variable associée.

Cette variable peut ensuite être utilisée pour personnaliser les messages ou adapter la logique du chatbot en fonction de la réponse de l'utilisateur.

```html
Quel est votre nom ?
<input type="text" id="nom" name="nom" value="`@nom`" placeholder="Entrez votre nom ici"  />
```

On peut utiliser les blocs conditionnels pour créer des questions avant de faire apparaître un commentaire ou bien la suite du chatbot.

Exemple ([voir le chatbot correspondant](http://chatmd.forge.apps.education.fr/#https://codimd.apps.education.fr/iRuaXoI0Q0-qQuk2lxIBqQ))

```markdown
Quel est le code secret ?

`if !@codeSecret || @codeSecret != 42`

<input type="text" id="codeSecret" name="codeSecret" value="`@codeSecret`" />

`endif`

`if @codeSecret == 42`

``@codeSecret``
Bravo tu as bien trouvé le code secret !

1. [voir la suite](suite)

`endif`

## suite

Suite du chatbot
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
- Comparaison : `<=`, `>=`, `<`, `>`, `==`, `!=`,
- Opérateurs logiques : `&&`, `||`, `!`,
- Parenthèses : `(`, `)`,
- Chaîne de caractères : `.length()`, `.includes()`, `.startsWith()`, `.endsWith()`, `.toLowerCase()`, `toUpperCase()`, `.trim()`, `encodeURI()`
:::

Si vous modifiez le code de ChatMD, vous pouvez dans le fichier `app/js/config.mjs` utiliser un mode sécurisé qui n'affichera que les fichiers sources que vous avez autorisés et qui permettra alors d'utiliser toutes les opérations que vous souhaitez (attention : cela peut conduire à des failles de sécurité)


#### Traitement séquentiel des variables dynamiques

La valeur d'une variable dynamique peut changer au cours d'un message lui-même, et pas seulement d'un message à un autre. Plus précisément, le chatbot évalue et met à jour les variables dans l'ordre dans lequel les opérations sont définies à l'intérieur d'un message.

Exemple : 

```markdown
Le score était de `@score`.

Vous avez gagné 2 points !

`@score=calc(@score+2)`

Le nouveau score est de : `@score`
```

Lorsqu'une variable est définie dans un bloc conditionnel (voir ci-dessous), sa valeur n'est mise à jour que si la condition associée est remplie. Si la condition n'est pas vérifiée, la variable conserve sa valeur précédente (ou reste vide si elle n'a jamais été initialisée).

#### Bloc conditionnel

Un bloc conditionnel vous permet d'afficher un contenu seulement si une condition est remplie.

:::info Structure
1. On commence un bloc conditionnel par `` `if CONDITION` ``
2. On écrit ensuite le contenu qui doit être affiché si la condition est vérifiée
3. On termine le bloc conditionnel par `` `endif` ``
:::

Exemple :

```markdown
`if @score>=10`
Bravo, vous avez atteint le niveau expert !
`endif`
```
On peut mettre plusieurs blocs conditionnels, et ils peuvent être imbriqués si on le souhaite.

On peut écrire des conditions complexes en utilisant des opérateurs.

La liste des opérateurs autorisés est la même que celle pour les variables dynamiques complexes ci-dessus.


#### Variables prédéfinies

##### Pour récupérer ce qu'a tapé un utilisateur

La variable dynamique `@INPUT` contient toujours la dernière réponse de l'utilisateur.

On peut donc l'utiliser soit pour l'afficher directement dans un message, soit pour l'assigner à une autre variable avec `@mavariable = calc(@INPUT)`.

Pour poser une question à l'utilisateur, récupérer le contenu de sa réponse, puis aller directement à un autre message dans lequel on va utiliser sa réponse, on procède ainsi, avec la directive `!Next`

```markdown
Bonjour ! Quel est ton nom ?

!Next: accueil

## accueil
`@nom = calc(@INPUT)`
Bonjour `@nom`
Bienvenue ici !
```

:::precision collapsible Cas où le message contient des déclencheurs
Si le message cible contient des déclencheurs, ces déclencheurs fonctionneront comme des conditions pour accéder au message : il faudra que la réponse de l'utilisateur soit similaire à l'un de ces déclencheurs. Pour les désactiver et ne pas faire cette vérification, on peut écrire `!Next: message suviant / ignoreKeywords`.
:::

:::precision collapsible Ancienne syntaxe `@mavariable = @INPUT : message suivant`
L'ancienne syntaxe est toujours possible.

On peut utiliser la syntaxe suivante : `` `@mavariable = @INPUT : message suivant` ``, qui signifie qu'on va enregistrer le futur message de l'utilisateur dans `@mavariable` puis aller vers `message suivant`.

Par exemple :

```markdown
Bonjour ! Quel est ton nom ?
`@nom = @INPUT : accueil`

## accueil
Bonjour `@nom`
Bienvenue ici !
```

:::


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
variablesDynamiques: true
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
Vous pouvez cliquer à nouveau sur le bouton qui vous a mené ici, ou reposer votre question.
Si cela ne marche pas, essayez de réactualiser la page.
`endif`
```

### Intégrer des données externes <aside>avec le plugin readCsv</aside>

ChatMD peut lire des données à la volée (au format CSV, TSV ou JSON), ce qui vous permet de les intégrer dans votre chatbot et de les filtrer au cours de la conversation.

Un exemple ici qui reprend les données ouvertes de data.education.gouv.fr pour permettre de retrouver un établissement à partir de son identifiant (UAI), de son nom ou de la ville : https://drane-lyon.forge.apps.education.fr/chatbot/#uai

#### Syntaxe générale

Pour activer ce plugin, il faut d'abord l'ajouter dans l'en-tête YAML :

```yaml
---
plugins: readcsv
---
```

Pour utiliser ce plugin, on utilise un bloc code avec la syntaxe suivante :

````markdown
```readcsv URL_DES_DONNÉES
condition: FORMULE_DE_FILTRE (optionnel)
sort: FORMULE_DE_TRI (optionnel)

TEMPLATE_EN_MARKDOWN
(éventuellement sur plusieurs lignes)

```
````


#### Formule de filtre

La formule de filtre permet de sélectionner uniquement certaines lignes dans les données, selon une condition.

Dans l'expression, utilisez `$1`, `$2`, `$3`... pour désigner les colonnes (la première colonne est `$1` …).

Pour la condition, vous pouvez utiliser les mêmes opérateurs que ceux disponibles pour le calcul des variables dynamiques complexes.

Exemples :
- `condition: $3 > 100` → garde les lignes où la colonne 3 est supérieure à 100
- `condition: $2 == "Lycée"` → garde les lignes où la colonne 2 est "Lycée"
- `condition: $3 > 50 && $4.includes("public")` → combine plusieurs conditions


#### Formule de tri

La formule de tri permet de trier les résultats filtrés pour pouvoir les afficher dans l'ordre que l'on souhaite.

La syntaxe est la suivante : `sort: $<colonne> [ordre] [type]`

- ordre : `asc` (croissant, par défaut) ou `desc` (décroissant)
- type : `alph` (alphabétique, par défaut), `num` (numérique) ou `date`

Exemples :
- `sort: $1` → tri alphabétique sur la colonne 1
- `sort: $3 desc num` → tri numérique décroissant sur la colonne 3
- `sort: $2 date, $3 desc num` → tri croissant sur la colonne 2 par date, puis décroissant sur la colonne 3 en cas d'égalité

#### Template en Markdown

Le template définit comment afficher chaque ligne du CSV.

Utilisez `$1`, `$2`, `$3`… pour insérer les valeurs des colonnes.

Par exemple, imaginons une liste de lycées et collèges, avec le nom dans la colonne 1, l'UAI dans la colonne 2, "public" ou "privé" dans la colonne 3, et "lycée" ou "collège" dans la colonne 4. On pourrait avoir le template suivant :

```markdown
Nom de l'établissement : $1
UAI : $2
Il s'agit d'un $4 $3
```



#### Combinaison avec les variables dynamiques

On peut utiliser des variables dynamiques, soit pour utiliser le plugin readCsv dans des blocs conditionnels, soit pour intégrer ces variables dans l'URL de la source de données. 

Ce dernier cas peut être très utile si on peut accéder à une API qui permet de récupérer des données spécifiques en fonction de paramètres dans l'URL elle-même.

Vous pouvez consulter cet exemple qui reprend les données ouvertes de data.education.gouv.fr pour permettre de retrouver un établissement à partir de son identifiant (UAI), de son nom ou de la ville : https://drane-lyon.forge.apps.education.fr/chatbot/#uai

Voir la source : https://drane-lyon.forge.apps.education.fr/chatbot/uai.md

