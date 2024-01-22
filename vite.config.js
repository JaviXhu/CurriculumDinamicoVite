// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/', // Configura la ruta base, que es '/' en este caso
  plugins: [vue()],
})