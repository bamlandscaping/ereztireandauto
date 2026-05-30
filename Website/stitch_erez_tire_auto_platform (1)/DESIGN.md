---
name: Precision Performance
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#89ceff'
  on-secondary: '#00344d'
  secondary-container: '#00a2e6'
  on-secondary-container: '#00344e'
  tertiary: '#dbdddf'
  on-tertiary: '#2d3133'
  tertiary-container: '#bfc1c3'
  on-tertiary-container: '#4c4f51'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  code-technical:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The brand personality is defined by mechanical precision, high-performance engineering, and uncompromising reliability. This design system avoids common automotive tropes—such as distressed textures or "gritty" imagery—in favor of a high-end, clinical environment that mirrors a premium service bay. 

The aesthetic is **Corporate / Modern** with a technical edge. It leverages a dark, sophisticated backdrop to make technical information and the signature cyan brand color pop. The visual language conveys that every bolt is tightened to spec and every diagnostic is data-driven. The interface should feel like a high-performance dashboard: organized, authoritative, and efficient.

## Colors

The palette is anchored by a **Deep Slate Dark Mode** to establish a premium, professional foundation. 

- **Primary Cyan (#22d3ee):** Used for critical calls to action, active states, and highlighting key technical data. It provides a "glow" against the dark background, suggesting energy and modern technology.
- **Deep Backgrounds:** We utilize `#020617` for the primary canvas to provide maximum depth. Surface elements use a slightly lighter slate (`#1e293b`) to create clear hierarchical separation.
- **Accent White:** Pure white or high-silver grays are reserved for primary typography to ensure maximum legibility and a crisp, clean finish.
- **Functional Borders:** Crisp, low-opacity borders in `#334155` are used to define structure without adding visual clutter.

## Typography

The design system utilizes **Geist** exclusively to achieve a mono-spaced influence within a highly readable sans-serif typeface. This choice reinforces the "precision engineering" narrative.

- **Headlines:** Set with tight tracking and semi-bold weights to appear sturdy and impactful.
- **Labels:** Small caps or uppercase labels are used for technical specs (e.g., tire dimensions, torque ratings) to mimic industrial markings.
- **Readability:** High contrast between text (`#f8fafc`) and background is maintained throughout to ensure the shop floor or service desk environment doesn't hinder information intake.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a controlled, organized structure that feels engineered rather than fluid. 

- **Grid:** A 12-column grid is used for desktop (1280px max-width) with 24px gutters. 
- **Rhythm:** A strict 4px base unit ensures all elements align perfectly. Vertical rhythm is prioritized to make data-heavy lists (like service histories) easy to scan.
- **Mobile Adaptivity:** On mobile, the grid collapses to a single column with 16px side margins. Elements like service cards should occupy the full width to maximize touch targets.

## Elevation & Depth

To maintain a "precision tool" feel, this design system avoids heavy, organic shadows. Instead, it uses **Tonal Layers** and **Low-contrast Outlines**:

- **Layering:** Surfaces are elevated through color shifts. The background is the darkest layer, and active "work areas" or cards use a slightly lighter slate.
- **Borders:** Every container is defined by a 1px crisp border (`#334155`). This replaces shadows as the primary means of separation, creating a "schematic" look.
- **Focus States:** Active elements utilize a subtle inner-glow or "drop-shadow" using the primary cyan color at very low opacity (10-15%) to simulate a backlit display.

## Shapes

The shape language is **Soft (Level 1)**. Elements feature a subtle 4px (0.25rem) corner radius. This is enough to feel modern and accessible while remaining sharp enough to feel professional and technical. 

Buttons and input fields should feel like physical components—machined and precise. Large containers (cards) use the `rounded-lg` (8px) setting to provide a slight visual distinction from smaller UI components.

## Components

- **Buttons:** Primary buttons are solid Cyan with dark slate text. Secondary buttons are outlined with Cyan text. Use a subtle "inset" look on press to simulate a mechanical switch.
- **Cards:** Cards should have no shadow, using only the 1px `#334155` border and a background color of `#1e293b`. Header areas within cards should be separated by a horizontal divider.
- **Input Fields:** Inputs feature a dark background (`#020617`) with a subtle border. On focus, the border transitions to Primary Cyan with a high-contrast cursor.
- **Chips/Status Indicators:** Use highly saturated colors for status (e.g., Green for "Completed," Yellow for "In Progress," Red for "Critical") but keep them small and pill-shaped to avoid a "playful" look.
- **Data Tables:** These are a core component. Use zebra-striping with minimal contrast and ensure text is aligned to a strict vertical grid. Header rows should be in all-caps Geist for a technical feel.
- **Diagnostic Icons:** Use thin-stroke (1.5px) icons. Avoid filled or bubbly icons; stick to geometric, wireframe styles.