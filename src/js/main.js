import { loadHeaderFooter } from './utils.mjs';
import ProductData from './ProductData.mjs';

// Load header and footer on page load
loadHeaderFooter();

// Create a ProductData instance pointing to the tents.json file in the public directory
const dataSource = new ProductData('/json/tents.json');

// Select the <ul class="product-list"> element from the DOM
const tentListElement = document.querySelector('.product-list');

// Create a ProductList instance and initialize it to render the product cards
const tentList = new ProductData('tents', dataSource, tentListElement);
tentList.init();
