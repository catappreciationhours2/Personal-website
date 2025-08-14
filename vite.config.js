import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repoName = 'personal-website';

export default defineConfig({
  base: "/personal-website", 
  plugins: [react()],
})
