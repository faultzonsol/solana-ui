import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification and tree shaking
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-switch', 'lucide-react'],
          motion: ['framer-motion'],
          solana: ['@solana/web3.js', 'bs58']
        }
      }
    }
  },
  // Enable build caching
  cacheDir: '.vite',
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@solana/web3.js',
      'bs58',
      'framer-motion',
      'lucide-react'
    ]
  }
})