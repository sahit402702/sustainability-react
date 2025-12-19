# Migration Guide: Green/Yellow → Indigo/Emerald

This guide helps you update any custom components or pages to match the new design system.

## Quick Color Replacements

If you have custom CSS or components, replace these values:

### Old → New Color Mappings

```scss
// Primary colors
#2c5f2d → #4c51bf  // Old green → New indigo
#97bc62 → #059669  // Old light green → New emerald
#ffc107 → #f59e0b  // Old yellow → New amber (warnings only)

// Common button colors
background-color: #2c5f2d → background: linear-gradient(135deg, #4338ca 0%, #4c51bf 100%)
background-color: #97bc62 → background: linear-gradient(135deg, #047857 0%, #059669 100%)
background-color: #ffc107 → background: #f59e0b  // Use sparingly for warnings

// Text colors
color: #2c5f2d → color: #4c51bf
color: #1a1a1a → color: #111827
color: #4a4a4a → color: #374151
color: #666666 → color: #6b7280

// Borders
border-color: #dee2e6 → border-color: #e5e7eb
border: 1px solid #d0d0d0 → border: 2px solid #e5e7eb

// Backgrounds
background-color: #f8f9fa → background-color: #fafbfc
background-color: #ffffff → Keep as white
background-color: #ffc107 → background: linear-gradient(135deg, #111827 0%, #1f2937 100%)
```

## Component Updates

### Updating Buttons

**Old Style:**

```scss
.custom-button {
  background-color: #2c5f2d;
  border-radius: 4px;
  padding: 0.625rem 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

**New Style:**

```scss
.custom-button {
  background: linear-gradient(135deg, #4338ca 0%, #4c51bf 100%);
  border-radius: 0.75rem; // 12px
  padding: 0.625rem 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
}
```

### Updating Cards

**Old Style:**

```scss
.custom-card {
  border: none;
  border-radius: 0.375rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

**New Style:**

```scss
.custom-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem; // 12px
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: #d1d5db;
  }
}
```

### Updating Form Inputs

**Old Style:**

```scss
.custom-input {
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;

  &:focus {
    border-color: #2c5f2d;
    box-shadow: 0 0 0 3px rgba(44, 95, 45, 0.1);
  }
}
```

**New Style:**

```scss
.custom-input {
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem; // 12px
  padding: 0.875rem 1.25rem;
  background-color: #f9fafb;
  transition: all 0.15s ease-in-out;

  &:focus {
    border-color: #4c51bf;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(76, 81, 191, 0.1);
    outline: none;
  }
}
```

### Updating Tabs

**Old Style (Underline):**

```scss
.custom-tab {
  border-bottom: 3px solid transparent;
  padding: 0.75rem 1rem;

  &.active {
    border-bottom-color: #ffc107;
    background-color: #ffc107;
  }
}
```

**New Style (Pill):**

```scss
.custom-tab {
  border: 2px solid #e5e7eb;
  border-radius: 9999px; // Fully rounded
  padding: 0.875rem 2rem;
  background-color: white;
  color: #374151;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: #eef2ff;
    border-color: #c7d2fe;
    color: #3730a3;
  }

  &.active {
    background: linear-gradient(135deg, #4338ca 0%, #4c51bf 100%);
    border-color: #4338ca;
    color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
}
```

## Variable Usage

Instead of hardcoding colors, use SCSS variables:

### Import Variables

```scss
@import "../abstracts/variables";
```

### Use Variables in Your Components

```scss
// DON'T do this:
.my-component {
  color: #4c51bf;
  background: #059669;
}

// DO this:
.my-component {
  color: $primary; // or $indigo-500
  background: $secondary; // or $emerald-500
}
```

### Common Variables to Use

```scss
// Colors
$primary        // #4c51bf (Indigo)
$secondary      // #059669 (Emerald)
$accent         // #10b981 (Green)
$warning        // #f59e0b (Amber)
$danger         // #ef4444 (Red)
$info           // #3b82f6 (Blue)

// Grays
$gray-50        // #f9fafb
$gray-100       // #f3f4f6
$gray-200       // #e5e7eb
$gray-700       // #374151
$gray-900       // #111827

// Spacing
$spacer         // 1rem (16px)
$spacers        // Map of spacing values

// Typography
$font-weight-normal     // 400
$font-weight-medium     // 500
$font-weight-semibold   // 600
$font-weight-bold       // 700

$font-size-sm   // 0.875rem (14px)
$font-size-base // 1rem (16px)
$font-size-lg   // 1.125rem (18px)

// Border Radius
$border-radius      // 0.5rem (8px)
$border-radius-sm   // 0.375rem (6px)
$border-radius-lg   // 0.75rem (12px)
$border-radius-xl   // 1rem (16px)
$border-radius-full // 9999px

// Shadows
$box-shadow-xs  // Minimal shadow
$box-shadow-sm  // Small shadow
$box-shadow     // Base shadow
$box-shadow-md  // Medium shadow
$box-shadow-lg  // Large shadow

// Transitions
$transition-fast  // 0.15s
$transition-base  // 0.2s
$transition-slow  // 0.3s
```

## Common Patterns

### Pattern 1: Hero Section with Gradient

```scss
.hero-section {
  background: linear-gradient(
    135deg,
    $indigo-700 0%,
    $indigo-600 50%,
    $emerald-600 100%
  );
  padding: 4rem 0;
  position: relative;
  overflow: hidden;

  // Pattern overlay
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  h1 {
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
```

### Pattern 2: Elevated Card

```scss
.elevated-card {
  background: white;
  border: 1px solid $gray-200;
  border-radius: $border-radius-lg;
  box-shadow: $box-shadow-sm;
  padding: 1.5rem;
  transition: $transition-base;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $box-shadow-lg;
    border-color: $gray-300;
  }
}
```

### Pattern 3: Status Badge

```scss
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  border-radius: $border-radius-full;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;

  &.status-success {
    background: linear-gradient(135deg, $emerald-100 0%, $emerald-200 100%);
    color: $emerald-700;
    border: 1px solid $emerald-300;
  }

  &.status-warning {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    color: #92400e;
    border: 1px solid #fcd34d;
  }
}
```

### Pattern 4: Focus Ring (Accessibility)

```scss
.interactive-element {
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($primary, 0.15);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba($primary, 0.2);
  }
}
```

## Gradient Generator Helper

Use this function to create consistent gradients:

```scss
@function create-gradient($color1, $color2, $angle: 135deg) {
  @return linear-gradient($angle, $color1 0%, $color2 100%);
}

// Usage:
.my-element {
  background: create-gradient($indigo-600, $indigo-500);
}
```

## Typography Migration

### Update Heading Styles

```scss
// Old
h1 {
  font-weight: 700;
}
h2 {
  font-weight: 700;
}
h3 {
  font-weight: 600;
}

// New
h1,
h2 {
  font-weight: $font-weight-bold; // 700
  letter-spacing: -0.02em;
}
h3,
h4,
h5,
h6 {
  font-weight: $font-weight-semibold; // 600
}
```

### Update Link Styles

```scss
// Old
a {
  color: #2c5f2d;

  &:hover {
    color: darken(#2c5f2d, 10%);
  }
}

// New
a {
  color: $indigo-600;
  font-weight: $font-weight-medium;
  transition: $transition-fast;

  &:hover {
    color: $indigo-700;
    text-decoration: underline;
  }
}
```

## Animation Updates

### Add Smooth Transitions

```scss
// Replace all transition timings
transition: all 0.3s ease → transition: $transition-base;
transition: all 0.2s ease → transition: $transition-fast;
```

### Add Hover Lifts

```scss
// For clickable cards
&:hover {
  transform: translateY(-4px);
  box-shadow: $box-shadow-lg;
}

// For buttons
&:hover {
  transform: translateY(-2px);
  box-shadow: $box-shadow-md;
}
```

## Checklist for Custom Components

- [ ] Replace old color hex codes with new palette
- [ ] Update border-radius from 4-6px to 8-12px
- [ ] Change solid backgrounds to gradients (where appropriate)
- [ ] Update box-shadows to new shadow scale
- [ ] Add hover animations (translateY)
- [ ] Update transitions to use variables
- [ ] Replace hardcoded values with SCSS variables
- [ ] Update focus states with indigo color
- [ ] Check contrast ratios (use browser DevTools)
- [ ] Test on light and dark backgrounds
- [ ] Verify mobile responsiveness
- [ ] Test keyboard navigation

## Testing Your Migrated Components

1. **Visual Check**: Does it match the new design?
2. **Hover States**: Do elements lift smoothly?
3. **Focus States**: Are focus rings visible with indigo color?
4. **Colors**: Are all colors from the new palette?
5. **Spacing**: Is padding/margin consistent with 8px grid?
6. **Typography**: Are font weights correct?
7. **Shadows**: Are shadows using the new scale?
8. **Border Radius**: Are corners properly rounded (8-12px)?
9. **Gradients**: Are gradients smooth and appealing?
10. **Responsive**: Does it work on mobile/tablet?

## Common Mistakes to Avoid

❌ **Don't**: Use the old yellow (#ffc107) as primary color
✅ **Do**: Use amber (#f59e0b) only for warnings

❌ **Don't**: Keep underline tabs
✅ **Do**: Use pill-style tabs with rounded borders

❌ **Don't**: Use flat, solid backgrounds everywhere
✅ **Do**: Add subtle gradients for depth

❌ **Don't**: Forget hover animations
✅ **Do**: Add translateY(-2px) or (-4px) on hover

❌ **Don't**: Use thin borders (1px)
✅ **Do**: Use 2px borders for better definition

❌ **Don't**: Hardcode color values
✅ **Do**: Use SCSS variables ($primary, $secondary, etc.)

## Need Help?

1. Check `DESIGN_SYSTEM.md` for complete specs
2. Look at `COLOR_REFERENCE.md` for color usage
3. Review existing components in `src/styles/components/`
4. Check page examples in `src/styles/pages/`
5. All variables are in `src/styles/abstracts/_variables.scss`

---

**Migration Version**: 1.0.0
**From**: Green/Yellow theme
**To**: Indigo/Emerald theme
