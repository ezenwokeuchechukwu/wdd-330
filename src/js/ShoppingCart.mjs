import { loadTemplate, getLocalStorage } from './utils.mjs';

export default class ShoppingCart {
    constructor(parentSelector) {
        this.parentElement = document.querySelector(parentSelector);
        this.cartItems = getLocalStorage('so-cart') || [];
        this.template = null;
    }

    async loadTemplate() {
        this.template = await loadTemplate('/partials/cartItemTemplate.html');
    }

    render() {
        if (!this.cartItems.length) {
            this.parentElement.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        // Clear current content
        this.parentElement.innerHTML = '';

        this.cartItems.forEach(item => {
            // Replace placeholders in template with actual data
            let renderedItem = this.template
                .replace(/{{Image}}/g, item.Image)
                .replace(/{{Name}}/g, item.Name)
                .replace(/{{ColorName}}/g, item.Colors && item.Colors[0]?.ColorName ? item.Colors[0].ColorName : 'N/A')
                .replace(/{{Quantity}}/g, item.Quantity || 1)
                .replace(/{{FinalPrice}}/g, item.FinalPrice);

            this.parentElement.insertAdjacentHTML('beforeend', renderedItem);
        });
    }

    async init() {
        await this.loadTemplate();
        this.render();
    }
}