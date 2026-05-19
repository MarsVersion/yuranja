import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // iCloud Drive paths often miss native file events; polling keeps CSS @theme in sync
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
