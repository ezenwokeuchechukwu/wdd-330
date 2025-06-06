export function loadHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
    <nav class="navbar">
      <a href="dashboard.html" class="logo">UC Ride</a>
      <ul class="nav-links">
        <li><a href="dashboard.html">Dashboard</a></li>
        <li><a href="ride-history.html">Ride History</a></li>
        <li><a href="support.html">Support</a></li>
        <li><a href="login.html">Logout</a></li>
      </ul>
    </nav>
  `;
  document.body.prepend(header);
}
