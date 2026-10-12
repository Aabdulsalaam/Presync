# Attendance Management System (AMS)

A scalable starter app built with Next.js App Router, TypeScript, Tailwind CSS, and Vitest for testing.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open http://localhost:3800 in your browser.

## Available Scripts

- `pnpm dev` – start the development server
- `pnpm build` – build the production app
- `pnpm start` – run the production build
- `pnpm lint` – run ESLint checks
- `pnpm type-check` – run TypeScript type checking
- `pnpm test` – run unit tests once
- `pnpm test:watch` – run tests in watch mode
- `pnpm test:coverage` – generate test coverage reports

## Project Structure

- `app/` — Next.js App Router pages and layouts
- `components/` — reusable UI and feature components
- `hooks/` — custom React hook utilities
- `lib/` — shared business logic and utility helpers
- `types/` — application-wide TypeScript types
- `public/` — static assets and public files
- `app/globals.css` — global Tailwind styles
- `test/` — test setup files
- `vitest.config.ts` — test runner configuration
- `tailwind.config.ts` — Tailwind CSS configuration

## Notes

This project is designed to be maintainable and extendable:

- Next.js App Router for server and client components
- TypeScript strict mode for robust typing
- Tailwind CSS for rapid UI development
- Vitest + Testing Library for component tests
- ESLint recommended rules for code quality

## Commit Message Guidelines

This repo uses Conventional Commits and validates commit messages with `commitlint`.

Recommended commit types:

- `feat`: a new feature
- `fix`: a bug fix
- `docs`: documentation only changes
- `style`: formatting, missing semicolons, etc; no code changes
- `refactor`: code changes that neither fix a bug nor add a feature
- `perf`: performance improvements
- `test`: adding or updating tests
- `chore`: maintenance tasks and tooling changes
- `ci`: continuous integration or build pipeline changes
- `build`: changes that affect the build system or dependencies
- `revert`: revert a previous commit

Example commit messages:

- `feat: add attendance export button`
- `fix: correct absent count calculation`
- `docs: update README with pnpm usage`
- `chore: upgrade dependencies`

Local hook support is configured with Husky, and the CI pipeline also validates commit messages on push and pull requests.
