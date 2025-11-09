---
include: ["https://chatmd.forge.apps.education.fr/docs/sections/1-principe-general.md","https://chatmd.forge.apps.education.fr/docs/sections/2-exemples.md","https://chatmd.forge.apps.education.fr/docs/sections/3-le-markdown.md","https://chatmd.forge.apps.education.fr/docs/sections/4-syntaxe-de-base.md","https://chatmd.forge.apps.education.fr/docs/sections/5-configuration-avancee.md","https://chatmd.forge.apps.education.fr/docs/sections/6-contenus-dynamiques.md","https://chatmd.forge.apps.education.fr/docs/sections/7-utilisation-ia.md","https://chatmd.forge.apps.education.fr/docs/sections/8-integration-dans-un-site-web.md","https://chatmd.forge.apps.education.fr/docs/sections/9-apropos.md"]
addOns: copycode, lightbox, highlight, titleLinks
theme: colors
style: |
   .displayHomepage .admonition {
      font-size: 0.95em;
   }
   .displayHomepage .admonition ul {
      padding-left: 1.75em;
   }
   .displayHomepage li {
      margin-top: 0.25em;
   }
   h1 aside {
      font-weight: normal;
   }
   h3 span {
      font-weight: normal;
      font-size: 0.8em;
      vertical-align: text-top;
   }
   h3 aside {
      font-weight: normal;
      font-size: 0.9em !important;
   }
   h5 {
      font-size: 0.85em;
      background: #eee;
      padding: 1em;
      margin-top: 3em;
      color: black;
      border-left: 3px solid #666;
      padding-left: 2em;
   }
   li {
      margin-top: 0.5em;
   }
   pre {
      padding-top: 3em;
      min-width: 60%;
   }
   .admonition {
      margin: 1.25em auto;
   }
   .admonitionTitle {
      margin-top: 0.5em;
   }
   .hljs {
      background: white;
      text-wrap: auto;
   }
   .hljs-code {
      background: #eefff9d9;
   }
   .language-html .hljs-tag {
      background: none;
   }
---

# ChatMD <aside>Manuel d'utilisation</aside>

![](https://chatmd.forge.apps.education.fr/logo.svg =150x) {.center}

[ChatMD](https://chatmd.forge.apps.education.fr/) est un outil libre et gratuit qui permet de créer facilement un chatbot personnalisé à partir d'un simple fichier en Markdown.

:::info Les Fonctionnalités clés

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
