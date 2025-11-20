# AI-RESEARCH DESIGN SYSTEM SPECIFICATION
## Pixel-Perfect Replication Guide - Extracted from ai-generated-preview.png

---

## COLOR SYSTEM (EXACT HEX CODES)

### Primary Colors
- **Primary Blue**: `#3B82F6` (HSL: 217 91% 60%) - Main CTA buttons, links, accents
- **Primary Blue Hover**: `#2563EB` (HSL: 221 83% 53%) - Button hover states
- **Chart Blue**: `#60A5FA` (HSL: 213 94% 68%) - Data visualization, graphs

### Background Colors
- **Dark Background**: `#0F1419` (HSL: 210 27% 8%) - Hero section, dark areas
- **White Background**: `#FFFFFF` (HSL: 0 0% 100%) - Cards, main content areas
- **Light Gray Background**: `#F9FAFB` (HSL: 210 20% 98%) - Subtle backgrounds

### Text Colors
- **Text Primary Dark**: `#1F2937` (HSL: 218 25% 17%) - Headings on light backgrounds
- **Text Primary Light**: `#FFFFFF` (HSL: 0 0% 100%) - Text on dark backgrounds
- **Text Secondary**: `#6B7280` (HSL: 220 9% 46%) - Body text, descriptions
- **Text Muted**: `#9CA3AF` (HSL: 220 9% 66%) - Subtle text, timestamps

### Border & Divider Colors
- **Border Light**: `#E5E7EB` (HSL: 220 13% 91%) - Card borders, dividers
- **Border Medium**: `#D1D5DB` (HSL: 220 13% 84%) - Input borders

### Status Colors
- **Success Green**: `#10B981` (HSL: 158 64% 52%) - Verified indicators
- **Warning Orange**: `#F59E0B` (HSL: 38 92% 50%) - Preliminary findings
- **Error Red**: `#EF4444` (HSL: 0 72% 51%) - Error states

### Opacity Overlays
- **Blue Tint 10%**: `rgba(59, 130, 246, 0.1)` - Icon backgrounds
- **Black Overlay 50%**: `rgba(0, 0, 0, 0.5)` - Backdrop overlays
- **White Overlay 10%**: `rgba(255, 255, 255, 0.1)` - Subtle highlights

---

## TYPOGRAPHY SYSTEM (EXACT FONTS & SIZES)

### Font Family
- **Primary Font**: `Inter` from Google Fonts
- **Import**: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`
- **Weights Used**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Heading Scale
- **H1 (Hero Heading)**
  - Font-size: `48px` / `3rem`
  - Line-height: `56px` / `3.5rem` (1.167)
  - Font-weight: `700` (Bold)
  - Letter-spacing: `-0.02em` (tighter)
  - Color: `#FFFFFF` (on dark) or `#1F2937` (on light)

- **H2 (Section Heading)**
  - Font-size: `30px` / `1.875rem`
  - Line-height: `38px` / `2.375rem` (1.267)
  - Font-weight: `600` (Semibold)
  - Letter-spacing: `-0.01em`
  - Color: `#1F2937`

- **H3 (Card Heading)**
  - Font-size: `24px` / `1.5rem`
  - Line-height: `32px` / `2rem` (1.333)
  - Font-weight: `600` (Semibold)
  - Letter-spacing: `0`
  - Color: `#1F2937`

- **H4 (Subsection)**
  - Font-size: `18px` / `1.125rem`
  - Line-height: `28px` / `1.75rem` (1.556)
  - Font-weight: `600` (Semibold)
  - Letter-spacing: `0`
  - Color: `#1F2937`

### Body Text Scale
- **Body Large**
  - Font-size: `18px` / `1.125rem`
  - Line-height: `28px` / `1.75rem` (1.556)
  - Font-weight: `400` (Regular)
  - Color: `#6B7280`

- **Body Regular**
  - Font-size: `16px` / `1rem`
  - Line-height: `24px` / `1.5rem` (1.5)
  - Font-weight: `400` (Regular)
  - Color: `#6B7280`

- **Body Small**
  - Font-size: `14px` / `0.875rem`
  - Line-height: `20px` / `1.25rem` (1.429)
  - Font-weight: `400` (Regular)
  - Color: `#9CA3AF`

- **Caption**
  - Font-size: `12px` / `0.75rem`
  - Line-height: `16px` / `1rem` (1.333)
  - Font-weight: `400` (Regular)
  - Color: `#9CA3AF`

### Button Text
- Font-size: `16px` / `1rem`
- Line-height: `24px` / `1.5rem`
- Font-weight: `500` (Medium)
- Letter-spacing: `0`

---

## SPACING SYSTEM (EXACT PIXEL VALUES)

### Container & Layout Spacing
- **Section Padding**: `80px` top/bottom, `48px` left/right (desktop)
- **Section Padding Mobile**: `40px` top/bottom, `24px` left/right
- **Max Container Width**: `1400px`

### Card Spacing
- **Card Padding**: `24px` all sides
- **Card Padding Large**: `32px` all sides
- **Card Gap**: `24px` between cards in grid

### Element Spacing
- **Stack Spacing Tight**: `8px` between closely related elements
- **Stack Spacing Regular**: `16px` between standard elements
- **Stack Spacing Loose**: `24px` between sections within component
- **Stack Spacing Section**: `32px` between major sections

### Component Internal Spacing
- **Button Padding**: `12px` vertical, `24px` horizontal
- **Input Padding**: `10px` vertical, `14px` horizontal
- **Icon Spacing**: `12px` from adjacent text
- **Avatar Gap**: `8px` between avatar and text

---

## COMPONENT STYLING (EXACT SPECIFICATIONS)

### Primary Button (CTA)
```css
background-color: #3B82F6;
color: #FFFFFF;
border-radius: 8px;
padding: 12px 24px;
font-size: 16px;
font-weight: 500;
box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);
transition: all 0.3s ease;

/* Hover State */
background-color: #2563EB;
box-shadow: 0 6px 10px rgba(59, 130, 246, 0.3);
transform: translateY(-2px);
```

### Secondary Button (Outline)
```css
background-color: transparent;
color: #3B82F6;
border: 1px solid #3B82F6;
border-radius: 8px;
padding: 12px 24px;
font-size: 16px;
font-weight: 500;
transition: all 0.3s ease;

/* Hover State */
background-color: rgba(59, 130, 246, 0.05);
```

### Card Component
```css
background-color: #FFFFFF;
border-radius: 16px;
padding: 24px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
transition: all 0.3s ease;

/* Hover State */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
transform: translateY(-2px);
```

### Icon Circle Background
```css
width: 48px;
height: 48px;
border-radius: 50%;
background-color: rgba(59, 130, 246, 0.1);
display: flex;
align-items: center;
justify-content: center;

/* Icon Inside */
width: 24px;
height: 24px;
color: #3B82F6;
stroke-width: 2px;
```

### Input Field
```css
background-color: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 8px;
padding: 10px 14px;
font-size: 16px;
color: #1F2937;
transition: all 0.2s ease;

/* Focus State */
border-color: #3B82F6;
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
outline: none;
```

---

## VISUAL EFFECTS (EXACT CSS VALUES)

### Box Shadows
- **Card Shadow**: `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);`
- **Card Shadow Hover**: `box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);`
- **Button Shadow**: `box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);`
- **Button Shadow Hover**: `box-shadow: 0 6px 10px rgba(59, 130, 246, 0.3);`
- **Input Focus Shadow**: `box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);`

### Border Radius
- **Cards**: `16px`
- **Buttons**: `8px`
- **Input Fields**: `8px`
- **Icons**: `50%` (circular)
- **Images**: `12px`

### Transitions
- **Standard Transition**: `all 0.3s ease`
- **Quick Transition**: `all 0.2s ease`
- **Slow Transition**: `all 0.5s ease`

### Transforms
- **Hover Lift**: `transform: translateY(-2px);`
- **Active Press**: `transform: translateY(0);`

---

## NESTED VISUAL ELEMENTS SPECIFICATION

### Network Background Pattern (Hero Section)
- **Base**: Dark background `#0F1419`
- **Nodes**: Small circles (4-8px) with blue glow `#3B82F6` at 40% opacity
- **Connections**: Thin lines (1px) in `rgba(59, 130, 246, 0.2)`
- **Glow Effect**: `filter: blur(20px)` on accent elements
- **Implementation**: CSS pseudo-elements with absolute positioning

### Dashboard Preview Card (Right Side)
- **Container**: White card with exact same styling as main cards
- **Mini Charts**: Use Recharts with colors `#3B82F6` and `#60A5FA`
- **Avatar Circles**: 32px diameter, gradient backgrounds
- **Progress Bars**: 4px height, `#3B82F6` fill, `#E5E7EB` background
- **Text Hierarchy**: Small text 12px, medium 14px

### Feature Icons
- **Style**: Line-style (outline, not filled)
- **Size**: 24px × 24px
- **Stroke Width**: 2px
- **Color**: `#3B82F6`
- **Background**: Circular 48px diameter, `rgba(59, 130, 246, 0.1)`
- **Library**: Lucide React (matches perfectly)
- **Examples**: FileSearch, MessageSquare, Shield, Sparkles

---

## ASSET GENERATION STRATEGY

### 1. Icons (Lucide React)
- **Usage**: Import from `lucide-react`
- **Components**: FileSearch, MessageSquare, BarChart3, Shield, Sparkles, Search, Plus
- **Styling**: Always 24px, stroke-width 2, color primary blue

### 2. Charts (Recharts Library)
- **Colors**: Use `#3B82F6` and `#60A5FA` for bars/lines
- **Background**: Light gray `#F9FAFB`
- **Grid Lines**: `#E5E7EB` at 50% opacity
- **Tooltip**: White background, subtle shadow

### 3. Background Network Pattern
- **Implementation**: CSS-based using pseudo-elements
- **Alternative**: SVG pattern embedded inline
- **Animation**: Subtle pulse animation (optional)

### 4. Avatar Placeholders
- **Size**: 32px or 40px diameter
- **Style**: Circular, gradient backgrounds
- **Gradients**: Blue to purple (`#3B82F6` to `#8B5CF6`)
- **Fallback**: Initials in white text

---

## RESPONSIVE BREAKPOINTS

### Desktop (1280px+)
- Full two-column layout
- Maximum container width 1400px
- Section padding 80px vertical

### Tablet (768px - 1279px)
- Single column with larger cards
- Section padding 60px vertical
- Font sizes reduced by 10%

### Mobile (< 768px)
- Stacked layout
- Section padding 40px vertical
- Hero heading 36px instead of 48px
- Button full-width on small screens

---

## IMPLEMENTATION CHECKLIST

### Global CSS Updates Required
- [ ] Import Inter font from Google Fonts
- [ ] Define all color variables in HSL format
- [ ] Set base typography on html/body
- [ ] Configure heading styles (h1-h4)
- [ ] Set up button default styles
- [ ] Add shadow utilities
- [ ] Configure transition defaults

### Component Library Needs
- [ ] Primary button with exact styling
- [ ] Secondary button (outline variant)
- [ ] Card component with hover effects
- [ ] Input field with focus states
- [ ] Icon wrapper component
- [ ] Chat bubble components (user/AI)
- [ ] Research result card
- [ ] Progress indicator

### Page Structure
- [ ] Hero section with dark background
- [ ] Feature grid with icon cards
- [ ] Research chat interface
- [ ] Research library dashboard
- [ ] Settings page with toggles

---

## SUCCESS CRITERIA

✅ **Visual Match**: Side-by-side with reference shows IDENTICAL design
✅ **Color Precision**: All colors use documented hex codes exactly
✅ **Typography Match**: Inter font loaded, exact sizes and weights
✅ **Spacing Accuracy**: Margins and padding match pixel measurements
✅ **Component Fidelity**: Buttons, cards, inputs match reference styling
✅ **Effects Replication**: Shadows, borders, transitions match exactly
✅ **Responsive Behavior**: Layout adapts properly at all breakpoints

---

*This specification ensures pixel-perfect replication of the ai-generated-preview.png design reference.*
