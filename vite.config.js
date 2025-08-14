import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repoName = 'Personal-website';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/', 
  plugins: [react()],
})
