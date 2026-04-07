🏗️ Iron ERP — Ferrum Logic
Industrial-grade steel management, built for the modern web.
Live Demo: https://iron-erp.netlify.app

💡 The Vision
Most industrial ERPs look like they were designed in 2005—clunky tables, gray buttons, and zero user experience. I built Iron ERP to prove that "heavy industry" software can be just as fast and beautiful as a high-end consumer app.

This isn't just a dashboard; it’s a full-scale management suite for Ferrum Logic, designed to handle the complex supply chain of the steel industry while keeping the UI buttery smooth.

🚀 What makes this "Production-Grade"?
💎 Interactive 3D Product Engine
Instead of static images, I integrated a Three.js (React Three Fiber) engine.

Real-time Visualization: Users can rotate and inspect steel beams, rods, and sheets in a WebGL canvas.

Performance First: It includes a smart fallback—if a user's device doesn't support WebGL, the app gracefully switches to a CSS-gradient layout so the site never "breaks."

⚙️ Industrial Design System
I didn't just use a UI library; I built a custom Polymorphic Button System using class-variance-authority.

9 Variants: Success, Warning, Danger, Ghost, and more.

Consistency: Every shadow and color pair is mapped to a custom "Steel Design Token" palette.

📑 The 4-Step Quote Wizard
One of the most complex parts of this app is the Quote Request system. It’s a multi-step form that handles:

Product Selection: Searchable picker with real-time quantity logic.

Technical Specs: Deep-level filtering for grades (Fe 500, etc.) and dimensions.

Validation: Powered by React Hook Form for zero-lag input validation.

Instant Summary: Generates a unique reference ID (e.g., QR-2024-XXXX) upon completion.

🛠️ The Tech Stack
I chose these tools specifically to handle high-data loads without sacrificing speed:

Framework: React 18 (for Concurrent Rendering)

Bundler: Vite 5 (because sub-second HMR saves lives)

3D: Three.js + React Three Fiber + Drei

Animation: Framer Motion (Scroll-triggered reveals at 60fps)

State: Redux Toolkit (Centralized cart and filter logic)

Styling: TailwindCSS + Custom Industrial Tokens

📁 How it's Organized
I followed a Feature-Based Architecture. Each major page (Catalog, Quote, About) has its own components/ folder to keep the code modular and easy to scale.

Plaintext
src/
├── components/     # Global UI (Buttons, AppIcon, ErrorBoundaries)
├── pages/
│   ├── homepage/   # WebGL Hero, Animated Counters
│   ├── product/    # Filter Sidebar, Dual-view Grid
│   └── quote/      # The 4-step wizard logic
└── utils/          # Tailwind Merge & common helpers
⚡ Quick Start
If you want to run this locally:

Install: npm install

Launch: npm run dev

Build: npm run build

Note on Deployment: This project is optimized for Linux-based environments (Netlify/Vercel). I specifically handled the case-sensitive module resolution issues to ensure the build pipeline is rock solid.

🌐 Visit the Live Site
Built with passion for Ferrum Logic. 