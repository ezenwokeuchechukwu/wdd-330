import { setLocalStorage, getLocalStorage, alertMessage } from './utils.mjs';
// Make sure the path is correct; adjust if the file is in a different folder
import { productDetailsTemplate } from './ProductDetails.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();

    document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  addProductToCart() {
    const cartItems = getLocalStorage('so-cart') || [];
    cartItems.push(this.product);
    setLocalStorage('so-cart', cartItems);

    // ✅ Show alert
    alertMessage('Item added to cart!');
  }

  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}
