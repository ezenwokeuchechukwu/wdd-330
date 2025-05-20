import ProductData from './ProductData.mjs';
import { getParam, loadHeaderFooter } from '../js/utils.mjs';

loadHeaderFooter();

async function displayProduct() {
  const id = getParam('id');
  if (!id) {
    throw new Error('No product ID in URL');
  }

  const dataSource = new ProductData();
  try {
    const product = await dataSource.findProductById(id);
    if (!product) throw new Error('Product not found');

    document.querySelector('.product-title').textContent = product.Name;
    document.querySelector('.product-brand').textContent = product.Brand.Name;
    document.querySelector('.product-price').textContent = `$${product.FinalPrice}`;
    document.querySelector('.product-description').textContent = product.Description;
    document.querySelector('.product-image').src = product.PrimaryLarge;
    document.querySelector('.product-image').alt = product.Name;

  } catch (error) {
    document.querySelector('.product-title').textContent = 'Error loading product details.';
  }
}

displayProduct();
