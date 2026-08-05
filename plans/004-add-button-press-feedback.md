# 004 — Add tactile button press feedback

- **Status**: TODO
- **Commit**: N/A
- **Severity**: MEDIUM
- **Category**: Physicality & Origin
- **Estimated scope**: 1 file (`src/app/page.tsx`)

## Problem

The primary call-to-action button has hover states but no physical press feedback. Pressable elements without press feedback feel broken or non-tactile.

```tsx
/* src/app/page.tsx:28 — current */
            <button className="group flex items-center gap-4 bg-brand-ink text-brand-base px-8 py-4 rounded-full font-medium hover:bg-brand-accent transition-colors duration-300">
```

## Target

Add `active:scale-[0.97]` to the button's Tailwind classes.

```tsx
/* src/app/page.tsx target */
            <button className="group flex items-center gap-4 bg-brand-ink text-brand-base px-8 py-4 rounded-full font-medium hover:bg-brand-accent transition-all duration-150 ease-[var(--ease-out-strong)] active:scale-[0.97]">
```
*(Assuming Plan 003's classes are applied).*

## Repo conventions to follow

- Use Tailwind pseudo-classes (`active:`) for interactive states.

## Steps

1. In `src/app/page.tsx`, find the `<button>` element in the hero section ("Join Academy").
2. Append `active:scale-[0.97]` to its `className`.

## Boundaries

- Do not use `scale(0.90)` or lower (keep it subtle, around 0.97).

## Verification
- **Feel check**: Click and hold the "Join Academy" button. It should visually compress slightly into the background. Release, and it should spring back.
- **Done when**: Pressing the button provides clear visual scaling.
