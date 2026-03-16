# Shield Peak Roofing - Implementation Kickstart

## Project Overview

A premium, minimal, high-conversion landing page for **Shield Peak Roofing** - a fictional roofing company brand. Frontend-only prototype with simulated form submission.

---

## Design System

### Color Palette (3 Colors Only)

| Token | Hex | Usage |
|-------|-----|-------|
| Navy (Primary) | `#1e3a8a` | Headers, text, primary backgrounds |
| Orange (Accent) | `#f97316` | CTA buttons, highlights, urgency elements |
| Slate (Neutral) | `#f1f5f9` | Backgrounds, cards, subtle contrast |

### Typography

- **Font Family**: Geist Sans (via `next/font/google`)
- **Headings**: Bold, tight tracking
- **Body**: Regular weight, relaxed line-height

### Design Principles

- Premium & minimal aesthetic
- Generous whitespace
- Subtle micro-interactions (hover states, transitions)
- Mobile-first responsive design

---

## Project Structure

```
/app
  layout.tsx          # Root layout with fonts, metadata, smooth scroll
  page.tsx            # Main page composing all sections
  globals.css         # Design tokens, custom styles

/components
  /sections
    hero.tsx          # Hero with headline + CTA
    social-proof.tsx  # Before/after slider + stats
    trust-bar.tsx     # Partner/certification logos marquee
    features.tsx      # Services grid with hover cards
    testimonials.tsx  # Customer testimonial carousel
    faq.tsx           # Accordion FAQ section
    footer.tsx        # Footer with contact info
  /ui
    (shadcn components)
  header.tsx          # Sticky navigation
  contact-modal.tsx   # Modal form (single CTA destination)
  before-after.tsx    # Draggable comparison slider
```

---

## Section Breakdown

### 1. Header (`components/header.tsx`)
- Sticky navbar with backdrop blur
- Logo (text-based: "Shield Peak")
- Navigation links (smooth scroll anchors)
- Single CTA button: "Get Free Inspection" → Opens modal
- Mobile hamburger menu

**Max Lines**: ~150

---

### 2. Hero Section (`components/sections/hero.tsx`)
- Split layout: Text left, image right (desktop)
- Stacked on mobile
- Headline: "Your Roof Protected. Your Insurance Handled."
- Subheadline with value proposition
- Primary CTA button → Opens modal
- Trust indicators (years in business, projects completed)

**Max Lines**: ~120

---

### 3. Social Proof / Before-After (`components/sections/social-proof.tsx`)
- Section title: "See The Transformation"
- Before/After comparison slider component
- Stats row: "500+ Roofs Restored" | "100% Claim Success" | "24hr Response"

**Before-After Component** (`components/before-after.tsx`):
- Draggable handle using mouse/touch events
- Two overlapping images with clip-path
- Smooth drag interaction

**Max Lines**: ~180 (split across 2 files)

---

### 4. Trust Bar (`components/sections/trust-bar.tsx`)
- Auto-scrolling marquee of certification badges
- Logos: GAF, BBB, Owens Corning, etc. (placeholder boxes)
- Subtle infinite scroll animation
- Pause on hover

**Max Lines**: ~100

---

### 5. Features/Services (`components/sections/features.tsx`)
- Section title: "Complete Roofing Solutions"
- 3-column grid (responsive)
- Icon cards with:
  - Lucide icon
  - Service title
  - Brief description
- Hover effect: subtle lift + shadow

**Services**:
1. Storm Damage Repair
2. Insurance Claims
3. Full Roof Replacement
4. Emergency Tarping
5. Free Inspections
6. Financing Options

**Max Lines**: ~150

---

### 6. Testimonials (`components/sections/testimonials.tsx`)
- Section title: "What Homeowners Say"
- Horizontal carousel/slider
- Testimonial cards with:
  - Quote text
  - Customer name
  - Location
  - Star rating
- Navigation dots or arrows

**Max Lines**: ~150

---

### 7. FAQ (`components/sections/faq.tsx`)
- Section title: "Common Questions"
- shadcn/ui Accordion component
- 5-6 common roofing/insurance questions
- Smooth expand/collapse animations

**FAQ Topics**:
1. How does the insurance claim process work?
2. Do you offer free inspections?
3. What types of roofing materials do you use?
4. How long does a typical roof replacement take?
5. Do you offer financing options?

**Max Lines**: ~120

---

### 8. Footer (`components/sections/footer.tsx`)
- Company info & contact
- Quick links
- Service areas (placeholder)
- Social media icons
- Copyright

**Max Lines**: ~100

---

### 9. Contact Modal (`components/contact-modal.tsx`)
- shadcn/ui Dialog component
- Form fields:
  - Full Name (required)
  - Phone Number (required, tel type)
  - Email (required)
  - Address (optional)
  - Message/Notes (optional)
- Submit button with loading state
- Success state animation (form fades out, success card fades in)
- Frontend-only simulation (no backend)

**Max Lines**: ~200

---

## Technical Implementation

### Smooth Scrolling
```css
/* globals.css */
html {
  scroll-behavior: smooth;
}
```

### Modal State Management
- React Context or simple prop drilling
- `useModal` hook or state in page.tsx
- Pass `openModal` function to Header and Hero CTAs

### Animations
- CSS transitions for hover effects
- Framer Motion (optional) for modal/success animations
- CSS keyframes for marquee

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## File Size Guidelines

| File | Target Lines |
|------|--------------|
| page.tsx | ~50 |
| layout.tsx | ~60 |
| header.tsx | ~150 |
| hero.tsx | ~120 |
| social-proof.tsx | ~100 |
| before-after.tsx | ~120 |
| trust-bar.tsx | ~100 |
| features.tsx | ~150 |
| testimonials.tsx | ~150 |
| faq.tsx | ~120 |
| footer.tsx | ~100 |
| contact-modal.tsx | ~200 |
| globals.css | ~100 |

**Total**: ~1,500 lines across 13 files

---

## Implementation Order

1. **Setup**: Update layout.tsx with fonts, metadata, smooth scroll
2. **Design Tokens**: Update globals.css with color variables
3. **Header**: Sticky nav with CTA
4. **Contact Modal**: Single CTA destination
5. **Hero**: Main headline and CTA
6. **Features**: Services grid
7. **Social Proof**: Before/after + stats
8. **Trust Bar**: Logo marquee
9. **Testimonials**: Customer carousel
10. **FAQ**: Accordion section
11. **Footer**: Contact and links
12. **Polish**: Animations, responsive tweaks, accessibility

---

## Placeholder Assets

All images will use placeholder styling:
- Gray background with dashed border
- Icon + text label indicating content
- Consistent aspect ratios

---

## Accessibility Checklist

- [ ] Semantic HTML structure
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation for modal
- [ ] Focus management when modal opens/closes
- [ ] Alt text placeholders for images
- [ ] Color contrast compliance
- [ ] Skip to content link

---

## Notes

- **No backend required** - Form submission simulated with state
- **Single CTA pattern** - All "Get Free Inspection" buttons open the same modal
- **Modular architecture** - Each section is a standalone component
- **Performance** - Minimal dependencies, optimized images (when real assets added)

---

## Ready to Proceed

Upon approval, implementation will follow the order above, creating each component as a separate file with clean, maintainable code under the 600-line guideline.
