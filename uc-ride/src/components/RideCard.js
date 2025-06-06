export function createRideCard(ride) {
  const card = document.createElement('div');
  card.className = 'ride-card';

  card.innerHTML = `
    <h3>${ride.destination}</h3>
    <p><strong>Date:</strong> ${ride.date}</p>
    <p><strong>Driver:</strong> ${ride.driver}</p>
    <p><strong>Fare:</strong> ₦${ride.fare}</p>
  `;

  return card;
}

// Example usage in HTML (e.g., dashboard.html or ride-history.html)
// import { loadHeader } from './header.js';
// import { loadFooter } from './footer.js';
// import { createRideCard } from './rideCard.js';

// loadHeader();
// loadFooter();

// const rides = [
//   { destination: "Wuse", date: "June 3, 2025", driver: "Ngozi E.", fare: 2300 },
//   { destination: "Gwarinpa", date: "June 1, 2025", driver: "Bello A.", fare: 1800 },
// ];

// const container = document.getElementById('ride-history');
// rides.forEach(ride => {
//   container.appendChild(createRideCard(ride));
// });
