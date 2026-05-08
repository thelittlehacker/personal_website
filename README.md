# Aditya Pranav — Personal Website

A static personal portfolio website for **Aditya Pranav** — Entrepreneur, Software Engineer, and Full Stack Web Developer based in Gurugram, India.

**Live at:** [adityapranav.in](https://adityapranav.in)

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero slider, About, Experience, Education, Tech skills, and portfolio highlights |
| Portfolio | `portfolio.html` | Dedicated page listing all featured projects in detail |
| Resume | `resume.html` | Languages, LinkedIn connect, and downloadable resume |
| Contact | `contact.html` | Contact form and location details |

---

## Project Structure

```
test-master/
├── index.html           # Main landing page
├── portfolio.html       # Full portfolio page
├── resume.html          # Resume page
├── contact.html         # Contact page
├── Resume.pdf           # Downloadable resume
│
├── css/                 # Stylesheets
│   ├── style.css        # Custom styles
│   ├── bootstrap.min.css
│   ├── animate.css
│   ├── aos.css          # Animate On Scroll
│   ├── owl.carousel.min.css
│   ├── magnific-popup.css
│   ├── ionicons.min.css
│   ├── flaticon.css
│   ├── icomoon.css
│   └── ...
│
├── js/                  # JavaScript
│   ├── main.js          # Custom scripts
│   ├── jquery.min.js
│   ├── bootstrap.min.js
│   ├── owl.carousel.min.js
│   ├── aos.js
│   ├── google-map.js
│   └── ...
│
├── images/              # Project screenshots & profile photos
│   ├── 1.png / 2.png / 3.png   # Profile images
│   ├── slaypay.png
│   ├── kashware.webp
│   ├── saneObserver.webp
│   ├── developer_connects.png
│   ├── favicon.ico
│   └── ...
│
├── fonts/               # Custom icon fonts
├── scss/                # SCSS source files
└── prepros-6.config     # Prepros build config (SCSS compiler)
```

---

## Tech Stack (Website)

- **HTML5 / CSS3** — static markup, no framework
- **Bootstrap 4** — responsive grid and components
- **jQuery** — DOM manipulation and plugin glue
- **Owl Carousel** — hero slider
- **AOS (Animate On Scroll)** — scroll-triggered animations
- **Magnific Popup** — lightbox
- **Prepros** — SCSS compilation during development
- **Google Analytics** (`UA-42256614-2`) — traffic tracking

---

## Featured Projects

### [Slaypay](https://slaypay.app/)
Fintech app that revolutionizes credit scores with multi-payment gateway support and RBI-compliant security.
- **Stack:** Node.js · Express.js · Sequelize · AWS (serverless, event-driven)

### [Kashware](https://play.google.com/store/apps/details?id=com.kashware.kash)
Unified payment card linking credit, debit, UPI, net banking, and wallets in a single tap.
- **Stack:** Node.js · Express.js · Sequelize

### [Sane Observer](https://play.google.com/store/apps/details?id=com.sane_observer)
Productivity and design thinking app — task scheduling, news feed, document management, and marketplace.
- **Stack:** Node.js · Express.js · MongooseJS

### [Skillbee](https://skillbee.com)
Job search platform for blue-collar workers with candidate profiling and tag-based job discovery.
- **Stack:** Node.js · Express.js · Sequelize

### [Developer Connects](https://github.com/thelittlehacker/devconnect)
Full-stack MERN social network for developers — posts, likes, comments, GitHub repo linking.
- **Stack:** MongoDB · Express.js · React · Node.js

### [Exercise Tracker](https://github.com/thelittlehacker/exercisetracker)
MERN stack CRUD app built as a full-stack learning project.
- **Stack:** MongoDB · Express.js · React · Node.js

---

## Experience

| Role | Company | Period |
|---|---|---|
| Vice President of Engineering | Antino Labs, Gurugram | 2022 – Present |
| Associate VP of Engineering | Antino Labs, Gurugram | 2021 – 2022 |
| Node.js Developer | Antino Labs, Gurugram | 2020 – 2021 |
| Co-Founder & Director | Mousebelly, New Delhi | 2016 – 2019 |
| Backend Developer (Freelance) | Aartista | 2019 |

---

## Education

- **B.Sc. (Information Technology)** — Magadh University, Patna (2014–2017)
- **GNIIT – Software Engineering in Java Track** — NIIT, New Delhi (2015–2018)

---

## Running Locally

This is a pure static site — no build step required.

```bash
# Open directly in a browser
open index.html

# Or serve with any static file server
npx serve .
```

> SCSS changes require recompiling via **Prepros** or running `sass scss/:css/`.

---

## Connect

- **Email:** adityapranav95@gmail.com
- **LinkedIn:** [aditya-pranav](https://www.linkedin.com/in/aditya-pranav/)
- **GitHub:** [thelittlehacker](https://github.com/thelittlehacker)
- **Twitter:** [@aditya_pranav](https://twitter.com/aditya_pranav)
- **WhatsApp:** +91 9110-048-492
