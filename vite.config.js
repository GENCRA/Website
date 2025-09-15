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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          physics: ["./src/assets/physics-ChHD2_fM.js"],
          opentype: ["./src/assets/opentype-U-0Y99ve.js"],
        },
      },
    },
  },
})
