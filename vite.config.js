import { resolve } from 'path';

export default {
  root: 'src', // Tell Vite to serve from src/
  build: {
    outDir: '../dist', // Output outside the root
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        cart: resolve(__dirname, 'src/cart/index.html'),
        checkout: resolve(__dirname, 'src/checkout/index.html'),
        product: resolve(__dirname, 'src/product_pages/index.html'),
      },
    },
  },
};
