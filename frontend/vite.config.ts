import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		outDir: "./build"
	},
	base: process.env.VITE_DOCKER ? "/static/" : "/",
	server: {
		port: 3000
	}
});
