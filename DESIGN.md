---
name: 安帝源生物科技
description: A clinical product system where material evidence and verifiable proof share the same calm, exacting surface.
colors:
  ink: "#102343"
  ink-soft: "#56657a"
  surface: "#ffffff"
  surface-soft: "#f5f7fa"
  surface-blue: "#edf3fb"
  line: "#dbe3ee"
  accent: "#0c59d8"
  accent-dark: "#0846ad"
  navy: "#092c5c"
  success: "#1d6f4b"
  error: "#a52d3a"
typography:
  display:
    fontFamily: "PingFang SC, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "clamp(48px, 5vw, 76px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "PingFang SC, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "clamp(36px, 4vw, 58px)"
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  title:
    fontFamily: "PingFang SC, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "clamp(34px, 3.5vw, 52px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: "PingFang SC, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: "normal"
  label:
    fontFamily: "PingFang SC, Microsoft YaHei, Noto Sans CJK SC, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "normal"
rounded:
  label: "7px"
  compact: "8px"
  field: "9px"
  control: "10px"
  ledger: "12px"
  surface: "14px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0 14px"
    height: "48px"
  chip-product:
    backgroundColor: "{colors.surface-blue}"
    textColor: "{colors.accent-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.label}"
    padding: "7px 10px"
  card-evidence:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "34px"
---

# Design System: 安帝源生物科技

## Overview

**Creative North Star: "The Clinical Evidence Ledger"**

The system behaves like a well-kept clinical record: cool, bright, specific, and composed around facts that can be checked. Material macro photography supplies physical texture while orderly ledgers, ruled rows, and exact labels supply institutional credibility. The result is scientific without becoming sterile and authoritative without resorting to spectacle.

The interface is deliberately restrained. Deep navy carries the argument, cobalt marks the few moments that require action or orientation, and mineral-gray surfaces preserve quiet separation. Generous whitespace and large Chinese headlines establish confidence; low-radius forms, fine rules, and evidence-dense modules keep that confidence accountable. Generic medical slogans, decorative gradients, and unearned visual claims do not belong in this world.

**Key Characteristics:**

- Evidence-led split compositions that pair a precise claim with material imagery.
- Clinical white and mineral-gray surfaces anchored by deep navy typography.
- One cobalt accent reserved for action, navigation, and proof markers.
- Ledger-like rows, timelines, and fact blocks that make verification easy.
- Restrained corners, fine rules, and diffuse depth rather than ornamental chrome.
- Clean Chinese system typography with compact labels and generous reading leading.

## Colors

The palette is a cool clinical neutral field with a single, high-clarity cobalt signal and deep navy structural anchors.

### Primary

- **Instrument Cobalt** (`accent`): The sole active color for primary actions, icons, progress markers, disclosure cues, and navigation feedback.
- **Deep Cobalt** (`accent-dark`): The controlled hover state and a higher-contrast treatment for compact links, years, and product labels.

### Neutral

- **Clinical Ink** (`ink`): Primary headings, body emphasis, and essential interface text.
- **Measured Slate** (`ink-soft`): Explanatory copy, captions, metadata, and secondary facts.
- **Sterile White** (`surface`): Cards, forms, the header, and the text half of split compositions.
- **Mineral Field** (`surface-soft`): The page canvas that separates white evidence surfaces without visual noise.
- **Cobalt Wash** (`surface-blue`): Quiet product chips and secondary hover fills.
- **Ledger Rule** (`line`): Dividers, field borders, and the ruled structure of evidence modules.
- **Institutional Navy** (`navy`): Dark evidence bands, the contact section, and high-authority statement panels.
- **Clinical Success** (`success`): Confirmed form feedback only.
- **Clinical Error** (`error`): Validation and error feedback only.

### Named Rules

**The One Cobalt Voice Rule.** Cobalt identifies action, orientation, or proof; it never becomes a decorative wash across an entire screen.

**The Clinical Neutral Rule.** Keep the canvas cool and nearly colorless so product material, evidence, and regulatory information remain the visual subject.

## Typography

**Display Font:** PingFang SC (with Microsoft YaHei, Noto Sans CJK SC, and sans-serif fallbacks)  
**Body Font:** PingFang SC (with Microsoft YaHei, Noto Sans CJK SC, and sans-serif fallbacks)

**Character:** A single Chinese system stack keeps the voice direct, highly legible, and free of branding theater. Authority comes from scale, weight, measured compression, and rhythm rather than from a decorative display face.

### Hierarchy

- **Display** (700, fluid 48–76px, 1.08): Hero claims only; keep lines short and balanced, with tight tracking.
- **Headline** (700, fluid 36–58px, 1.16): Major section introductions and the contact close.
- **Title** (700, fluid 34–52px, 1.2): Product names and other primary content titles.
- **Body** (400, 16px, 1.9): Product explanations and sustained reading; introductory paragraphs may rise to 17px and should remain within roughly 65 characters.
- **Label** (700, 13px, 1.45): Product types, field labels, compact metadata, and interface controls.

### Named Rules

**The Compressed Claim Rule.** Headlines are large, bold, tightly tracked, and brief; supporting copy supplies the nuance instead of lengthening the headline.

## Layout

Desktop pages use a centered content frame up to 1280px wide, while the hero expands to 1520px with a 16px outer gutter. The primary composition is an evidence-led split: claim and actions occupy roughly 42% of the hero and material photography occupies 58%, with the proof ledger spanning beneath both. Section spacing is deliberately generous (120px) to distinguish chapters of evidence.

Content grids alternate between asymmetric media/copy pairs and structured proof modules. Evidence lists use rules, aligned labels, fixed metadata columns, and timelines rather than floating card collections. At 1100px, desktop navigation gives way to a compact menu and the proof ledger becomes two columns. At 820px, split layouts stack into one column. At 560px, horizontal gutters tighten, actions become full-width, fields become single-column, and the proof ledger remains a compact two-by-two matrix.

The spacing rhythm draws primarily from 8, 12, 16, 24, 32, and 48px steps. Use the tighter steps inside controls and ledgers; use 32–48px to separate content groups and the full section interval between narrative chapters.

## Elevation & Depth

The system is flat by default and uses tonal layering, fine rules, and clipped photography for most separation. Diffuse cool shadows are reserved for large evidence-bearing surfaces, product images, the hero, and the contact form; they communicate hierarchy rather than interactivity. Hover lift appears only on the primary button, while product imagery uses a restrained scale response.

### Shadow Vocabulary

- **Hero Ambient** (`0 18px 52px rgba(28, 61, 103, 0.10)`): Separates the opening split from the mineral page field.
- **Evidence Ambient** (`0 22px 54px rgba(28, 61, 103, 0.14)`): Used on important white panels and product imagery.
- **Action Hover** (`0 12px 28px rgba(12, 89, 216, 0.18)`): Appears only beneath the hovered primary action.
- **Navy Overlay** (`0 26px 60px rgba(3, 19, 41, 0.28)`): Grounds a white form placed on an institutional navy section.

### Named Rules

**The Flat Until Meaningful Rule.** A surface earns shadow only when it carries a major product, evidence, or conversion role; ordinary rows rely on rules and tonal contrast.

## Shapes

Forms are gently squared, with radii increasing according to scale rather than decoration. Small labels use 7px corners, fields use 9px, controls use 10px, ledger frames use 12px, and major surfaces use 14px. One-pixel cool-gray borders create most internal structure. Photography is clipped to the same 14px major-surface silhouette, while timeline nodes alone use circles.

**The Measured Corners Rule.** Use the smallest established radius that fits the component; never turn clinical modules into pills or inflate cards into soft bubbles.

## Components

### Buttons

Buttons feel direct and dependable, with solid geometry and minimal motion.

- **Shape:** Gently squared control corners (10px) with a 48px standard height; compact header actions may use 42px.
- **Primary:** Instrument cobalt fill, white label, 1px cobalt border, and 22px horizontal padding.
- **Hover / Focus:** Hover shifts to deep cobalt and gains the Action Hover shadow; active compresses subtly. Keyboard focus uses a 3px translucent cobalt outline with 3px offset.
- **Secondary:** Transparent surface, institutional navy label, and a muted border; hover introduces only the cobalt wash and stronger cobalt border.

### Chips

- **Style:** Compact product labels use a cobalt wash, deep cobalt text, bold 13px type, and restrained 7px corners.
- **State:** Chips are informational identifiers, not filters; do not add selected states unless the interaction model changes.

### Cards / Containers

- **Corner Style:** Major cards use gently squared 14px corners; the hero ledger uses 12px.
- **Background:** Sterile white over the mineral field, or institutional navy for authority statements.
- **Shadow Strategy:** Only major evidence-bearing cards use Evidence Ambient depth; ledger rows and news items stay flat.
- **Border:** One-pixel Ledger Rule dividers define internal structure.
- **Internal Padding:** Typically 32–34px for major cards and 20–24px for compact evidence modules.

### Inputs / Fields

- **Style:** White fill, 1px blue-gray stroke, 9px corners, 48px height, and 14px horizontal padding.
- **Focus:** Border shifts to cobalt with a 3px translucent cobalt outline and 2px offset.
- **Error / Disabled:** Errors use dark red text on a pale red field; loading disables the primary action without introducing motion beyond its label.

### Navigation

Navigation is a quiet white sticky rail with a fine bottom rule. Desktop links are 14px and reveal a 2px cobalt underline from the left on hover. At 1100px and below, navigation collapses into a 44px outlined menu control and a ruled vertical menu; the control preserves a visible expanded state and Escape-key return focus.

### Evidence Ledger

The signature ledger arranges registration class, certificate number, patents, and procurement status as equally weighted proof cells. Icons are cobalt, facts are deep navy, metadata is measured slate, and dividers—not shadows—carry the grid. It stays visible in the first desktop viewport and compresses to a two-by-two matrix on small screens.

### Disclosures

Product details and FAQs use full-width ruled rows with bold summary text and a cobalt caret. Opening a disclosure rotates the caret 180 degrees while the body enters below in smaller, generously led secondary text.

## Do's and Don'ts

### Do:

- **Do** pair major product claims with close, high-key material photography.
- **Do** expose registration, clinical, patent, and procurement facts in ruled, scannable structures.
- **Do** reserve cobalt for actions, navigation feedback, icons, and proof markers.
- **Do** preserve visible keyboard focus and the reduced-motion behavior already built into the system.
- **Do** keep Chinese body copy comfortably led and major headings short enough to balance cleanly.

### Don't:

- **Don't** replace evidence-led composition with a generic medical slogan over a stock-photo hero.
- **Don't** introduce multiple accent hues, decorative gradients, glass effects, or saturated background fields.
- **Don't** turn evidence rows into a collection of floating cards when a ledger or rule is clearer.
- **Don't** use pill-shaped controls, exaggerated radii, heavy black shadows, or playful bounce motion.
- **Don't** present provisional imagery or unsupported claims as verified clinical truth.
