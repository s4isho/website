# s4isho / website

> A personal portfolio and multi-page website built with vanilla HTML, CSS, and JavaScript.

This repository contains the source code for a static personal website designed to showcase projects, share information, and provide a way for visitors to get in touch. It follows a clean, multi-page structure and includes a dedicated portfolio section, an image gallery, and a responsive layout.

## Table of Contents

- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## Features

- **Multi-Page Layout:** Includes dedicated pages for Home (`index.html`), About (`about.html`), Portfolio (`portfolio.html`), Gallery (`gallery.html`), and Contact (`contact.html`).
- **Portfolio Showcase:** A structured `Portfolio` directory containing project-specific assets, with a main portfolio page that links to a jQuery Image Carousel for visual displays.
- **Image Gallery:** A gallery page (`gallery.html`) for displaying curated images.
- **Responsive Styling:** A single `styles.css` file that controls the visual presentation and layout across all pages.
- **Social & Contact Footer:** Consistent footer across pages with social media links and contact information.
- **Static & Lightweight:** No build step or server-side dependency required—the site runs directly in the browser.

---

## Tech Stack

- **HTML5:** Semantic markup for all pages.
- **CSS3:** Styling and layout via `styles.css`.
- **JavaScript:** Minimal or no custom JS; optionally leveraging **jQuery** for the image carousel in the portfolio section.
- **Assets:** Images and portfolio media stored in the `images` and `Portfolio` directories.

---

## Project Structure

```text
website/
├── Portfolio/          # Project-specific assets and media
├── images/             # General images used across the site
├── about.html          # About page
├── contact.html        # Contact page
├── gallery.html        # Photo gallery page
├── index.html          # Homepage
├── portfolio.html      # Portfolio listing page
├── styles.css          # Global stylesheet
└── README.md           # This file
```

*(Structure inferred from the repository root listing.)*

---

## Getting Started

Because this is a static website, no package manager or build tools are required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/s4isho/website.git
   cd website
   ```

2. **Open the site:**
   - Double-click `index.html` to open it in your default browser, **or**
   - Serve it locally with a simple HTTP server:
     ```bash
     # Python 3
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```
     *(A local server is recommended so that relative paths and any AJAX/carousel resources load correctly.)*

---

## Usage

- **Homepage:** Navigate to `index.html` for the landing page.
- **Portfolio:** Visit `portfolio.html` to explore projects; the page may include an embedded jQuery image carousel.
- **Gallery:** Use `gallery.html` to browse the image collection.
- **Contact:** Reach out via `contact.html`.
- **Customization:** Update the HTML content in each page and modify `styles.css` to change the look and feel. Replace assets in `images/` and `Portfolio/` as needed.

---

## Contributing

Contributions, issues, and feature requests are welcome. Since this is a personal website, please open an issue first to discuss any major changes.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## License

This project is provided for personal and educational use.

---

## Contact

**s4isho** – [GitHub Profile](https://github.com/s4isho)

Project Link: [https://github.com/s4isho/website](https://github.com/s4isho/website)

---
