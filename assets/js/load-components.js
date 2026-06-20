document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("global-navbar");
  if (navbarContainer) {
    navbarContainer.innerHTML = `
      <section class="navbar">
        <div class="logo"><a href="index.html">Explore Sri Lanka</a></div>
        <div class="hamburger-menu" id="hamburger-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-links" id="nav-menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="Destinations.html">Destinations</a></li>
          <li><a href="Heritage.html">Heritage</a></li>
          <li><a href="Experiences.html">Experiences</a></li>
          <li><a href="About.html">About</a></li>
        </ul>
        <div class="nav-actions">
          <a href="about.html#contact"><button class="btn-contact">Contact Us</button></a>
        </div>
      </section>
    `;
  }

  const footerContainer = document.getElementById("global-footer");
  if (footerContainer) {
    footerContainer.innerHTML = `
      <section class="footer-section">
        <div class="footer-col01">
          <h3>Explore Sri Lanka</h3>
          <p>
            A luxury travel guide dedicated to showcasing the authentic beauty and
            culture of the pearl of the Indian Ocean.
          </p>
          <div class="footer-socials">
            <span class="social-icon">🌐</span>
            <span class="social-icon">✉️</span>
          </div>
        </div>
        <div class="footer-col02">
          <h4>DISCOVER</h4>
          <ul>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Heritage</a></li>
            <li><a href="#">Experiences</a></li>
          </ul>
        </div>
        <div class="footer-col03">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>
        <div class="footer-col04">
          <h4>LEGAL</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
          <p class="copyright">
            &copy; 2026 Explore Sri Lanka. All rights reserved.
          </p>
        </div>
      </section>
    `;
  }

  setTimeout(() => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    if (hamburgerBtn && navMenu) {
      hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
      });
    }
  }, 50);
});
