import { getLocalStorage } from './utils.mjs';

// Render the items in the cart
function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
}

// Build the HTML for each cart item
function cartItemTemplate(item) {
  const quantity = item.quantity || 1; // fallback to 1 if not set
  const newItem = `<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: ${quantity}</p>
    <p class="cart-card__price">$${(item.FinalPrice * quantity).toFixed(2)}</p>
  </li>`;

  return newItem;
}

// Calculate and display total
function calculateCartTotal() {
  const cartItems = getLocalStorage('so-cart');
  const total = cartItems.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + item.FinalPrice * quantity;
  }, 0);

  document.querySelector('#cart-total').textContent = `$${total.toFixed(2)}`;
}

// Add a checkout button dynamically (optional)
function addCheckoutButton() {
  const button = document.createElement('a');
  button.href = '/checkout/index.html';
  button.classList.add('checkout-btn');
  button.textContent = 'Proceed to Checkout';
  document.querySelector('.cart-footer').appendChild(button);
}

// Run on page load
window.addEventListener('DOMContentLoaded', () => {
  renderCartContents();
  calculateCartTotal();
  addCheckoutButton();
});

