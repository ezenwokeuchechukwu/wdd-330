import { getLocalStorage } from './utils.mjs';

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');

  // If nothing in cart, show a message
  if (!cartItems || cartItems.length === 0) {
    document.querySelector('.product-list').innerHTML =
      '<p>Your cart is empty.</p>';
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
}

function cartItemTemplate(item) {
  // Fallbacks in case some data is missing
  const image = item.Image || 'images/placeholder.jpg';
  const name = item.Name || 'Unnamed Product';
  const price = item.FinalPrice !== undefined ? `$${item.FinalPrice}` : 'N/A';
  const color =
    item.Colors && item.Colors[0] && item.Colors[0].ColorName
      ? item.Colors[0].ColorName
      : 'No color';

  return `
    <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${image}" alt="${name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${name}</h2>
      </a>
      <p class="cart-card__color">${color}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">${price}</p>
    </li>
  `;
}

renderCartContents();
