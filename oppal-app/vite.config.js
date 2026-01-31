import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/DS_Manager/',
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom']
  }
})
