/* eslint-disable import/no-unresolved */
import { getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';
// Make sure the file exists at this path or update the path if necessary
// Update the path below if 'renderListWithTemplate.mjs' is located elsewhere
import renderListWithTemplate from './utils/renderListWithTemplate.mjs';

const productId = getParam('product');
const dataSource = new ProductData('tents');

const product = new ProductDetails(productId, dataSource);
product.init();

function productCardTemplate(item) {
  return `
    <li class="product-card">
      <a href="/src/product_pages/index.html?id=${item.id}">
        <img src="/images/tents/${item.image}" alt="${item.name}" />
        <h3 class="card__brand">${item.brand}</h3>
        <h2 class="card__name">${item.name}</h2>
        <p class="product-card__price">$${item.price}</p>
      </a>
    </li>
  `;
}

export default class ProductList {
  constructor(category, productDataSource, listElement) {
    this.category = category;
    this.dataSource = productDataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(
      productCardTemplate,
      this.listElement,
      list,
      'afterbegin',
      true,
    );
  }
}
