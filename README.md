# Dental Clinic Landing Page

A modern, professional dental clinic landing page built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles
├── components/           # All UI components
│   ├── HeroSection.tsx
│   ├── DoctorProfile.tsx
│   ├── ServiceHighlights.tsx
│   ├── WhyChooseUs.tsx
│   ├── GoogleReviews.tsx
│   ├── FAQSection.tsx
│   ├── Footer.tsx
│   └── ...more
└── config/
    └── branch-configs.ts  # Clinic data configuration (edit this to customize)
```

## Customization

To customize this page for your clinic, edit the file:

**`src/config/branch-configs.ts`**

This file contains all clinic-specific data:
- Doctor name, photo, description
- Clinic address, phone, email, timings
- Patient reviews
- Hero title and video
- Services and USPs

## Build for Production

```bash
npm run build
npm start
```
