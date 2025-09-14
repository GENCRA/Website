import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // listen on all network interfaces
    port: 5173,      // change if needed
  },
    optimizeDeps: {
    include: ["@splinetool/react-spline"],
  },
})
