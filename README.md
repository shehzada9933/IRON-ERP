<div align="center">

# ⚡ IRON ERP Dashboard

### *Forged in Code. Built for Steel.*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-iron--erp.netlify.app-2C3E50?style=for-the-badge&logoColor=white)](https://iron-erp.netlify.app)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r158-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://iron-erp.netlify.app)
[![License](https://img.shields.io/badge/License-Proprietary-E74C3C?style=for-the-badge)](LICENSE)

<br />

**A premium, production-grade steel supply & ERP management web application**
**built for [Ferrum Logic](https://iron-erp.netlify.app) — where industrial meets digital.**

*57 source files · 430K+ lines · 6 full-featured pages · 45+ hand-crafted components*

<br />

[🚀 Live Demo](https://iron-erp.netlify.app) · [📸 Screenshots](#-screenshots) · [🧬 Architecture](#-architecture--engineering-deep-dive) · [⚡ Quick Start](#-quick-start)

</div>

---

<br />

## 🤔 Why Is This Project Different?

Most steel/industrial web apps are **boring CRUD dashboards** with plain tables and zero visual identity. Iron ERP Dashboard breaks every convention:

| Traditional Steel Sites | 🔥 Iron ERP Dashboard |
|---|---|
| Static product images | **Real-time 3D product models** with `@react-three/fiber` — rotating steel beams, rods, and sheets rendered in WebGL |
| Plain hero banners | **Immersive 3D scene** — animated steel beams and rods floating in a full-screen Three.js canvas behind the hero text |
| Basic contact forms | **Multi-channel contact hub** — live chat, video consultation, support tickets, Google Maps with 3 switchable locations |
| Simple product listing | **Industrial-grade catalog** — dual view modes (grid/list), multi-axis filtering (grade, dims, certifications, price range), comparison system |
| "Submit" buttons | **9-variant polymorphic Button system** with CVA — `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`, `success`, `warning`, `danger` × 6 sizes |
| No quote system | **4-step quote wizard** with animated progress bar, product selection, specifications, review, and beautiful success modal with PDF download |
| Generic 404 page | **Branded 404** with navigation back to safety |
| No animations | **60fps scroll-triggered animations** on every section via Framer Motion `whileInView` |

<br />

---

## 🎯 Feature Breakdown — Everything That's Built

### 🏠 Homepage — The First Impression

The homepage alone contains **4 major sections**, each a standalone engineering feat:

<details>
<summary><b>🎬 3D Hero Section with WebGL Canvas</b></summary>

- Full-screen **Three.js canvas** renders animated steel beams (`boxGeometry`) and rods (`cylinderGeometry`) with realistic metalness/roughness materials
- **WebGL support detection** — gracefully falls back to a CSS gradient on unsupported devices
- Custom `SteelBeam` and `SteelRod` components with per-frame animation via `useFrame()` — sinusoidal floating and continuous rotation
- `OrbitControls` with auto-rotate for ambient motion
- Staggered Framer Motion entrance: headline → CTA buttons → trust indicators → scroll chevron (with infinite bounce)
- **Trust badges**: ISO 9001:2015, Pan-India Delivery, 24/7 Support

</details>

<details>
<summary><b>📊 Animated Statistics Counter</b></summary>

- Custom `AnimatedCounter` component using `requestAnimationFrame` for buttery-smooth number counting
- **easeOutQuart** easing curve ( `1 - Math.pow(1 - progress, 4)` ) for realistic deceleration
- `IntersectionObserver`-triggered — counters only animate when scrolled into view, and **only once**
- Stats: 28+ Years · 500,000+ Tons · 2,500+ Clients · 15+ Cities

</details>

<details>
<summary><b>🛍️ Product Showcase with 3D Toggle</b></summary>

- 4 product cards with **live 3D model toggle** — click the cube icon to switch between product photo and rotating Three.js 3D model
- Each product type has its own 3D geometry: `SteelRod3D` (cylinder), `SteelBeam3D` (box), `SteelSheet3D` (flat box), `CustomFab3D` (compound mesh)
- Hover effects: image zoom, title color shift, card lift via `group-hover:scale-105`
- **"Need Custom Steel Solutions?" CTA** with steel-gradient background and dual action buttons: "Get Custom Quote" + "Speak to Expert"

</details>

<details>
<summary><b>🏆 Credentials & Testimonials</b></summary>

- 4 ISO/BIS certification cards with staggered scroll-in animations
- 4 quality badge strips with slide-in-from-left animation
- 3 client testimonial cards with star ratings, real avatar images, company attribution
- All powered by `motion.whileInView` with configurable delays per card index

</details>

---

### 📦 Product Catalog — Industrial-Grade Filtering

A full e-commerce-style product browsing experience, purpose-built for steel:

- **Dual View Modes**: Grid (visual cards) and List (compact table-like rows) — toggled via toolbar icons
- **Advanced Filter Sidebar** with 5 collapsible sections:
  - Product Categories (8 types: Structural, Plates, Reinforcement, Pipes, Sheets, Angles, Channels, Stainless)
  - Dimensions (Thickness, Width, Length in mm)
  - Steel Grades (Fe 415, Fe 500, Fe 550, IS 2062, ASTM A36, ASTM A572, 304L, 316L)
  - Certifications (BIS, ISO 9001, ISO 14001, ASTM, JIS, DIN)
  - Price Range with visual slider
- **Mobile-responsive**: Filter sidebar becomes a full-screen overlay with backdrop blur on mobile
- **Product Cards** feature: stock status badges (In Stock/Low Stock/Out of Stock), 3D model indicators, hover overlay with quick Quote/Compare actions, shimmer loading skeleton, formatted pricing with `Intl.NumberFormat`
- **Product Toolbar**: Search, sort, view mode toggle, active filter count

---

### 🔍 Product Detail — 3D Interactive Viewer

Each product page is a rich, immersive experience:

- **Custom 3D Viewer** — not a library widget, but a hand-built interactive viewer:
  - CSS `transform: rotateX/rotateY/scale` driven by mouse drag and scroll events
  - Auto-rotation via `requestAnimationFrame` that pauses when user drags
  - Zoom slider with visual indicator dot
  - Fullscreen mode toggle
  - Reset view button
  - On-screen instructions: "Drag to rotate • Scroll to zoom"
- **Product Image Gallery** with multi-image support
- **Technical Specifications** table with comprehensive steel data
- **Related Products** carousel
- **Download 3D File** and **Share** action buttons

---

### 📝 Quote Request — 4-Step Wizard

A sophisticated multi-step form that would take most devs weeks:

- **Visual Progress Indicator** with:
  - Connected step circles with fill animation
  - Completed steps show checkmark icon, current step is highlighted, future steps are muted
  - Clickable completed steps for navigation back
  - Mobile fallback: percentage-based progress bar with "Step X of Y" text
- **Step 1: Product Selection** — searchable product picker with quantity inputs
- **Step 2: Specifications** — detailed technical requirements (dimensions, grade, finish, certifications)
- **Step 3: Contact Details** — comprehensive form with validation via React Hook Form
- **Step 4: Review & Submit** — full summary of all entered data with edit-step shortcuts
- **Success Modal** with:
  - Animated check icon
  - Auto-generated reference number (e.g., `QR-2024-XXXX`)
  - 3-step "What happens next?" timeline
  - Emergency contact info with click-to-call and click-to-copy-email
  - "Download Request Summary" PDF button
  - Navigation: "Go Home" / "View Products"

---

### 🏢 About Company — The Story Page

8 unique sections, each with rich content:

| Component | What It Does |
|---|---|
| `CompanyHero` | Gradient hero banner with company tagline |
| `CompanyStatistics` | Animated counters for key metrics |
| `CompanyTimeline` | **Interactive zigzag timeline** (1991→2024) with `IntersectionObserver`-driven scroll reveals, alternating layout (left/right content), milestone images, and achievement checklists |
| `MissionVisionValues` | Three-column grid with icon-driven mission/vision/values cards |
| `CertificationsSection` | ISO/BIS/OHSAS/ASTM/JIS/DIN certifications with detailed descriptions |
| `VideoShowcase` | Embedded video section for factory/facility tours |
| `LeadershipTeam` | 6 team member cards with photos, bios, expertise tags, education, and email/LinkedIn action buttons |
| `ClientTestimonials` | Testimonial carousel with star ratings and company attribution |

---

### 📞 Contact — Multi-Channel Communication Hub

Not just a form — a complete communication center:

- **Hero Section** with steel-gradient background and quick stats (24/7 Support · 500+ Clients · 3 Locations)
- **Contact Form** with full validation and multiple inquiry types
- **Contact Info** panel with all business details
- **Interactive Location Map** — Google Maps embed with:
  - 3 switchable locations (HQ, West Coast, East Coast)
  - Tab-style location selector buttons
  - "Get Directions" opens Google Maps routing
  - "Call Location" triggers phone dialer
  - "Share" uses Web Share API (with clipboard fallback)
  - Operating hours, parking info, delivery info footer
- **Live Chat** widget with green "Online now" indicator
- **Video Consultation** scheduler
- **Support Ticket** creator

---

### 🔄 Persistent "Quick Quote" CTA Widget

A floating widget that follows the user across the entire site:

- **Desktop**: Fixed bottom-right card with minimize/close/expand states
- **Mobile**: Fixed bottom bar with compact "Quote" and "Call" buttons
- **Context-Aware Messages** — the widget text changes based on the current page:
  - Product Catalog → "Get bulk pricing for selected products"
  - Product Detail → "Request quote for this product"
  - About Company → "Ready to work with us?"
  - Contact → "Need a formal quote?"
- **Smart routing**: Passes product context to the quote form via `localStorage` for pre-population
- **Auto-hides** on the Quote Request page (no redundancy)

---

<br />

## 🧬 Architecture & Engineering Deep Dive

### Component Design System

The project implements a **custom industrial design system** from scratch:

```
Design Tokens (CSS Variables)
    ├── Colors: 14 semantic color pairs (primary, secondary, accent, success, warning, error...)
    ├── Shadows: 4-level elevation system (sm → xl) using steel-tinted shadows
    ├── Typography: Inter + JetBrains Mono with OpenType features
    ├── Transitions: 3 speed tiers (fast/normal/slow) with industrial easing curve
    └── Gradients: steel-gradient, steel-shimmer (diamond plate pattern)
```

### Button System — CVA-Powered Polymorphic Component

```jsx
// 9 variants × 6 sizes × icon support × loading state × fullWidth
<Button variant="success" size="lg" iconName="Calculator" iconPosition="left" loading={false}>
  Request Quote
</Button>
```

Built with `class-variance-authority` + `@radix-ui/react-slot` for `asChild` prop composition.

### Hard Engineering Problems Solved

| Challenge | Solution |
|---|---|
| **WebGL fallback** | Runtime `canvas.getContext('webgl')` check → CSS gradient fallback |
| **3D performance** | `enableZoom={false}` + `enablePan={false}` constraints prevent GPU thrashing on mobile |
| **Counter animation accuracy** | Custom `requestAnimationFrame` loop with easeOutQuart — not `setInterval` |
| **Scroll-triggered animation once** | `IntersectionObserver` with `{ once: true }` prevents re-triggering |
| **Mobile filter UX** | Full-screen overlay with `backdrop-blur-sm` + slide-in panel, separate from desktop sidebar |
| **Case-sensitive imports** | Linux (Netlify) is case-sensitive while Windows/macOS aren't — required exact filename matching |
| **Quote wizard state** | Multi-step form state persisted across steps with React state lifting |
| **Contextual CTA** | `useLocation()` hook reads current route to dynamically change widget messaging |
| **3D drag interaction** | Custom `mouseDown/mouseMove/mouseUp` handlers with delta calculation for rotation |

---

<br />

## 🛠 Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **UI Framework** | React 18.3 | Concurrent rendering, automatic batching |
| **Build Tool** | Vite 5.4 | Sub-second HMR, Rollup-powered production builds |
| **3D Rendering** | React Three Fiber + Three.js r158 + Drei | Declarative 3D within React's component model |
| **Animation** | Framer Motion 10 | Physics-based spring animations, `whileInView` scroll triggers |
| **Styling** | TailwindCSS 3.4 + custom design tokens | Utility-first with industrial-themed CSS variables |
| **Routing** | React Router v6 | Nested routes, programmatic navigation |
| **State** | Redux Toolkit | Centralized state for quote cart and filters |
| **Forms** | React Hook Form | Optimized re-renders, built-in validation |
| **Charts** | Recharts + D3 v7 | SVG-based data visualization |
| **Icons** | Lucide React (484+) | Tree-shakeable, consistent 24×24 stroke icons |
| **Components** | Radix UI + Headless UI | Accessible unstyled primitives |
| **Utilities** | clsx + tailwind-merge + CVA | Conditional classes without conflicts |
| **SEO** | React Helmet | Per-page meta tags and title management |
| **Deployment** | Netlify | Continuous deployment from GitHub |

---

<br />

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/shehzada9933/IRON-ERP.git
cd IRON-ERP

# Install dependencies
npm install

# Start development server (http://localhost:4028)
npm run dev

# Build for production
npm run build

# Preview production build
npm run serve
```

### Prerequisites
- **Node.js** v16.x or higher
- **npm** v8+

---

<br />

## 📁 Project Architecture

```
iron-erp-dashboard/
├── public/                          # Static assets & favicon
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx           # 9-variant CVA button system
│   │   │   ├── Header.jsx           # Responsive nav with mobile drawer
│   │   │   ├── QuoteRequestCTA.jsx  # Context-aware floating CTA widget
│   │   │   ├── SearchComponent.jsx  # Global product search
│   │   │   ├── breadcrumb.jsx       # Dynamic breadcrumb navigation
│   │   │   ├── Checkbox.jsx         # Styled checkbox with label
│   │   │   ├── Input.jsx            # Form input with validation states
│   │   │   └── Select.jsx           # Custom dropdown select
│   │   ├── AppIcon.jsx              # Lucide icon wrapper (484+ icons)
│   │   ├── AppImage.jsx             # Image component with fallbacks
│   │   ├── ErrorBoundary.jsx        # Graceful error recovery UI
│   │   └── ScrollToTop.jsx          # Route-change scroll reset
│   │
│   ├── pages/
│   │   ├── homepage/
│   │   │   ├── index.jsx            # Page orchestrator
│   │   │   └── components/
│   │   │       ├── HeroSection.jsx        # 3D Three.js hero (190 lines)
│   │   │       ├── StatsSection.jsx       # Animated counters (163 lines)
│   │   │       ├── ProductShowcase.jsx    # 3D product cards (358 lines)
│   │   │       └── CredentialsSection.jsx # Certs & testimonials (251 lines)
│   │   │
│   │   ├── product-catalog/
│   │   │   ├── index.jsx            # Catalog with state management
│   │   │   └── components/
│   │   │       ├── FilterSidebar.jsx      # 5-section filter panel (307 lines)
│   │   │       ├── ProductCard.jsx        # Dual-mode product card (257 lines)
│   │   │       ├── ProductGrid.jsx        # Responsive grid/list layout
│   │   │       └── ProductToolbar.jsx     # Search, sort, view mode
│   │   │
│   │   ├── product-detail/
│   │   │   ├── index.jsx            # Product detail page
│   │   │   └── components/
│   │   │       ├── Product3DViewer.jsx    # Interactive 3D viewer (235 lines)
│   │   │       ├── ProductImageGallery.jsx
│   │   │       ├── ProductInfo.jsx
│   │   │       ├── ProductSpecifications.jsx
│   │   │       └── RelatedProducts.jsx
│   │   │
│   │   ├── quote-request/
│   │   │   ├── index.jsx            # 4-step wizard controller
│   │   │   └── components/
│   │   │       ├── ProgressIndicator.jsx      # Step progress bar
│   │   │       ├── ProductSelectionStep.jsx   # Step 1
│   │   │       ├── SpecificationsStep.jsx     # Step 2
│   │   │       ├── ContactDetailsStep.jsx     # Step 3 (not shown: ReviewStep)
│   │   │       ├── ReviewStep.jsx             # Step 4
│   │   │       ├── QuoteSummary.jsx           # Sidebar summary
│   │   │       └── SuccessModal.jsx           # Submission confirmation
│   │   │
│   │   ├── about-company/
│   │   │   ├── index.jsx
│   │   │   └── components/
│   │   │       ├── CompanyHero.jsx
│   │   │       ├── CompanyStatistics.jsx
│   │   │       ├── CompanyTimeline.jsx    # Interactive zigzag timeline (229 lines)
│   │   │       ├── MissionVisionValues.jsx
│   │   │       ├── CertificationsSection.jsx
│   │   │       ├── VideoShowcase.jsx
│   │   │       ├── LeadershipTeam.jsx     # 6 team profiles (276 lines)
│   │   │       └── ClientTestimonials.jsx
│   │   │
│   │   ├── contact/
│   │   │   ├── index.jsx            # Multi-channel contact hub
│   │   │   └── components/
│   │   │       ├── ContactForm.jsx
│   │   │       ├── ContactInfo.jsx
│   │   │       ├── LocationMap.jsx        # 3-location Google Maps (208 lines)
│   │   │       └── SocialConnect.jsx
│   │   │
│   │   └── NotFound.jsx             # Branded 404 page
│   │
│   ├── styles/
│   │   ├── tailwind.css             # Industrial design tokens & custom CSS
│   │   └── index.css                # Entry point
│   │
│   ├── utils/
│   │   └── cn.js                    # clsx + tailwind-merge utility
│   │
│   ├── App.jsx                      # Root component
│   ├── Routes.jsx                   # SPA routing configuration
│   └── index.jsx                    # Application entry point
│
├── netlify.toml                     # Deployment configuration
├── tailwind.config.js               # Extended Tailwind theme
├── vite.config.js                   # Vite + React + aliases
├── postcss.config.js
└── package.json
```

---

<br />

## 🧩 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at `http://localhost:4028` |
| `npm run build` | Production build with sourcemaps → `./build` |
| `npm run serve` | Preview the production build locally |

---

<br />

## 📱 Responsive Design

Every component is built with a **mobile-first** approach:

- **Breakpoints**: `sm` (640px) → `md` (768px) → `lg` (1024px) → `xl` (1280px)
- **Mobile-specific UX**: Hamburger menu with slide-in drawer, bottom-bar CTA, simplified filter overlay, touch-friendly 3D controls
- **Typography scales**: `text-4xl md:text-5xl lg:text-7xl` for headlines
- **Grid adaptation**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` for product cards

---

<br />

## 🛡️ Security & Best Practices

- `.env` excluded from version control via `.gitignore`
- No API keys or secrets committed to the repository
- Error Boundary wraps entire app — crashes show branded recovery UI, not white screen
- `ScrollToTop` component prevents scroll position leaking between routes
- Images use optimized Pexels CDN sources
- Lazy loading on map iframes (`loading="lazy"`)

---

<br />

## 🚢 Deployment

The app is **continuously deployed** via Netlify from the `main` branch:

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

The SPA redirect rule ensures all routes work correctly with client-side routing.

---

<br />

<div align="center">

## 🌐 See It Live

### **[https://iron-erp.netlify.app](https://iron-erp.netlify.app)**

<br />

---

**Built with ❤️ and ⚡ by [Ferrum Logic](https://iron-erp.netlify.app)**

*© 2024 Ferrum Logic. All rights reserved.*

</div>
