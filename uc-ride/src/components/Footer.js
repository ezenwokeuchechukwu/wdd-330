export function loadFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} UC Ride. All rights reserved.</p>
  `;
  document.body.appendChild(footer);
}
export function loadFooterWithLinks() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} UC Ride. All rights reserved.</p>
    <ul class="footer-links">
      <li><a href="privacy-policy.html">Privacy Policy</a></li>
      <li><a href="terms-of-service.html">Terms of Service</a></li>
      <li><a href="contact-us.html">Contact Us</a></li>
    </ul>
  `;
  document.body.appendChild(footer);
}