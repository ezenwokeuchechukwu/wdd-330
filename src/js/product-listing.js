import ProductData from './ProductData.mjs';
import ProductList from './productList.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');  // get from URL

const dataSource = new ProductData();
const listElement = document.querySelector('.product-list');

const myList = new ProductList(category, dataSource, listElement);
myList.init();

// Update page title
const title = document.querySelector('.page-title');
title.textContent = `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}`;
