# Academic & Scientific Portfolio | Odhisea Gazeli

Welcome to the repository of my personal academic portfolio, designed as an interactive, clean, magazine-style digital showcase. This site highlights my research, teaching materials, scientific projects, and technical methodology in **Plasma Physics**, **Photonics**, and **Analytical Chemistry**.

🔗 **Live Website:** [https://odygaz.github.io/](https://odygaz.github.io/)

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
│   ├── documents/
│   │   └── cv-odisea-gazeli.pdf         # Academic Curriculum Vitae (PDF)
│   ├── images/
│   │   ├── automata/                    # Images for cellular automata animations
│   │   ├── books/                       # Curated book cover assets for the Library
│   │   ├── drawings/                    # Digital and physical art sketches
│   │   ├── portfolio/                   # Scientific project & laboratory figures
│   │   ├── posters/                     # Academic poster graphics
│   │   └── ...                          # Banners, logos, badges, and academic certificates
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
```

---

## 🛠️ Key Sections & Pages

- **Interactive Cover (`index.html`):** The landing page of the portfolio, styled as a minimal, high-end editorial journal cover.
- **Academic CV (`pages/cv.html`):** Detail-oriented overview of academic milestones, core laboratory diagnostics competencies, and instrument maintenance experience.
- **Digital Bookshelf (`pages/library.html`):** A thematic index cataloging reference textbooks in Physics, Mathematics, Photonics, Analytical Chemistry, and Computation.
- **Focus Time (`pages/clock.html`):** A fully functional digital watch styled after a classic Casio dial. It features three operational states:
  - **CLOCK:** Synced with system time.
  - **STOPWATCH:** Standard timer measuring minutes, seconds, and centiseconds.
  - **COUNTDOWN:** User-set countdown timer triggering a synchronized audio/visual alarm using the native *Web Audio API*.
- **Sketchbook (`pages/sketchbook.html`):** An interactive showcase displaying original physical and digital illustrations with dynamic hover transitions.

---

## 💻 Technologies Used

- **HTML5 & SVG:** Semantic markup and crisp vector design (including the Casio clock interface).
- **CSS3 (Grid, Flexbox, & CSS Variables):** For responsive alignment, asymmetric magazine-style layouts, and coordinate-driven designs (e.g., the blue bezel accent lines and backlight illuminations).
- **Vanilla JavaScript (ES6+):** Handles layout state toggles, interactive triggers, time loops, and Web Audio beep generation without relying on bloated external packages.
- **Google Fonts:** Integration of *Inter* (sans-serif), *Playfair Display* (serif headings), and *Share Tech Mono* (for the 7-segment digital LCD digits).
