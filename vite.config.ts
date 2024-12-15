import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': {
        target: 'https://mplmcwkysmivdysxgssh.supabase.co', // Your Supabase GraphQL URL
        changeOrigin: true, // Ensures the origin of the host header is changed to the target
        rewrite: (path) => path.replace(/^\/graphql/, '/graphql/v1'), // Rewrite for the actual GraphQL endpoint
      },
    },
  },
})
