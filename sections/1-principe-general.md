
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

#### Utiliser ChatMD ?

Par rapport à d'autres solutions qui proposent de créer, avec de l'IA, un chatbot en quelques clics, ChatMD propose une approche différente.

##### Une prise en main qui demande un peu d'apprentissage

Avec ChatMD, la création d'un chatbot ne se fait pas en important des documents ou via une interface graphique.

Il faut concevoir son chatbot en suivant une syntaxe spécifique. Cette syntaxe reste accessible pour des chatbots simples, mais suppose d'accepter un effort d'apprentissage si vous souhaitez intégrer des fonctionnalités avancées.

Il est cependant possible de se faire aider d'une IA pour construire son chatbot. Comme ChatMD utilise le Markdown et que les IA savent très bien produire du Markdown, cela fonctionne très bien, à condition de bien préciser la syntaxe qu'utilise ChatMD.

:::warning
Si vous vous aidez d'une IA pour faire votre chatbot, il est possible que l'IA introduise des éléments de syntaxe qui n'existent pas et que le contenu ne soit pas exact. Il faut donc bien relire ce que l'IA a produit.
:::

##### Les avantages !
1. Contrôle beaucoup plus important sur votre chatbot : ChatMD permet de concevoir des chatbots scénarisés, dans lesquels vous pouvez garder la main sur le parcours et les réponses que le chatbot propose
2. Compatibilité RGPD : pas de création de compte, pas de données collectées (sauf si vous créez un chatbot avec une IA qui collecte des données).
3. Intégration possible de l'IA, mais de manière plus éthique et responsable
4. Customisation complète possible de votre chatbot
5. Code open-source, très léger et écoresponsable
6. Échanges facilités avec la communauté des utilisateurs et développement à l'écoute de vos demandes d'évolution de l'outil

##### Pas de statistiques d'usage

ChatMD ne dispose pas d'outil intégré de statistiques d'usages, justement pour éviter la collecte de données.

En revanche, on peut partager son historique de conversation avec ChatMD et vous pouvez par conséquent demander à vos utilisateurs de le faire.

Il est également possible d'adapter ChatMD sur votre propre serveur pour lui ajouter un outil de ce type.
