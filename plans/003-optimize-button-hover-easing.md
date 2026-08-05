# 003 — Optimize button hover easing and duration

- **Status**: TODO
- **Commit**: N/A
- **Severity**: MEDIUM
- **Category**: Easing & Duration
- **Estimated scope**: 2 files (`src/app/page.tsx`, `src/app/globals.css`)

## Problem

The primary call-to-action button uses `duration-300` and default `ease` (or `ease-in-out`), which is too sluggish and unresponsive for UI hover feedback.

```tsx
/* src/app/page.tsx:28 — current */
            <button className="group flex items-center gap-4 bg-brand-ink text-brand-base px-8 py-4 rounded-full font-medium hover:bg-brand-accent transition-colors duration-300">
```

## Target

Extract a proper UI easing curve token and reduce duration to 150ms.

```css
/* src/app/globals.css target */
@theme {
  /* ... existing vars ... */
  --ease-out-strong: cubic-bezier(0.23, 1, 0.32, 1);
}
```

```tsx
/* src/app/page.tsx target */
            <button className="group flex items-center gap-4 bg-brand-ink text-brand-base px-8 py-4 rounded-full font-medium hover:bg-brand-accent transition-all duration-150 ease-[var(--ease-out-strong)]">
```
*(Also update the arrow icon inside it if needed).*

## Repo conventions to follow

- Add tokens to the `@theme` block in `src/app/globals.css`.

## Steps

1. In `src/app/globals.css`, add `--ease-out-strong: cubic-bezier(0.23, 1, 0.32, 1);` under `@theme`.
2. In `src/app/page.tsx`, find the Join Academy button and replace `transition-colors duration-300` with `transition-all duration-150 ease-[var(--ease-out-strong)]`.

## Boundaries

- Do NOT touch other components.

## Verification
- **Feel check**: Hover over the "Join Academy" button. The color transition should feel instantly responsive, snapping to the new state with a sharp deceleration.
- **Done when**: Hover duration is 150ms with a strong ease-out curve.
