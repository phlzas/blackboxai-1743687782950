document.addEventListener("DOMContentLoaded", () => {
  // Load navbar component with improved error handling
  fetch("./components/navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      const navbar = document.getElementById("navbar");
      if (!navbar) {
        throw new Error("Navbar container element not found");
      }
      navbar.innerHTML = html;
      
      // Add margin to login container if it exists
      const loginContainer = document.querySelector(".login-container");
      if (loginContainer) {
        loginContainer.classList.add("mt-16");
      } else {
        console.warn("Login container not found - margin not applied");
      }

      // Initialize enhanced mobile menu functionality
      initMobileMenu();
    })
    .catch((error) => {
      console.error("Failed to load navigation component:", error);
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.innerHTML = `
          <nav class="bg-white shadow-sm p-4 flex justify-between items-center">
            <span class="text-red-500">Navigation failed to load</span>
            <a href="./login.html" class="text-purple-600 hover:underline focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded px-2 py-1">Login</a>
          </nav>
        `;
      }
    });

  function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
      // Enhanced mobile menu toggle with accessibility features
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        // Focus first item in mobile menu for keyboard navigation
        const firstMenuItem = mobileMenu.querySelector('a');
        if (firstMenuItem) firstMenuItem.focus();
      });

      closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        // Return focus to menu button for better keyboard flow
        mobileMenuBtn.focus();
      });

      // Close menu when clicking outside
      mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
          mobileMenu.classList.add('hidden');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Close menu on Escape key press
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          mobileMenuBtn.focus();
        }
      });
    } else {
      console.warn("Mobile menu elements not found - functionality disabled");
    }
  }
});