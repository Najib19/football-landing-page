# 001 — Hardware accelerate Framer Motion reveals

- **Status**: TODO
- **Commit**: N/A
- **Severity**: HIGH
- **Category**: Performance
- **Estimated scope**: 1 file (`src/components/Reveal.tsx`), minor edits

## Problem

Framer Motion shorthand properties (`y`, `x`, `scale`) are not hardware-accelerated. They run on the main thread and can cause dropped frames during scroll reveals, especially on a heavy marketing page.

```tsx
/* src/components/Reveal.tsx:13-14 — current */
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}

/* src/components/Reveal.tsx:50-51 — current */
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
```

## Target

The exact end state must use full `transform` strings which trigger GPU acceleration:

```tsx
/* target Reveal component */
      initial={{ opacity: 0, transform: "translateY(24px)" }}
      animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(24px)" }}

/* target StaggerItem component */
    hidden: { opacity: 0, transform: "translateY(24px)" },
    show: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
```

## Repo conventions to follow

- Keep existing easing arrays (`[0.16, 1, 0.3, 1]`) and durations (`0.7`) intact as per the current codebase behavior for this specific fix.

## Steps

1. Edit `src/components/Reveal.tsx` inside `Reveal`. Change `y: 24` to `transform: "translateY(24px)"` and `y: 0` to `transform: "translateY(0px)"` in `initial` and `animate` props.
2. Edit `src/components/Reveal.tsx` inside `StaggerItem`. Change `y: 24` to `transform: "translateY(24px)"` and `y: 0` to `transform: "translateY(0px)"` in `hidden` and `show` variants.

## Boundaries

- Do NOT touch other components.
- Do NOT change markup/structure.
- Do NOT add new dependencies.

## Verification

- **Mechanical**: Run `npm run build` to ensure no TypeScript errors exist.
- **Feel check**: Open the page, scroll down rapidly.
  - Open DevTools > Rendering > Enable "Paint flashing". The animating elements should not trigger continuous paint/layout repaints as they slide up.
- **Done when**: `y: 24` has been replaced with `transform` across `Reveal.tsx` without regressions in visual behavior.
