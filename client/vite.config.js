import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server:{
    open:true,
    proxy:" https://45f175284c0e.ngrok-free.app",
    allowedHosts:true
  }
})
