# Design System Browser

A web interface to browse all design styles, tokens, component patterns, and templates from the Frontend Design Library.

## Features

- **33 Design Styles**: Browse all curated design styles with complete tokens
- **Component Patterns**: Copy-paste ready Tailwind CSS component classes
- **Templates**: Preview and download landing page templates
- **Search & Filter**: Find styles by name, mode (light/dark), or category

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set the root directory to `website`
3. Deploy automatically on push

### Netlify

1. Connect your GitHub repository to Netlify
2. Set the base directory to `website`
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy automatically on push

## Local Development

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 15** - React framework with static export
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icons
- **TypeScript** - Type safety

## Project Structure

```
website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home - style grid
│   │   ├── styles/[id]/  # Style detail pages
│   │   ├── components/   # Component patterns
│   │   └── templates/    # Templates browser
│   ├── components/       # Shared React components
│   └── lib/              # Design data and utilities
├── public/
│   └── templates/        # HTML template files
├── vercel.json           # Vercel config
└── netlify.toml          # Netlify config
```
