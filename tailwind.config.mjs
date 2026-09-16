/**
 * Tailwind v4 uses CSS-first configuration.
 * Brand tokens and `@theme` aliases live in:
 *   src/styles/global.css
 *
 * This file is intentionally minimal — kept so tooling that looks for
 * `tailwind.config.mjs` still finds a project entry point.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
};
