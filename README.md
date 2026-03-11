# Nir Alon Portfolio

Public source for [niralon.github.io](https://niralon.github.io/), a React-based landing page that presents Nir Alon's background, projects, and contact information as a software engineer.

## Stack

- React 19
- Create React App
- Tailwind CSS
- Framer Motion
- GitHub Pages

## Local Development

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The production output is written to `build/`.

## Deployment

Deployment is handled by GitHub Actions. Every push to the `main` branch builds the app and publishes the contents of `build/` to GitHub Pages.

## Repository Structure

```text
public/            Static assets served as-is
src/               React application source
.github/workflows/ GitHub Pages deployment workflow
```

## Notes

- The repository is intended to keep only source code and the assets used by the live landing page.
- Generated output, local caches, and obsolete deployment branches should not be committed.
