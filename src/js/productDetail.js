const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

async function getProductById(id) {
  const response = await fetch(`${baseURL}product/${id}`);
  const data = await convertToJson(response);
  return data.Result;
}

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('product');
}

function renderProductDetails(product) {
  const container = document.querySelector('.product-detail');

  container.innerHTML = `
    <h1>${product.Name}</h1>
    <img src="${product.Images.PrimaryLarge}" alt="${product.Name}">
    <p>${product.DescriptionHtmlSimple}</p>
    <p><strong>Price:</strong> ${product.FinalPrice}</p>
    <!-- Add more product details as needed -->
  `;
}

// Main execution
const productId = getProductIdFromUrl();

if (productId) {
  getProductById(productId)
    .then(product => renderProductDetails(product))
    .catch(error => {
      document.querySelector('.product-detail').innerHTML = `<p>Error loading product details: ${error.message}</p>`;
    });
} else {
  document.querySelector('.product-detail').innerHTML = `<p>No product specified.</p>`;
}
