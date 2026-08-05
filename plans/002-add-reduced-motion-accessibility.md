# 002 — Add reduced motion accessibility to reveals

- **Status**: TODO
- **Commit**: N/A
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 1 file (`src/components/Reveal.tsx`)

## Problem

The entrance animations force `transform` (spatial movement) on all users, ignoring the OS-level `prefers-reduced-motion` setting. Reduced motion should drop movement but keep opacity transitions.

```tsx
/* src/components/Reveal.tsx:8 — current */
  const isInView = useInView(ref, { once: true, margin: "-10%" });
```

## Target

Introduce `useReducedMotion` and conditionally remove the `transform` from the animation variants.

```tsx
/* target Reveal.tsx */
import { motion, useInView, useReducedMotion } from "framer-motion";
// ...
  const shouldReduceMotion = useReducedMotion();
  const yOffset = shouldReduceMotion ? "0px" : "24px";
// ...
      initial={{ opacity: 0, transform: `translateY(${yOffset})` }}
      animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: `translateY(${yOffset})` }}
```
*(Apply similar logic for `StaggerItem` via props or hook).*

## Repo conventions to follow

- Utilize Framer Motion's built-in hooks (`useReducedMotion`).

## Steps

1. Import `useReducedMotion` in `src/components/Reveal.tsx`.
2. Inside `Reveal`, compute `yOffset = shouldReduceMotion ? "0px" : "24px"`.
3. Use template literals in the `transform` strings.
4. For `StaggerItem`, since it doesn't use hooks currently, convert it to a regular function component that calls `useReducedMotion` and dynamically creates the `item` variant object before passing it to `motion.div`.

## Boundaries

- Do NOT completely remove animations for reduced motion (opacity must remain).

## Verification

- **Mechanical**: Lint/Build check.
- **Feel check**: In DevTools > Rendering > Emulate CSS media feature prefers-reduced-motion: reduce.
  - Scroll down the page. Content should still fade in smoothly (opacity) but NOT translate vertically.
- **Done when**: Reduced motion drops the y-axis movement.
