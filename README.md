# DevSphereOS
-------------

### DevSphereOS is not just another UI project — it's built with a system-first mindset. In this website, users will find about me. I putted in this website about my Dashboard, Blogs, Projects.

-----

### Goals for DevSphereOS :-
1. Build a scalable frontend architecture
2. Showcase industry-level UI/UX patterns
3. Implement performance-first rendering strategies
4. Maintain clean and modular code structure
5. Prepare for real-world production environments

------

### Tech Stack :-
1. React + TypeScript
2. Tailwind CSS
3. Context API (for global state like theme)
4. React Router (for navigation)
5. Component-driven architecture
6. MUI Icons

----------------------------------

## 1. Navbar System — Architecture & Implementation 
--------

* Seamless navigation
* Responsive adaptability for Mobiles, Tabs & Desktops
* Consistent branding
* Optimized rendering performance
* Two files for better Navbar UI interfaces - DeskNavbar & MobileNavbar

### * Navbar UI for Desktop -> [ Title  --  Links (Dashboard, Projects, Blog, Analytics)  --  Theme toggle icons (Dark & Light)  -- Profile icon ]

### * Navbar UI for Mobile -> [ Title  --  Menu bar & Close icon with their Links  --  Theme toggle icons (Dark & Light)  -- Profile icon ]

------------------------------------

## 2. ProfileBoard UI component — 
--------

The Profile Board is a reusable, responsive modal component designed to showcase personal or professional information in a clean, modern UI. It is centered on the screen across all devices (desktop, tablet, mobile) and follows a production-grade modal interaction pattern. In this UI, you get about my information like Short para, Social links and View Portfolio button.

### Features :-
* Centered Modal Layout
* Click outside & Cross icon the card → closes modal
* Glassmorphism-inspired backdrop (blur + opacity)
* Animated Border Glow
* Optional ESC key support
* Social Links Integration
* Supports icon-based links (GitHub, Reddit, Dev.to, etc.)
* “View Portfolio” button for navigation or redirection