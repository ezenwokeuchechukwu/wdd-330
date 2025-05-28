import CheckoutProcess from './CheckoutProcess.mjs';

// Initialize the checkout process with cart key and summary selector
const checkout = new CheckoutProcess('so-cart', '.order-summary');
checkout.init();

// Recalculate totals after ZIP is entered
document.getElementById('zip').addEventListener('blur', () => {
  checkout.calculateOrderTotal();
});

// Handle form submission
document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = await checkout.checkout(e.target);

    if (response && response.success) {
      alert('Order submitted successfully!');
      // You could redirect to a success page here
      // window.location.href = '/success.html';
    } else {
      alert('Order failed. Please try again.');
    }

    //    console.log('Server Response:', response);
  } catch (error) {
    // console.error('Checkout error:', error);
    alert('There was a problem submitting your order. Please try again.');
  }
});
