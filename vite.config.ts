import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: './',

  server: {
    port: 5173,
    open: true,
  },

  preview: {
    port: 4173,
    allowedHosts: ['skid-swarm-negotiate.ngrok-free.dev'],
  },
})