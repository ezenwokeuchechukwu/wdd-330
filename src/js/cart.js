// cart.js (main script for your cart page)

import { loadHeaderFooter } from './utils.mjs';
import ShoppingCart from './ShoppingCart.mjs';

// Load common header and footer
loadHeaderFooter();

// Initialize and render the shopping cart inside the element with class 'product-list'
const cart = new ShoppingCart('.product-list');
cart.init();
