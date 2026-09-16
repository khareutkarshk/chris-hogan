// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// GitHub Pages project site: https://khareutkarshk.github.io/chris-hogan/
export default defineConfig({
	site: 'https://khareutkarshk.github.io',
	base: '/chris-hogan',
	integrations: [alpinejs()],
	vite: {
		plugins: [tailwindcss()],
	},
});
