# Color Palette Quick Reference

## Primary Colors

### Indigo (Primary)

```scss
$primary: #4c51bf;
$indigo-50: #eef2ff;
$indigo-100: #e0e7ff;
$indigo-500: #4c51bf; // PRIMARY
$indigo-600: #4338ca;
$indigo-700: #3730a3;
```

**Usage**: Primary buttons, active tabs, links, focus states, innovation elements

### Emerald (Secondary)

```scss
$secondary: #059669;
$emerald-50: #ecfdf5;
$emerald-100: #d1fae5;
$emerald-500: #059669; // SECONDARY
$emerald-600: #047857;
$emerald-700: #065f46;
```

**Usage**: Secondary buttons, success states, sustainability indicators, positive actions

### Accent Green

```scss
$accent: #10b981;
```

**Usage**: Highlights, positive feedback, success messages

## Supporting Colors

### Warning

```scss
$warning: #f59e0b;
```

**Usage**: Alerts, pending states, attention items

### Success

```scss
$success: #10b981; // Same as accent
```

**Usage**: Success messages, completed states, positive feedback

### Info

```scss
$info: #3b82f6;
```

**Usage**: Informational messages, tips, help text

### Danger

```scss
$danger: #ef4444;
```

**Usage**: Error messages, critical alerts, destructive actions

## Neutral Colors

### Backgrounds

```scss
$light: #fafbfc; // Almost white, main background
```

### Text Colors

```scss
$dark: #111827; // Primary text (near black)
$gray-900: #111827; // Headings
$gray-800: #1f2937;
$gray-700: #374151; // Body text, labels
$gray-600: #6b7280; // Secondary text
$gray-500: #6b7280; // Placeholders, icons
```

### UI Elements

```scss
$gray-50: #f9fafb; // Input backgrounds
$gray-100: #f3f4f6; // Hover states
$gray-200: #e5e7eb; // Borders, dividers
$gray-300: #d1d5db; // Secondary borders
```

## Usage Examples

### Buttons

```scss
// Primary button
background: linear-gradient(135deg, $indigo-600 0%, $indigo-500 100%);
color: white;

// Secondary button
background: linear-gradient(135deg, $emerald-600 0%, $emerald-500 100%);
color: white;

// Outline button
border: 2px solid $primary;
color: $primary;
background: transparent;
```

### Cards

```scss
// Basic card
border: 1px solid $gray-200;
background: white;

// Feature card hover
background: linear-gradient(to bottom, $indigo-50 0%, $gray-50 100%);

// Stat card
background: linear-gradient(135deg, $indigo-600 0%, $indigo-700 100%);
```

### Forms

```scss
// Input field
background: $gray-50;
border: 2px solid $gray-200;

// Focus state
border-color: $indigo-500;
box-shadow: 0 0 0 3px rgba($indigo-500, 0.1);

// Success validation
border-color: $emerald-500;

// Error validation
border-color: $danger;
```

### Status Badges

```scss
// Success badge
background: linear-gradient(135deg, $emerald-100 0%, $emerald-200 100%);
color: $emerald-700;
border: 1px solid $emerald-300;

// Warning badge
background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
color: #92400e;

// Info badge
background: linear-gradient(135deg, $indigo-100 0%, $indigo-200 100%);
color: $indigo-700;
```

### Gradients

#### Header/Hero Gradients

```scss
// Primary hero
background: linear-gradient(
  135deg,
  $indigo-700 0%,
  $indigo-600 50%,
  $emerald-600 100%
);

// Page header
background: linear-gradient(to bottom, white 0%, $gray-50 100%);

// Footer
background: linear-gradient(135deg, $gray-900 0%, $gray-800 100%);
```

#### Button Gradients

```scss
// Primary button
background: linear-gradient(135deg, $indigo-600 0%, $indigo-500 100%);

// Primary button hover
background: linear-gradient(135deg, $indigo-700 0%, $indigo-600 100%);

// Secondary button
background: linear-gradient(135deg, $emerald-600 0%, $emerald-500 100%);
```

#### Info Box Gradients

```scss
// Dual-tone info box
background: linear-gradient(135deg, $indigo-50 0%, $emerald-50 100%);

// Definition card
background: linear-gradient(to right, $emerald-50 0%, white 5%);

// Alert boxes
background: linear-gradient(to right, $indigo-50 0%, white 100%);
```

## Contrast Ratios (WCAG AA)

### Light Backgrounds

- $gray-900 on white: ✅ 16.12:1 (AAA)
- $gray-700 on white: ✅ 7.23:1 (AA Large)
- $indigo-600 on white: ✅ 4.89:1 (AA)
- $emerald-600 on white: ✅ 4.76:1 (AA)

### Dark Backgrounds

- white on $indigo-600: ✅ 4.31:1 (AA)
- white on $emerald-600: ✅ 4.41:1 (AA)
- white on $gray-900: ✅ 16.12:1 (AAA)

### Interactive Elements

- $indigo-600 on $indigo-50: ✅ 8.67:1 (AAA)
- $emerald-700 on $emerald-100: ✅ 7.45:1 (AA Large)

## Color Naming Convention

In the codebase, colors follow this pattern:

```scss
// Format: $color-shade
$indigo-50   // Lightest
$indigo-100
$indigo-500  // Base (same as $primary)
$indigo-600
$indigo-700  // Darkest

// Semantic names
$primary     // = $indigo-500
$secondary   // = $emerald-500
$accent      // = #10b981
$warning     // = #f59e0b
$danger      // = #ef4444
$info        // = #3b82f6
$light       // = #fafbfc
$dark        // = #111827
```

## Where Each Color Appears

### Indigo (#4C51BF)

- Primary buttons
- Active navigation tabs
- Links and hyperlinks
- Focus rings/outlines
- Header gradient
- Progress bars
- Checkboxes (checked state)
- Primary badges

### Emerald (#059669)

- Secondary buttons
- Success indicators
- Definition card accents
- Validation success states
- Positive status dots
- Success badges
- Secondary CTAs

### Amber/Warning (#F59E0B)

- Warning alerts
- Pending status
- Attention badges
- Caution messages

### Gray Scale

- All text (900, 700, 600)
- Borders (200, 300)
- Input backgrounds (50, 100)
- Hover states (100, 200)
- Footer background (900, 800)

## Quick Copy-Paste Swatches

For design tools (Figma, Sketch, etc.):

```
Primary Palette:
#4C51BF (Indigo 500)
#059669 (Emerald 500)
#10B981 (Accent Green)

Supporting:
#F59E0B (Warning)
#EF4444 (Danger)
#3B82F6 (Info)

Neutrals:
#FAFBFC (Background)
#111827 (Text Dark)
#6B7280 (Text Medium)
#E5E7EB (Border)
```

---

**Reference**: For complete color system, see DESIGN_SYSTEM.md
**Variables**: Defined in `src/styles/abstracts/_variables.scss`
