import javascriptLogo from './javascript.svg';
import { setupCounter } from './utils/counter.js';

const viteLogo = '/vite.svg';
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

// ✅ Load Google Maps Script First
const loadGoogleMapsScript = () => {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    console.log('✅ Google Maps script loaded successfully');
    // You can now safely use the `google.maps` object
    // e.g., initialize map here if needed
  };
  script.onerror = () => {
    console.error('❌ Failed to load Google Maps script');
  };
  document.head.appendChild(script);
};

loadGoogleMapsScript();

// ✅ Page content setup
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Welcome to UC Ride</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Start building Nigeria’s smarter transport system 🚗
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

// ✅ Fetch ride data from API
fetch(`${apiUrl}/rides`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('✅ Ride data:', data);
    // Process and display ride data here
  })
  .catch(error => {
    console.error('❌ Fetch error:', error.message);
  });
