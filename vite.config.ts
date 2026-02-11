import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This ensures assets (js, css, images) are linked relatively, 
  // preventing 404 errors on GitHub Pages or custom domains.
  base: './', 
})