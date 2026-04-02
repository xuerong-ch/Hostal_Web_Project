# Design System Strategy: The Curated Retreat

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **The Digital Curator**. Unlike standard hostel websites that prioritize density and utility, this system treats the digital interface as a boutique gallery. We are moving away from "web-native" structures—like rigid grids and heavy borders—toward a high-end editorial experience that mirrors the tactility of a luxury travel magazine.

The aesthetic is built on **Intentional Asymmetry** and **Tonal Depth**. By utilizing generous whitespace (`spacing.20` and `spacing.24`) and overlapping elements (e.g., an image bleeding into a text container), we create a layout that feels rhythmic and human rather than mechanical. The goal is to evoke a sense of "tranquil luxury" through stability and breathable composition.

---

## 2. Colors: Tonal Architecture
This system abandons the traditional "box" model. We define space through color weight rather than lines.

### The "No-Line" Rule
Explicitly prohibit 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting against a `surface` background provides all the separation the eye needs.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of handmade paper.
*   **Base:** `surface` (#fafaf3) is our canvas.
*   **Primary Containers:** Use `surface-container-low` (#f5f4ed) for secondary content blocks.
*   **Active Layers:** Use `surface-container-lowest` (#ffffff) for floating cards to create a subtle, clean lift.

### The "Glass & Gradient" Rule
To add visual "soul," use subtle gradients on primary CTAs. Instead of a flat Terracotta block, apply a linear gradient from `primary` (#8e4d30) to `primary_container` (#cc7f5e). For floating navigation or over-image overlays, use Glassmorphism: `surface` color at 70% opacity with a `backdrop-blur` of 12px.

---

## 3. Typography: The Editorial Voice
Our typography scale is designed to create a high-contrast, authoritative hierarchy.

*   **Display & Headline (Noto Serif):** These are our "hero" moments. Use `display-lg` for section headers with increased letter-spacing to emphasize sophistication. The serif choice provides an artisanal, "boutique" feel that feels timeless.
*   **Title & Body (Inter):** These tokens handle the functional narrative. Use `body-lg` for storytelling and `label-md` for metadata (like room specs or price points).
*   **The Contrast Principle:** Always pair a large `display-md` heading with a significantly smaller `body-md` subtext to create a sense of scale and premium "air."

---

## 4. Elevation & Depth: Tonal Layering
We achieve hierarchy through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift that mimics natural light hitting physical materials.
*   **Ambient Shadows:** If a floating element (like a "Book Now" bar) requires a shadow, it must be an "Ambient Shadow": `4%` opacity, `blur: 32px`, using the `on-surface` color. It should feel like a glow, not a dark smudge.
*   **The Ghost Border Fallback:** If accessibility requires a stroke (e.g., in high-contrast modes), use a "Ghost Border": the `outline-variant` token at `15%` opacity. 100% opaque borders are strictly forbidden.

---

## 5. Components: Minimalist Primitives

### Buttons (The Terracotta Signature)
*   **Primary:** A gradient from `primary` to `primary_container`. `rounded-sm` (0.125rem) for a sharp, architectural look. No border.
*   **Secondary:** Ghost-style. No background. `primary` text with a 1px "Ghost Border" (low opacity `outline-variant`).
*   **States:** On hover, shift the background color by 5% luminance; avoid dramatic scale changes to maintain tranquility.

### Cards & Lists
*   **The "No-Divider" Rule:** Forbid the use of divider lines between list items or card sections. Instead, use `spacing.6` to `spacing.8` of vertical whitespace to separate content.
*   **Image Handling:** Images within cards should use `rounded-none` or `rounded-sm` to maintain a structured, stable feel.

### Input Fields
*   **Style:** Minimalist underline or "Ghost Box."
*   **Focus:** Transition the `outline` color to `primary` (#8e4d30) with a subtle `2px` bottom border. Labels should use `label-sm` in `on-surface-variant`.

### Featured Room Component (Custom)
An asymmetric component where the room image occupies 60% of the width, and a `surface-container-lowest` text block overlaps the image by `spacing.10`. This breaks the grid and creates a custom, editorial feel.

---

## 6. Do’s and Don'ts

### Do
*   **Do** use `spacing.20` (7rem) between major sections to let the design breathe.
*   **Do** use scroll-driven animations to gently "fade-in and slide-up" images as they enter the viewport.
*   **Do** prioritize high-quality, warm-toned photography to complement the Terracotta and Taupe palette.

### Don't
*   **Don't** use standard "Material Design" shadows or 100% opaque borders.
*   **Don't** use "vibrant" or "neon" colors. Every hue must feel earthy and desaturated.
*   **Don't** use rounded corners above `rounded-md` (0.375rem). Rounded shapes feel too playful; sharp or slightly softened corners feel upscale.
*   **Don't** use "Quick" transitions. All micro-interactions should be `cubic-bezier(0.4, 0, 0.2, 1)` with a duration of at least `300ms` to feel intentional and calm.