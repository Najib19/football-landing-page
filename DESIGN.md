---
name: Golden Boy Soccer School
description: Premium athletic development for the next generation of players.
colors:
  primary: "#15803d"
  neutral-bg: "#faf9f6"
  neutral-ink: "#1c1c1c"
typography:
  display:
    fontFamily: "var(--font-outfit), system-ui, sans-serif"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.05em"
  body:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
rounded:
  lg: "1.5rem"
  xl: "2rem"
  full: "9999px"
spacing:
  lg: "2rem"
  xl: "4rem"
  2xl: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.neutral-ink}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "1rem 2rem"
---

# Design System: Golden Boy Soccer School

## Overview

**Creative North Star: "The Elite Tactical Lab"**

A premium, asymmetric interface that leverages high-end typography, expansive negative space, and fluid micro-interactions to project professional athletic development. It breaks away from predictable, slop-tier symmetrical three-column designs, favoring instead an "art gallery" approach that allows photography and typography to breathe.

**Key Characteristics:**
- **Asymmetric Balance:** Heavy reliance on offset split-screens and bento grids.
- **Maximalist Typography:** Massive, tight-tracked display headlines against relaxed body text.
- **Tactile Materiality:** Zero generic drop shadows; relies on negative space, solid color blocking, and fluid motion.

## Colors

A highly restrained, monochromatic foundation punctuated by a single, high-contrast athletic accent.

### Primary
- **Emerald Turf** (#15803d): Used exclusively for high-priority calls to action, active states, and critical data highlights. 

### Neutral
- **Off-White Canvas** (#faf9f6): The primary background color. Creates an expensive, airy gallery feel.
- **Zinc Ink** (#1c1c1c): The primary text and structural block color. Provides stark, architectural contrast against the canvas.

**The One Voice Rule.** The primary accent is used on ≤10% of any given screen. Its rarity is the point.

## Typography

**Display Font:** Outfit (with sans-serif fallback)
**Body Font:** Geist (with sans-serif fallback)

**Character:** A sharp contrast between the aggressive, tightly-tracked geometric display font (Outfit) and the highly legible, clinical neo-grotesque body font (Geist).

### Hierarchy
- **Display** (500, clamp/responsive sizing up to 10rem, 0.95): Used for massive hero statements and section titles.
- **Body** (400, text-lg, 1.625): Used for paragraph text. Line length is constrained to `max-w-[45ch]` or `max-w-[65ch]` for optimal reading.
- **Label** (500, text-sm, wide tracking, uppercase): Used for structural signposts and metadata (e.g., "Elite Development").

## Layout

Layouts eschew perfect symmetry. We use CSS Grid for bento boxes (1 large + 2 small) and flexbox for 50/50 split screens. Deep vertical rhythm is established with massive paddings (`py-32` / 8rem) between discrete sections. 

## Elevation & Depth

**The Flat-By-Default Rule.** Surfaces are flat at rest. Depth is achieved through fluid `framer-motion` reveals (y-axis translation on mount) rather than static drop shadows. Generic CSS box-shadows are strictly prohibited.

## Shapes

Forms are organic but controlled. Interactive elements like buttons are fully rounded (`rounded-full`), while structural bento grids and image containers use architectural curves (`rounded-[2rem]`).

## Components

### Buttons
- **Shape:** Fully rounded (9999px).
- **Primary:** Zinc Ink background, Off-White Canvas text. Padding is generous.
- **Hover / Focus:** Fluid color transition and horizontal translation of the interior icon (tactile micro-interaction).

### Cards / Containers (Bento)
- **Corner Style:** Large radius (2rem).
- **Background:** Solid color blocking (Zinc Ink or Off-White) without borders, or subtle 1px opacity borders (`border-brand-ink/5`).
- **Shadow Strategy:** Zero shadows.

## Do's and Don'ts

### Do:
- **Do** use asymmetric layouts and split screens to create visual tension.
- **Do** stagger the entrance of list items or grids using Framer Motion.
- **Do** constrain body text width to ensure comfortable reading (e.g., `max-w-[65ch]`).

### Don't:
- **Don't** use standard drop shadows to lift cards from the background.
- **Don't** use the accent color (Emerald Turf) for large structural backgrounds unless explicitly designed as a focal interruption (e.g., the Editorial Quote section).
- **Don't** use generic symmetrical 3-column feature rows.
