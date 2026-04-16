# Zentry

A cinematic React landing page inspired by the Zentry visual style, built with layered video, scroll-driven motion, geometric layouts, and bold game-world presentation.

## Overview

This project is a front-end showcase built with Vite, React, GSAP, and Tailwind CSS. It focuses on immersive storytelling through motion, textured dark surfaces, and strong typography.

Recent UI refinements include:

- A redesigned footer that better matches the site theme
- Improved "coming soon" and "more coming soon" color treatments
- A refined floating navbar style on scroll
- Updated browser branding with a proper favicon and page title

## Tech Stack

- React 18
- Vite 5
- GSAP
- Tailwind CSS
- React Icons
- React Use

## Local Development

### Prerequisites

- Node.js
- npm

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    About.jsx
    Contact.jsx
    Features.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Story.jsx
  App.jsx
  index.css
  main.jsx
public/
  audio/
  fonts/
  img/
  videos/
```

## Notes

- This project uses local media assets from `public/` for video-rich sections and branding.
- The favicon is sourced from `public/img/logo.png`.
- The browser title is set to `Zentry | The Metagame Layer`.

## Credits

The visual direction is inspired by [Zentry](https://zentry.com/). This repo is for learning and front-end practice.
