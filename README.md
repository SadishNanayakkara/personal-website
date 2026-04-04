## Sadish Nanayakkara – Personal Portfolio

<img width="1435" height="814" alt="image" src="https://github.com/user-attachments/assets/fd6e8875-4d6f-4912-b029-5b1fe498c65e" />


A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS. It showcases my skills, projects, professional journey, and provides a simple way to contact me.

### Features

- Hero section with profile photo and quick CTAs (Contact and CV)
- About, Projects, and Journey (experience timeline) sections
- Project cards with tags and media (including video for Project 4)
- Contact form powered by EmailJS
- Direct links to GitHub and LinkedIn
- Responsive layout styled with Tailwind CSS

### Tech Stack

- React 19 + Vite
- Tailwind CSS
- lucide-react icons
- EmailJS for contact form handling

### Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (usually http://localhost:5173).

### Environment Variables (EmailJS)

The contact form uses EmailJS. Create a `.env` file in the project root and add:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

In your EmailJS template, use the fields:

- `name`
- `email`
- `message`
- `to_email` (set to my address: `sswijerathnananayakkara@gmail.com` or mapped in the template)

### Assets

- Profile photo: `src/assets/my-pro-photo.jpg`
- Hero background: `public/hero-bg.jpg`
- Projects media: `public/projects/*`
- CV PDF (previewed in new tab): `public/cv/Untitled document-40.pdf`

If you rename or replace these files, update the corresponding paths in the components under `src/sections` and `src/layout`.

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.
