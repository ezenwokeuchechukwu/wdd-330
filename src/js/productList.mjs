import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
  return `
    <div class="product-card">
      <a href="../product_detail/index.html?id=${product.Id}">
        <img src="${product.PrimaryMedium}" alt="${product.Name}">
        <h3>${product.Name}</h3>
        <p>${product.Price}</p>
      </a>
    </div>
  `;
}




export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);  // Pass category here
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}
