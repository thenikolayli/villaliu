import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  base: process.env.VITE_DOCKER ? "/static/" : "/",
  build: {
    outDir: "./static",
  },
  server: {
    port: 3000
  }
})
