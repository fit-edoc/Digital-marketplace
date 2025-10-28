import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://github.com/fit-edoc/Digital-marketplace",
  
  // server:{
  //   open:true,
  //   proxy:" https://af8180b766e5.ngrok-free.app",
  //   allowedHosts:true
  // }
})
