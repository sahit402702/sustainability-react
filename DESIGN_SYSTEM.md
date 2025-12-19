# Design System Update - Option 3: Indigo & Emerald

## Overview

Complete redesign of the sustainability application with a modern, corporate aesthetic using Indigo and Emerald color palette. The design emphasizes innovation, trust, and environmental responsibility while maintaining professional credibility.

## Color Palette

### Primary Colors

- **Indigo** (#4C51BF) - Innovation, trust, professionalism

  - Indigo 500: #4C51BF
  - Indigo 600: #4338CA
  - Indigo 700: #3730A3
  - Used for: Primary buttons, links, active states, tab selections

- **Emerald** (#059669) - Sustainability, growth, compliance
  - Emerald 500: #059669
  - Emerald 600: #047857
  - Emerald 700: #065F46
  - Used for: Secondary buttons, success states, sustainability indicators

### Supporting Colors

- **Accent Green** (#10B981) - Positive actions and highlights
- **Warning Amber** (#F59E0B) - Attention and alerts
- **Danger Red** (#EF4444) - Errors and critical issues
- **Info Blue** (#3B82F6) - Informational states

### Neutrals

- **Background** (#FAFBFC) - Almost white, soft and clean
- **Text Primary** (#111827) - Near black for excellent readability
- **Gray Scale** - Full range from Gray 50 to Gray 900

## Typography

### Font Family

**Inter** - Modern, professional sans-serif with excellent readability

### Font Weights

- Light: 300
- Normal: 400
- Medium: 500 (used for labels, buttons)
- Semibold: 600 (used for headings)
- Bold: 700 (used for hero text, main headings)

### Heading Hierarchy

- H1: 2.5rem (40px) - Bold weight, -0.02em letter spacing
- H2: 2rem (32px) - Bold weight
- H3: 1.75rem (28px) - Semibold weight
- H4: 1.5rem (24px) - Semibold weight
- H5: 1.25rem (20px) - Semibold weight
- H6: 1rem (16px) - Semibold weight

## Components

### Buttons

- **Style**: Modern pill shape with gradient backgrounds
- **Border Radius**: 12px (large)
- **Padding**: 0.625rem × 1.5rem
- **Shadow**: Subtle elevation that increases on hover
- **Hover Effect**: Translates up 2px, increases shadow
- **Primary**: Indigo gradient (135deg, #4338CA → #4C51BF)
- **Secondary**: Emerald gradient (135deg, #047857 → #059669)
- **Outline**: 2px border, transparent background, fills on hover

### Cards

- **Border**: 1px solid Gray 200
- **Border Radius**: 12px
- **Shadow**: Subtle base shadow, increases on hover
- **Hover Effect**: Translates up 4px, enhanced shadow
- **Variants**:
  - Feature cards: Icon cards with gradient backgrounds
  - Stat cards: Indigo gradient with radial glow effect
  - Definition cards: Left border accent (3px Emerald)
  - Legislation cards: Top border accent (3px Indigo)

### Forms

- **Border Radius**: 12px
- **Border**: 2px solid Gray 200
- **Background**: Gray 50 (unfocused), White (focused)
- **Focus State**: Indigo 500 border + 3px shadow ring
- **Padding**: 0.875rem × 1.25rem
- **Labels**: Medium weight, small size, gray 900

### Tabs (Pill Style)

- **Shape**: Fully rounded pills (border-radius: 9999px)
- **Inactive**: White background, Gray 200 border, Gray 700 text
- **Active**: Indigo gradient background, white text, elevated shadow
- **Hover**: Indigo 50 background, Indigo 700 text
- **Gap**: 1rem between tabs on desktop

### Badges & Status

- **Shape**: Fully rounded pills
- **Padding**: 0.375rem × 0.875rem
- **Font**: Small size, medium weight
- **Variants**: Success (Emerald), Warning (Amber), Danger (Red), Info (Blue), Primary (Indigo)
- **Status Dots**: Animated pulse effect with colored glow

### Progress Bars

- **Height**: 0.75rem (normal), 1rem (large), 0.5rem (small)
- **Shape**: Fully rounded
- **Background**: Gray 200
- **Fill**: Indigo gradient with animated shine effect
- **Animation**: Shimmer effect that runs continuously

## Page-Specific Design

### Landing Page

- **Hero Section**:
  - Gradient background (Indigo 700 → Indigo 600 → Emerald 600)
  - Geometric pattern overlay (subtle white dots)
  - White text with text shadow for depth
  - CTA buttons: White with indigo text (inverted style)
  - Padding: 6rem vertical on large screens

### Sustainability Module

- **Breadcrumbs**: Indigo links with hover underline
- **Header**: Gradient background (white → Gray 50)
- **Info Box**: Dual gradient (Indigo 50 → Emerald 50), Indigo border
- **Tabs**: Modern pill style with center alignment
- **Definition Cards**: Left Emerald accent, gradient background
- **Legislation Cards**: Top Indigo accent, Gray 50 background

### FAQs Page

- **Hero**: Gradient background (Indigo → Emerald) with pattern overlay
- **Search Bar**:
  - Gray 50 background, 2px Gray 200 border
  - Large border radius (12px)
  - Indigo focus state with ring shadow
  - Right-aligned search icon
- **Accordion**: Clean white cards with modern shadows

### Header

- **Background**: Indigo gradient (Indigo 700 → Indigo 600)
- **Brand Logo**: White background in rounded container
- **Shine Animation**: Subtle animated shimmer effect
- **Shadow**: Medium depth for elevation
- **Sticky**: Remains at top with enhanced shadow when scrolled

### Footer

- **Background**: Dark gradient (Gray 900 → Gray 800)
- **Border Top**: 3px Indigo accent line
- **Text**: Gray 300 (normal), White (headings)
- **Links**: Transform translateX(4px) on hover
- **Link Color**: Gray 300 → White on hover

## Design Principles

### Depth & Elevation

- Use shadows to create visual hierarchy
- Cards lift on hover (translateY -4px)
- Buttons lift slightly (translateY -2px)
- Shadows increase with elevation

### Transitions

- **Fast**: 0.15s for small interactions (hover states)
- **Base**: 0.2s for standard interactions
- **Slow**: 0.3s for complex animations

### Spacing

- 8px grid system (spacers: 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px)
- Consistent padding in components
- Ample whitespace for breathing room

### Border Radius

- **Small**: 6px - Tight corners for compact elements
- **Base**: 8px - Standard for most components
- **Large**: 12px - Cards and prominent elements
- **XL**: 16px - Hero sections and large containers
- **Full**: 9999px - Pills, badges, status dots

### Accessibility

- All colors pass WCAG AA contrast ratios
- Focus states are clearly visible
- Keyboard navigation fully supported
- ARIA attributes properly implemented
- Semantic HTML structure

## Mobile Responsiveness

- All components are mobile-first
- Tabs scroll horizontally on mobile with smooth scrolling
- Hero sections scale typography responsively
- Cards stack properly on small screens
- Touch targets meet minimum size requirements (44×44px)

## Modern Features

- Gradient backgrounds for visual interest
- Geometric patterns for texture
- Animated shimmer effects
- Pulse animations for status indicators
- Smooth transitions throughout
- Elevated hover states for interactivity

## Implementation Status

✅ Color palette updated in variables
✅ Typography system modernized
✅ Button components redesigned
✅ Card components with new variants
✅ Form styling updated
✅ Utility classes added (badges, progress, status)
✅ Header with gradient background
✅ Footer with dark theme
✅ Landing page hero section
✅ Sustainability page with pill tabs
✅ FAQs page with gradient hero
✅ All shadows and border radius updated
✅ Transitions optimized

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- CSS is modular and tree-shakeable
- Animations use transform/opacity for GPU acceleration
- Gradients are CSS-based (no images)
- Pattern overlays use data URIs (no external files)
- Shadows are optimized for performance

---

**Design Version**: 1.0.0
**Last Updated**: 2024
**Design System**: Option 3 - Indigo & Emerald (Corporate)
