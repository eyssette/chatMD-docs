# CHATMD RULES

ChatMD uses a **strict Markdown structure**. Follow these rules exactly.

## ⚠️ CRITICAL: EXACT SYNTAX SPECIFICATION

### 1. TITLE (Level 1 heading)
```markdown
# Titre du chatbot
```
- **MUST** use exactly one `#` (single hash, level 1 heading)
- **MUST** be at the very beginning of the file  (or immediately after YAML front matter if present)
- Defines the chatbot title displayed to users

### 2. INITIAL MESSAGE
```markdown
Message initial

1. [Premier choix](choix 1)
2. [Deuxième choix](choix 2)
```
- Comes immediately after the title
- Can include any valid Markdown
- Can end with a numbered list of clickable choices
- **Choices format**: `1. [Display Text](target_block_id)`
- The `target_block_id` must match exactly a `## target_block_id` heading (case-sensitive, space-sensitive)

### 3. RESPONSE BLOCKS (Level 2 headings)
```markdown
## choix 1
Message pour le choix 1
```
- **MUST** use `##` (double hash, level 2 heading)
- The heading text is the block identifier (used as target in links)
- **Spaces ARE allowed** in block identifiers (e.g., `## choix 1` is valid)
- **Case-sensitive matching**: `## Choice1` ≠ `## choice1`
- **Space-sensitive matching**: `## choice1` ≠ `## choice 1`

### 4. TRIGGERS (Optional)
```markdown
## choix 2
- déclencheur 1
- déclencheur 2

Message pour le choix 2
```
- **MUST** be an unordered list (`-`) immediately after the `##` heading
- **MUST** be followed by a blank line before the message content
- Triggers are keywords/phrases that can activate this response
- Users can type these triggers to jump directly to this block

### 5. CLICKABLE BUTTONS (Optional)
```markdown
Message content here

1. [Bouton cliquable 1](cible bouton 1)
2. [Bouton cliquable 2](cible bouton 2)
```
- **MUST** use numbered list format: `1. [Text](target)`
- **MUST** be at the END of the message content
- Each target must correspond to a `##` heading (exact match)
- Allows users to navigate to other blocks

## 🚫 FORBIDDEN SYNTAX - WILL BREAK CHATMD

### ❌ WRONG: Using horizontal rules to separate blocks

### ❌ WRONG: Adding `#` before link targets in clickable buttons
❌ WRONG:
1. [Click here](#target)

✅ CORRECT:
1. [Click here](target)

