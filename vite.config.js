import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('web3')) {
            return 'web3';
          }
        }
      },
    }
  },
  plugins: [
    react(),
    visualizer(),
  ],
})
