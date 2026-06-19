# Academic & Scientific Portfolio | Odhisea Gazeli

Welcome to the repository of my personal academic portfolio, designed as an interactive, clean, magazine-style digital showcase. This site highlights my research, teaching materials, scientific projects, and technical methodology in **Plasma Physics**, **Photonics**, and **Analytical Chemistry**.

🔗 **Live Website:** [https://odygaz.github.io/](https://odygaz.github.io/)

---

## 📖 Table of Contents
- [Project Overview](#project-overview)
- [Directory Structure](#directory-structure)
- [Key Sections & Pages](#key-sections--pages)
- [Technologies Used](#technologies-used)
- [Deployment & Local Development](#deployment--local-development)

---

## 🔍 Project Overview
This portfolio is built with a modular, semantic approach. It avoids heavy front-end frameworks to maintain lightweight rendering and high compatibility across modern browsers, relying on clean HTML5, responsive CSS layouts, and vanilla JavaScript.

---

## 📁 Directory Structure
Below is the architectural layout of this repository, illustrating how assets and pages are organized:

```text
OdyGaz.github.io/
├── assets/
│   ├── css/
│   │   ├── sketchbook.css              # Styling for the interactive Sketchbook
│   │   └── style.css                   # Core stylesheet (typography, layouts, watch controls)
│   ├── images/
│   │   ├── automata/                    # Images for cellular automata animations
│   │   ├── books/                       # Curated book cover assets for the Library
│   │   ├── drawings/                    # Digital and physical art sketches
│   │   ├── portfolio/                   # Scientific project & laboratory figures
│   │   ├── posters/                     # Academic poster graphics
│   │   └── ...                          ...
│   └── js/
│       ├── main.js                      # Core JS logic
│       └── sketchbook.js                # Interactive grid and canvas dynamics
├── pages/
│   ├── clock.html                       # Interactive Casio Retro Clock (Focus Time & Timers)
│   ├── cv.html                          # Digital Academic Curriculum Vitae
│   ├── fun-portfolio.html               # General/Creative portfolio showcase
│   ├── library.html                     # "The Digital Bookshelf" reference bibliography
│   ├── portfolio.html                   # Core research portfolio
│   ├── publications.html                # Academic papers and conference listings
│   ├── scientific-portfolio.html        # Targeted scientific portfolio section
│   ├── sketchbook.html                  # Interactive physical & digital art display
│   └── teaching.html                    # Interactive tutorials and physics animations
├── .nojekyll                            # Bypasses Jekyll processing on GitHub Pages
├── index.html                           # Homepage / Interactive cover
└── README.md                            # Project documentation (this file)
