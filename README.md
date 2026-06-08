# 📖 Editorial Academic Portfolio (Vol. 1) | Odysseas Gazelis

Welcome to the official repository of my personal portfolio, styled as a premium physical magazine.

🔗 **Live Website:** [odygaz.github.io](https://odygaz.github.io/)

---

## 🎨 The Concept: "Portfolio Vol. 1"
Unlike standard bootstrap-based personal websites, this portfolio is built with an **editorial/magazine layout** in mind.
Emphasizing clean grids, elegant serif typography (`Playfair Display` & `Inter`), natural paper-textured backgrounds, 
and asymmetrical spacing, it replicates the feel of a printed science and arts publication.

---

## 🚀 Key Features & Pages

- **Interactive Magazine Cover (`index.html`)**
  - Features a clean, physical cover style with subtle animations.
  - A dynamic floating bubble interaction that serves as a gamified menu.
- **Curriculum Vitae (`pages/cv.html`)**
  - Complete academic background, publications list, and software skills.
  - Interactive filterable categories (e.g., conferences, grants).
  - Embedded image-modal triggers for certifications and credentials.
- **Publications & Gamified Papers (`pages/publications.html`)**
  - Comprehensive list of peer-reviewed journal articles.
  - An interactive **"Hidden Object" bubble game** that dynamically highlights and links to articles on click without triggering browser popup-blockers.
- **Teaching & Visual Physics (`pages/teaching.html`)**
  - Academic teaching history.
  - Embedded video simulations (AniPhys animations).
- **Portfolio & Art (`pages/portfolio.html`)**
  - **Mechanical Automata:** Showcases physical kinetic sculptures in an elegant dual-photo grid.
  - **Fine Art & Drawings:** A clean museum-catalog grid of simple sketches.
  - **Scientific Posters:** High-resolution PNG layouts that open directly in a new tab for zoomable, crystal-clear readability.
- **Digital Bookshelf (`pages/library.html`)**
  - A curated list of reference textbooks.
  - Uses smart CSS grids with immediate fallback cover image handling (`onerror` fallback).

---

## 🛠️ Tech Stack & Architecture

- **Languages:** HTML5, CSS3, JavaScript (ES6+).
- **Architecture:** Zero-dependency, vanilla frontend for extremely lightweight assets and sub-second load times.
- **Hosting:** Deployable directly via GitHub Pages.

---

## 📂 Repository Structure

```text
├── assets/
│   ├── css/
│   │   └── style.css          # Main editorial styling (CV, Grid, Pages)
│   ├── documents/
│   │   └── cv-odisea-gazeli.pdf
│   ├── images/
│   │   ├── books/             # Textbook thumbnails
│   │   ├── posters/           # High-resolution scientific poster PNGs
│   │   ├── drawings/          # Fine art images
│   │   ├── automata/          # Mechanical creation images
│   │   ├── avatar.png
|   |   ├── ...
│   │   └── homepage-cover.png
│   └── js/
│       └── main.js            # Interactive bubble game & CV logic
├── pages/
│   ├── cv.html
│   ├── library.html
│   ├── portfolio.html
│   ├── publications.html
│   └── teaching.html
└── index.html                 # Interactive cover page
```
