// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode (e.g. development, production)
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV), // optional use of custom env variable
    },
    server: {
      host: '0.0.0.0', // Expose Vite dev server to your local network
      port: 3000       // Set your preferred port
    },
    build: {
      outDir: 'dist'   // Output directory for production build
    }
  };
});
