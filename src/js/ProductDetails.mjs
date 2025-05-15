import { setLocalStorage } from './utils.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    document.getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  addProductToCart() {
    setLocalStorage('so-cart', this.product);
  }

  renderProductDetails() {
    document.querySelector('.product-detail__title').innerText = this.product.Name;
    document.querySelector('.product-detail__brand').innerText = this.product.Brand.Name;
    document.querySelector('.product-detail__image > img').src = this.product.Image;
    document.querySelector('.product-detail__image > img').alt = this.product.Name;
    document.querySelector('.product-detail__price').innerText = `$${this.product.ListPrice}`;
    document.querySelector('.product-detail__description').innerText = this.product.DescriptionHtmlSimple;
  }
}
