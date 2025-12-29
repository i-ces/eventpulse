# EventPulse - Event Discovery & Tracking Platform

A modern, responsive web UI for discovering and tracking events. This is the Stage 1 static UI implementation.

## 📁 Project Structure

```bash
eventpulse/
├── index.html          # Main events listing page
├── event.html          # Event details page
├── css/
│   ├── base.css        # CSS variables, reset, typography
│   ├── layout.css      # Grid system, containers, page layout
│   ├── components.css  # Reusable UI components
│   └── pages.css       # Page-specific styles
└── assets/
    ├── images/         # Event banner images
    └── icons/          # UI icons
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **CSS Variables**: Consistent theming with custom properties
- **Semantic HTML**: Proper use of `<article>`, `<figure>`, `<nav>`, etc.
- **Reusable Components**: Buttons, badges, cards, forms
- **Accessibility**: Focus states, color contrast, ARIA labels

## 📐 Breakpoints

| Device  | Width      | Grid Columns |
|---------|------------|--------------|
| Mobile  | < 768px    | 1 column     |
| Tablet  | 768-1024px | 2 columns    |
| Desktop | > 1024px   | 3 columns    |
| Large   | > 1440px   | 4 columns    |

## 🎯 Pages

### index.html (Events Listing)

- Header with logo, navigation, and auth buttons
- Sidebar with category, date, and location filters
- Events grid with 8 sample event cards
- Empty state container (commented, for when no events)
- Footer with links

### event.html (Event Details)

- Hero banner image
- Event meta information (date, location, organizer)
- Event description
- Action buttons (Get Tickets, Save Event)

## 🧩 CSS Components

### Buttons

- `.btn` - Base button
- `.btn-primary` - Primary action
- `.btn-secondary` - Secondary action
- `.btn-outline` - Outlined variant
- `.btn-sm`, `.btn-lg` - Size variants

### Badges

- `.badge` - Base badge
- `.badge-music`, `.badge-tech`, `.badge-food`, etc. - Category variants

### Event Cards

- `.event-card` - Card container
- `.event-card-image` - Image wrapper
- `.event-card-content` - Content area
- `.event-card-title` - Title with line clamping
- `.event-card-meta` - Date and location info
- `.event-card-actions` - Action buttons

### Form Elements

- `.form-input` - Text inputs
- `.form-select` - Dropdowns
- `.checkbox-label` - Checkbox with label

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in a browser
3. No build process or dependencies required!

## 📝 Notes

- This is a **static HTML/CSS only** implementation
- No JavaScript, frameworks, or backend
- Images use Unsplash placeholder URLs
- SVG icons are inline for simplicity

## 📄 License

© 2025 EventPulse. All rights reserved.
