import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        webgl_instancing_raycast: resolve(__dirname, 'gallery/webgl_instancing_raycast/index.html'),
      },
    },
  },
  plugins: [react()],
})
