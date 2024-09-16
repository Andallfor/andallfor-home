import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'docs/',
  base: '/andallfor-home/',
  plugins: [react()],
})
