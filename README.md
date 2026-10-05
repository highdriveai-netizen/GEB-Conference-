# 2nd International Biotechnology Conference 2026 (IBC 2026)

> **Organized by:**  
> **Department of Genetic Engineering & Biotechnology (GEB)**  
> **University of Chittagong, Bangladesh**  
> *In collaboration with the National Institute of Biotechnology (NIB) & supported by University Grants Commission (UGC) Bangladesh*

A modern, production-ready scientific academic conference website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide React**.

This project modernizes the visual identity of the previous **National Biotechnology Conference 2023 (NBC 2023)** into a premier, accessible, and responsive international academic conference portal designed for presentations to university faculty, the conference organizing committee, researchers, and global delegates.

---

## 🔬 Key Features

- **Institutional Identity:** Emerald & teal visual language preserving the University of Chittagong and Department of GEB institutional branding.
- **Biotechnology Design Language:** Subtle double-helix DNA patterns, molecular network styling, and academic editorial typography.
- **Interactive Countdown:** Real-time countdown to December 2026 with configurable target date in `conferenceData.ts`.
- **12 Multidisciplinary Research Tracks:** Medical Biotechnology, Agricultural Genomics, Environmental Bioremediation, Industrial Enzymes, Bioinformatics, and more with instant topic filtering.
- **Keynote & Invited Speaker Profiles:** Polished speaker cards with detailed biographical modal dialogs, presentation titles, and academic institutions.
- **Interactive 3-Day Program Agenda:** Segmented day tabs (Day 01, Day 02, Day 03), session category filters (Keynote, Oral, Poster, Workshop, Ceremony), and print-ready schedules.
- **Call for Abstracts & Guidelines:** Word counter, structured abstract requirements (Background, Methodology, Results, Conclusion), and submission guidelines modal.
- **Delegate Registration System:** Full registration form for Students, Researchers, Industry Delegates, and International Participants, with frontend validation and automatic demo reference generation (`IBC26-DEMO-XXXXX`).
- **Abstract Submission Portal:** Real-time abstract word counter (250 words max), co-author entry, research track selection, and file dropzone (PDF/DOC/DOCX).
- **Submission Results Lookup:** Immediate decision status tracking with pre-loaded demo IDs (`Accepted — Oral`, `Accepted — Poster`, `Under Review`, `Revision Required`) and local search support.
- **Campus & Conference Gallery:** Responsive image grid with lightbox modal, previous/next keyboard navigation, and category filters.
- **Secretariat Inquiries & Travel Guide:** Contact forms, campus location cues, and transport directions (Chittagong Shuttle Train, Airport, and Highway).
- **Netlify SPA-Ready:** Fully configured `netlify.toml` with wildcard SPA routing rewrite rules to prevent 404s on page refresh.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler / Tooling:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter & Plus Jakarta Sans via Google Fonts
- **Deployment Target:** Netlify (via GitHub)

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
Ensure you have **Node.js (v18 or later)** and **npm** installed.

### 2. Installation
```bash
npm install
```

### 3. Development Server
Starts the local development server at `http://localhost:3000`:
```bash
npm run dev
```

### 4. Production Build
Generates the optimized static build in the `dist/` directory:
```bash
npm run build
```

### 5. Preview Production Build
Locally preview the output from `dist/`:
```bash
npm run preview
```

---

## 🚢 GitHub & Netlify Deployment Workflow

### 1. Pushing to GitHub
```bash
git init
git add .
git commit -m "feat: complete production-ready IBC 2026 conference website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 2. Deploying on Netlify
The repository is pre-configured with `netlify.toml` for seamless 1-click continuous deployment from GitHub:
1. Log in to [Netlify](https://app.netlify.com).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select **GitHub** and authorize access to your repository.
4. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.

All React Router sub-routes (`/speakers`, `/agenda`, `/register`, `/submit-article`, `/results`, `/gallery`, `/contact`) will automatically resolve correctly on direct load and page refresh thanks to the redirect rules in `netlify.toml`.

---

## 📝 Content Customization Guide for Organizers

All dynamic conference data is decoupled from UI presentation and maintained in a single central configuration file:

📁 **`src/data/conferenceData.ts`**

The conference committee can replace placeholder content without altering UI code:

| Content Element | Location in `src/data/conferenceData.ts` | Notes |
| :--- | :--- | :--- |
| **Conference Dates** | `CONFERENCE_INFO.datesDisplay` & `countdownTarget` | Update ISO string for live countdown timer |
| **Important Deadlines** | `IMPORTANT_DATES` array | Replace `[Date — To Be Announced]` with confirmed dates |
| **Keynote & Speakers** | `FEATURED_KEYNOTE_SPEAKER` & `SPEAKERS` | Update names, photos, institutions, and biographies |
| **Program Schedule** | `AGENDA_ITEMS` & `AGENDA_DAYS` | Add/modify sessions, time slots, halls, and speakers |
| **12 Thematic Tracks** | `CONFERENCE_THEMES` | Modify research scopes, track descriptions, or titles |
| **Registration Fees** | `REGISTRATION_CATEGORIES` | Update student, researcher, and delegate fee amounts |
| **Secretariat Contacts** | `CONFERENCE_INFO.contactEmail`, `contactPhone`, `venue` | Insert official phone numbers and secretariat addresses |
| **Announcements** | `ANNOUNCEMENTS` | Add official notices, call for paper circulars, or news |
| **Photo Gallery** | `GALLERY_ITEMS` | Replace image URLs and descriptions |
| **Results Lookup Demo** | `DEMO_RESULTS` | Add actual submission IDs and decision notifications |

### Logo & Image Asset Replacement
Place institutional vector SVG or PNG assets in `public/images/`:
- `public/images/conference-logo.svg` → Official Conference Logo
- `public/images/university-logo.svg` → University of Chittagong Official Seal
- `public/images/department-logo.svg` → Department of GEB Emblem
- `public/images/nib-logo.svg` → Partner Institute Logo
- `public/images/ugc-logo.svg` → UGC Bangladesh Emblem
- `public/images/conference-banner.svg` → Social OpenGraph sharing card (1200x630)

---

## 🔌 Connecting a Future Backend

This application is designed as a standalone frontend with clean integration points:
- **Registration (`/register`):** Currently validates inputs and issues a demo reference stored in `localStorage`. Connect your REST/GraphQL API or Firebase/Supabase in `handleSubmit` within `src/pages/RegistrationPage.tsx`.
- **Payment Gateway:** Easily attach bKash PGW, Nagad, SSLCommerz, or Stripe in `RegistrationPage.tsx` once fees are announced.
- **Article Submission (`/submit-article`):** Replace local submission logging with AWS S3 / Cloudinary / Supabase Storage file uploads and backend database persistence in `src/pages/SubmitArticlePage.tsx`.
- **Submission Results (`/results`):** Connect an API endpoint (e.g., `GET /api/submissions/:id`) to retrieve real-time review status from your academic paper management database.
- **Contact Desk (`/contact`):** Wire form submission to Formspree, Netlify Forms, or an Express proxy route.

---

## 📜 Academic Attribution & Ownership

- **Host Department:** Department of Genetic Engineering & Biotechnology (GEB), Faculty of Biological Sciences, University of Chittagong.
- **Institutional Partner:** National Institute of Biotechnology (NIB), Ministry of Science & Technology, Bangladesh.
- **Academic Courtesy:** University Grants Commission (UGC) Bangladesh.
- **Website Template:** Designed and developed for demonstration and official review by the 2nd IBC 2026 Executive Committee.
