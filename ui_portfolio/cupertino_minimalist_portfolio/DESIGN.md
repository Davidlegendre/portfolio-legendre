---
name: Cupertino Minimalist Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3fc'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e2e1eb'
  on-surface: '#1a1b22'
  on-surface-variant: '#47464b'
  inverse-surface: '#2f3037'
  inverse-on-surface: '#f1f0f9'
  outline: '#77767b'
  outline-variant: '#c8c5cb'
  surface-tint: '#5f5e61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1e'
  on-primary-container: '#858387'
  inverse-primary: '#c8c5ca'
  secondary: '#5d5e66'
  on-secondary: '#ffffff'
  secondary-container: '#e3e1ec'
  on-secondary-container: '#63646c'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001d31'
  on-tertiary-container: '#188ace'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e1e6'
  primary-fixed-dim: '#c8c5ca'
  on-primary-fixed: '#1b1b1e'
  on-primary-fixed-variant: '#47464a'
  secondary-fixed: '#e3e1ec'
  secondary-fixed-dim: '#c6c5cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#46464e'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#faf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e2e1eb'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.25rem
  margin-tablet: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels an ultra-refined, Cupertino-inspired aesthetic crafted specifically for high-end mobile portfolios. It prioritizes clarity, calm confidence, and tactile digital craftsmanship. Every screen celebrates whitespace, precise typographic scales, subtle structural delineations, and fluid physical continuity.

### Core Tenets
- **Quiet Authority:** Content, case studies, and imagery take precedence. The interface is architectural, silent, and deliberate.
- **Atmospheric Depth:** Rely on authentic backdrop blurs, translucent materials, and soft tonal layers rather than artificial skeuomorphism.
- **Physical Precision:** Compact, tactile interaction touchpoints tailored for touch surfaces, featuring responsive tap feedback and subtle micro-movements.
- **Dual-Mode Parity:** Both light and dark appearances are treated as primary canvases with zero loss of contrast, clarity, or depth definition.

## Colors

The palette is rooted in pure monochrome with carefully calibrated zinc neutrals. The goal is an unobtrusive framework that lets showcase artwork, imagery, and typography carry the emotional weight.

### Semantic Mapping

- **Light Mode:**
  - Base Canvas: `#FFFFFF`
  - Elevated Surface: `rgba(255, 255, 255, 0.72)` with `backdrop-filter: blur(20px)`
  - Primary Text: `#09090B` (High emphasis)
  - Secondary Text: `#71717A` (Muted metadata, timestamps, subtitles)
  - Ghost/Subtle Border: `#E4E4E7` (border-neutral-200 equivalent)
  - Interactive Accent: `#18181B` (Default), with `#0284C7` reserved for active state micro-accents and verified indicators.

- **Dark Mode:**
  - Base Canvas: `#000000` (True OLED pitch black)
  - Elevated Surface: `rgba(24, 24, 27, 0.65)` with `backdrop-filter: blur(20px)`
  - Primary Text: `#FAFAFA`
  - Secondary Text: `#A1A1AA`
  - Ghost/Subtle Border: `#27272A` (border-neutral-800 equivalent)
  - Interactive Accent: `#FFFFFF` (Default text/action), with `#38BDF8` for delicate system callouts.

## Typography

The type hierarchy leverages **Hanken Grotesk** across all roles to emulate the clean, neo-grotesque structural neutrality and legibility associated with native Cupertino interfaces. 

- **Tracking:** Headlines require tight negative letter-spacing (`-0.02em` to `-0.03em`) to mimic optical kerning at large scales. Labels and micro-captions shift into subtle positive tracking (`+0.02em` to `+0.03em`) for pristine legibility at smaller touch sizes.
- **Hierarchy Rules:** Limit any single mobile viewport to a maximum of 3 type sizes (e.g., `headline-lg`, `body-md`, `label-sm`). Case study editorial titles utilize `headline-lg` on mobile devices to prevent excessive multi-line wrapping.

## Layout & Spacing

A mobile-first dynamic layout based on an underlying 4pt vertical rhythm and a fluid single-column to dual-column responsive grid.

### Layout Mechanics
- **Safe Margins:** Standard mobile screens adopt a fixed `1.25rem` (20px) horizontal outer margin, keeping touch boundaries comfortable and providing content breathing room.
- **Edge Snapping:** Media carousels and immersive case study photography break standard margins to bleed flush to device bezels (`margin: -1.25rem`).
- **Vertical Grouping:**
  - `space-xs` (4px): Micro-spacing between tags, badge icons, and labels.
  - `space-sm` (8px): Stacked label-to-body text relationships.
  - `space-md` (16px): Internal container padding and component gap standards.
  - `space-lg` (24px): Card-to-card vertical gap within a feed or list.
  - `space-xl` (40px): Section divisions (e.g., Work, About, Archive).

## Elevation & Depth

Visual hierarchy is constructed through translucent surface tiers, crisp structural hairline strokes, and ultra-diffused atmospheric shadows.

### Materials & Layers
- **Base Canvas (Level 0):** Pure solid flat canvas (`#FFFFFF` in Light, `#000000` in Dark).
- **Subsurface Floating (Level 1):** Semi-opaque background (`rgba(255, 255, 255, 0.8)` / `rgba(24, 24, 27, 0.7)`), paired with `backdrop-filter: blur(20px) saturate(180%)`. Used for sticky navigation bars, floating tab bars, and contextual action sheets.
- **Foreground Cards (Level 2):** Solid background with a hairline border (`1px solid var(--border-neutral)`). Under light mode, add a subtle ambient shadow: `box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05)`. In dark mode, shadows are disabled; depth is created strictly by hairline borders (`#27272A`) and lighter surface fills (`#18181B`).

## Shapes

The shape system employs continuous-curve aesthetics (squircle-like feel) consistent with modern operating system conventions.

- **Micro Controls & Badges:** Full pill radius (`9999px`) for category chips, state tags, and floating pill buttons.
- **Standard Cards & Media:** `1rem` (16px) radius for interactive portfolio project cards, media embeds, and input boxes.
- **Modals & Drawers:** `1.5rem` (24px) top-corner radius for native sheet presentations and overlay drawers.

## Components

### Buttons
- **Primary Action:** Solid background (`#18181B` in Light, `#FFFFFF` in Dark) with inverted text. Fully rounded pill (`9999px`) or `0.75rem` rounded rectangle. Height: 48px to accommodate ergonomic touch targets. Active tap animation: `scale(0.98)` transition `150ms cubic-bezier(0.2, 0, 0, 1)`.
- **Secondary / Ghost:** Transparent surface with a 1px boundary (`border-neutral-200` / `border-neutral-800`). Smooth background transition on touch down (`rgba(0, 0, 0, 0.04)` / `rgba(255, 255, 255, 0.06)`).

### Pill Badges & Chips
- Compact height (24px to 28px), pill border-radius (`9999px`), padding: `0 10px`.
- Visual style: Translucent background (`rgba(0, 0, 0, 0.05)` in Light, `rgba(255, 255, 255, 0.1)` in Dark) with matched hairline border. Text uses `label-sm` in secondary text color.

### Cards (Portfolio Project Items)
- Visual styling: `1rem` (16px) corner radius, enclosing high-resolution asset previews with an aspect ratio of 4:3 or 16:9.
- Padding: Internal metadata text padded by `1rem` (16px).
- Hairline outline: 1px continuous border with `border-neutral-200` (Light) or `border-neutral-800` (Dark).

### Input Fields
- Understated inset layout: 48px height, `0.75rem` (12px) border radius. Background fill is soft neutral (`#F4F4F5` in Light, `#18181B` in Dark).
- Border: 1px transparent resting border; transitions to solid monochrome border on focus with 0px offset focus-ring.

### Lists & Information Rows
- Native grouped iOS table style. Divided by hairline separators indented by the icon or leading text margin.
- Right-aligned chevrons and metadata presented in muted secondary tones.