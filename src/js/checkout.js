import CheckoutProcess from './CheckoutProcess.mjs';

const checkout = new CheckoutProcess('so-cart', '.order-summary');
checkout.init();

// Recalculate totals when ZIP is entered
document.getElementById('zip').addEventListener('blur', () => {
  checkout.calculateOrderTotal();
});

// Form submit handler with validation
const form = document.getElementById('checkoutForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // HTML validation runs automatically before this
  if (!form.checkValidity()) {
    form.reportValidity(); // Optional, helps show browser errors
    return;
  }

  try {
    const response = await checkout.checkout(form);

    if (response && response.success) {
      // ✅ Success: clear cart and redirect
      localStorage.removeItem('so-cart');
      window.location.href = '/checkout/success.html';
    } else {
      alert('Order failed. Please try again.');
    }
  } catch (error) {
    alert(error.message.message || 'There was a problem submitting your order.');
  }
});
