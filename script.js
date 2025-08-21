// ✅ Cleaned-up script.js for GitHub Pages

document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile nav menu
  const navLinks = document.getElementById("nav-links");
  const menuToggle = document.getElementById("menu-toggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show"); // ✅ consistent with CSS
      menuToggle.classList.toggle("active"); // ✅ highlight icon when active
    });
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll fade-in animation
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.1 }
  );
  fadeElements.forEach((el) => observer.observe(el));

  // Modal logic
  const modalHTML = `
    <div class="modal-overlay" style="display:none;">
      <div class="modal">
        <h2>Let's Get Started!</h2>
        <p>Contact us now to create your custom perfume experience.</p>
        <button id="closeModal">Close</button>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modalOverlay = document.querySelector(".modal-overlay");
  const openModalBtn = document.createElement("button");
  openModalBtn.textContent = "Get Started";
  openModalBtn.classList.add("get-started-btn");
  const textSection = document.querySelector(".text");
  if (textSection) textSection.appendChild(openModalBtn);

  openModalBtn.addEventListener(
    "click",
    () => (modalOverlay.style.display = "flex")
  );
  document
    .getElementById("closeModal")
    .addEventListener("click", () => (modalOverlay.style.display = "none"));

  // Contact form handling
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
      formMessage.style.color = "green";
      contactForm.reset();
    });
  }

  // Add-to-cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productCard = button.closest(".product-card");
      const productName = productCard.querySelector("h2").textContent;
      alert(`${productName} has been added to your cart!`);
    });
  });
});
