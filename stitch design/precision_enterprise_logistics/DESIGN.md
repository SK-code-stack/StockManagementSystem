---
name: Precision Enterprise Logistics
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464555'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#005338'
  on-tertiary: '#ffffff'
  tertiary-container: '#006e4b'
  on-tertiary-container: '#67f4b7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.011em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.006em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  data-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system is engineered for enterprise-grade inventory intelligence, supply chain operations, and logistics infrastructure. The interface balances high-density information architecture with effortless visual scanning. 

### Brand Personality & Emotional Response
- **Decisive & Uncompromising:** Visual weight prioritizes tabular clarity and rapid status resolution over decorative embellishment.
- **Architectural & Systematic:** Every layout unit aligns strictly to a predictable, calibrated structural grid.
- **Utilitarian Elegance:** Surfaces remain quiet to allow data points, inventory thresholds, and supply anomalies to step forward immediately.
- **Audience:** Global inventory managers, warehouse leads, supply-chain analysts, and procurement officers who require rapid execution without cognitive friction.

### Design Movement
The design movement is **Precision Modern ERP**—a refined functionalist philosophy combining low-contrast micro-borders, clean neutral backgrounds, high-legibility typographic scale, and purposeful semantic color coding.

## Colors

The color architecture enforces strict operational meaning. Neutral tones dominate 90% of screen real estate, reserving high-chroma pigments solely for user focus and systemic status feedback.

### Palette Architecture
- **Primary (`#4f46e5` - Electric Indigo):** Dedicated to primary calls-to-action, key selected states, active table selections, and core system focus indicators.
- **Secondary (`#06b6d4` - Cyan):** Applied to telemetry metrics, in-transit state tags, automated stock transfers, and system info notices.
- **Tertiary (`#10b981` - Emerald):** Denotes optimal stock levels, completed stock takes, inbound receipts, and positive variances.
- **Neutral (`#0f172a` - Deep Slate):** Foundation for text hierarchies, structural dividers, canvas backdrops, and tabular lineations.

### Semantic Status Values
- **Success / In-Stock (`#10b981`):** Minimum 4.5:1 contrast against text backgrounds; used with tinted fills (`rgba(16, 185, 129, 0.08)`).
- **Warning / Low Stock (`#f59e0b`):** Warning indicators, safety-stock warnings, and unverified PO items.
- **Danger / Critical (`#ef4444`):** Out-of-stock, negative inventory discrepancies, pipeline blocks, and destructive actions.
- **Informational (`#06b6d4`):** Movement updates, batch tracking, and scheduled cycle counts.

### Surface Tokens (Light Mode Default)
- **App Background:** `#f8fafc`
- **Surface Layer 1 (Card/Table):** `#ffffff`
- **Surface Layer 2 (Muted Header/Filter Bar):** `#f1f5f9`
- **Border Default:** `#e2e8f0`
- **Border Strong:** `#cbd5e1`

## Typography

Typographic scale prioritizes data scannability, vertical compact alignment, and distinct hierarchical weight.

### Type Pairings
- **Headlines (`Plus Jakarta Sans`):** Provides sharp, geometric clarity for module headers, key operational stats, and top-level navigation items.
- **Body & Tabular Data (`Inter`):** Selected for its exceptional legibility at micro-scales, balanced tall x-height, and robust OpenType tabular lining figures (`font-variant-numeric: tabular-nums`).

### Application Rules
- All numeric inventory values, unit measurements, currency amounts, and SKU tags must render with `tabular-nums` enabled to guarantee vertical alignment in lists and tables.
- Text labels below `12px` (`label-sm`) must use uppercase transformations with positive letter spacing (`0.04em`) to maintain legibility on low-DPI industrial displays.

## Layout & Spacing

The layout is built upon a hybrid responsive model: a fixed-width collapsible sidebar navigation coupled with a flexible, fluid-grid primary workspace.

### Structural Breakpoints
- **Mobile (< 768px):** Single-column layout. Sidebar collapses to off-canvas modal; metrics stack vertically. Table views switch to card-based horizontal list items.
- **Tablet (768px - 1024px):** 8-column layout. Left navigation condenses to icon-only rail (width: 64px). Metrics display in a 2x2 grid.
- **Desktop (> 1024px):** 12-column layout. Expanded navigation (width: 256px). Margin scales dynamically from `1.5rem` to `2rem`. Minimum viewport target: 1440px for full split-screen drawer comparisons.

### Density & Rhythms
- Spacing inside tabular components enforces a compact 36px or 44px row height.
- Component padding uses `space-sm` (8px) for compact elements, scaling to `space-lg` (16px) for standard panel containers.

## Elevation & Depth

Visual depth is achieved through **low-contrast outlines** paired with **subtle ambient shadows**, avoiding heavy drops that obscure dense rows of data.

### Layering Hierarchy
- **Level 0 (Canvas Base):** Plain background layer (`#f8fafc`). No shadow, no outline.
- **Level 1 (Card & Module Surfaces):** Surface white (`#ffffff`), delineated by a 1px solid micro-border (`#e2e8f0`). Box shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
- **Level 2 (Popovers, Dropdowns & Filter Menus):** Surface white, 1px solid border (`#cbd5e1`). Box shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Drawers & Modal Dialogs):** Elevated workspace overlays. Border: 1px solid (`#cbd5e1`). Box shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.06)`. Accompanied by a 20% slate backdrop dim (`rgba(15, 23, 42, 0.4)`).

## Shapes

The design system employs a **Soft (`roundedness: 1`)** geometric language. Enterprise workflows require maximized screen real estate; compact radii maintain visual softness while preserving grid density.

### Shape Geometry Tokens
- **Micro Radii (`0.25rem` / 4px):** Standard buttons, text field inputs, dropdown toggles, table selection checkboxes, and status badges.
- **Container Radii (`0.5rem` / 8px):** KPI summary cards, filter bars, data table wrappers, modal frames, and floating drawers.
- **Pill Geometry (`9999px`):** Reserved exclusively for semantic inventory status pills and count badges to distinctively separate status signals from interactive rectangular inputs.

## Components

### Buttons
- **Primary:** Background `#4f46e5`, text `#ffffff`, border none. Hover: `#4338ca`. Active: `#3730a3`. Focus-visible ring: 2px `#4f46e5` with 2px white offset.
- **Secondary / Outline:** Background `#ffffff`, text `#0f172a`, border 1px solid `#cbd5e1`. Hover: `#f8fafc`.
- **Ghost:** Text `#64748b`, transparent background. Hover: text `#0f172a`, background `#f1f5f9`.
- **Sizes:** Compact (32px height, 12px px), Standard (36px height, 16px px), Large (40px height, 20px px).

### Data Tables
- **Header Cells:** Background `#f8fafc`, bottom border 1px solid `#cbd5e1`. Typography: `label-sm` uppercase `#64748b`.
- **Rows:** Default background `#ffffff`, alternate striping optional (`#fcfcfd`). Hover state: `#f8fafc` across the entire row.
- **Numeric Alignment:** All quantities, currencies, and timestamps align strictly right (`text-align: right`) with header alignment matching the cell content.
- **Quick Action Row:** Hidden until hover; appears docked on the right pinned column using a gradient fade-out background.

### Status Pills
- **Base Style:** 20px height, padding 2px 8px, font: `label-sm`, rounded full (`9999px`).
- **Variants:**
  - *In Stock:* Text `#065f46`, background `#d1fae5`, border 1px solid `#a7f3d0`.
  - *Low Stock:* Text `#92400e`, background `#fef3c7`, border 1px solid `#fde68a`.
  - *Critical / Out of Stock:* Text `#991b1b`, background `#fee2e2`, border 1px solid `#fecaca`.
  - *Transfer / In-Transit:* Text `#155e75`, background `#cffafe`, border 1px solid `#a5f3fc`.

### Form Inputs & Filters
- **Text Inputs:** Height 36px, background `#ffffff`, border 1px solid `#cbd5e1`, placeholder `#94a3b8`, text `#0f172a`. Focus: border `#4f46e5`, ring 1px `#4f46e5`.
- **Filter Bar:** Composite segmented surface hosting inline search input, multi-select tag chips, date-range picker, and a persistent active filter count badge.

### Metric / KPI Summary Cards
- White surface, 1px solid border `#e2e8f0`, internal padding `space-lg` (16px).
- Content sequence: Small muted uppercase title, primary tabular value display (`headline-lg`), followed by an inline trend indicator badge (e.g., +4.2% in Emerald or -1.8% in Rose).

### Drawers & Slide-Out Panels
- Right-anchored sliding panels (standard widths: 480px, 640px) used for SKU details, audit logs, and stock adjustments without leaving the table context. Fixed header with sticky footer action bar.