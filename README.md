# Candy - Fortnite Web Clone

A modern, responsive web application built with **Astro**, **React**, and **Radix UI**, inspired by the incredible world of Fortnite. 

It replicates key sections of the Fortnite ecosystem such as the Battle Pass, Item Shop, Competitive, News, and Fortnite Crew pages.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - for fast, optimized, content-driven static pages.
- **UI Library**: [React](https://react.dev/) - for interactive client-side components.
- **Component System**: [Radix UI](https://www.radix-ui.com/) - for accessible, unstyled UI primitives.
- **Icons**: [Lucide React](https://lucide.dev/) - for clean and modern SVGs.
- **Styling**: Vanilla CSS with customized Radix themes.

## Getting Started

### Prerequisites
Make sure you have Node.js and `npm` installed.

### Installation

1. Navigate to the project directory:
   ```bash
   cd Candy
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:4321` by default.

### Available Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the application for production.
- `npm run preview` - Previews the built production site locally.
- `npm run lint` - Runs ESLint to catch and automatically fix code issues.

## Project Structure

- `src/pages/` - Astro pages defining the routes (e.g., `/`, `/battle-pass`, `/item-shop`).
- `src/components/` - React components for interactive and reusable UI sections.
- `src/layouts/` - Shared layouts wrapping the Astro pages (contains global header and footer).
- `src/styles/` - Global and feature-specific CSS stylesheets.

## Recent Updates
- Centralized `Header` and `SocialLinks` (Footer) into the global `Layout` to improve code maintainability and eliminate duplications across components and pages.
- Migrated codebase dependencies to their latest compatible versions.
