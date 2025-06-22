// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  const initElements = {
    darkModeToggle: document.getElementById('dark-mode-toggle'),
    mobileMenuToggle: document.getElementById('menu-toggle'),
    mobileNav: document.getElementById('nav-mobile'),
    searchInput: document.getElementById('search-input'),
    contactForm: document.getElementById('contactForm'),
    messageBox: document.getElementById('message-box'),
    messageText: document.getElementById('messageText')
  };

  // Theme Management
  const themeManager = {
    enableDarkMode: () => {
      document.body.classList.add('dark-mode');
      initElements.darkModeToggle.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    },
    disableDarkMode: () => {
      document.body.classList.remove('dark-mode');
      initElements.darkModeToggle.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    },
    initTheme: () => {
      if (localStorage.getItem('theme') === 'dark') {
        themeManager.enableDarkMode();
      } else {
        themeManager.disableDarkMode();
      }
    }
  };

  // Mobile Menu Management
  const mobileMenuManager = {
    toggleMenu: () => {
      initElements.mobileNav.classList.toggle('active');
      initElements.mobileMenuToggle.classList.toggle('fa-bars');
      initElements.mobileMenuToggle.classList.toggle('fa-times');
    },
    closeMenu: () => {
      initElements.mobileNav.classList.remove('active');
      initElements.mobileMenuToggle.classList.replace('fa-times', 'fa-bars');
    }
  };

  // Form Validation
  const formValidator = {
    validateInput: (input) => {
      const parentGroup = input.closest('.input-group');
      if (!parentGroup) return true;

      let isValid = true;

      // Required field validation
      if (input.required && input.value.trim() === '') {
        isValid = false;
      }

      // Email validation
      if (input.type === 'email' && input.value.trim() !== '') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
          isValid = false;
        }
      }

      // Phone validation
      if (input.id === 'phone' && input.value.trim() !== '') {
        const phonePattern = /^[0-9+\s()-]*$/;
        if (!phonePattern.test(input.value.trim())) {
          isValid = false;
        }
      }

      parentGroup.classList.toggle('valid', isValid);
      parentGroup.classList.toggle('invalid', !isValid);
      return isValid;
    }
  };

  // Message Box Management
  const messageBoxManager = {
    show: (message) => {
      initElements.messageText.textContent = message;
      initElements.messageBox.classList.add('show');
    },
    hide: () => {
      initElements.messageBox.classList.remove('show');
    }
  };

  // Event Listeners
  const initializeEventListeners = () => {
    // Dark Mode Toggle
    initElements.darkModeToggle.addEventListener('click', () => {
      if (document.body.classList.contains('dark-mode')) {
        themeManager.disableDarkMode();
      } else {
        themeManager.enableDarkMode();
      }
    });

    // Mobile Menu
    initElements.mobileMenuToggle.addEventListener('click', mobileMenuManager.toggleMenu);
    initElements.mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', mobileMenuManager.closeMenu);
    });

    // Contact Form
    if (initElements.contactForm) {
      initElements.contactForm.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', () => formValidator.validateInput(input));
      });

      initElements.contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let allValid = true;

        initElements.contactForm.querySelectorAll('input, textarea').forEach(input => {
          if (!formValidator.validateInput(input)) {
            allValid = false;
          }
        });

        if (allValid) {
          messageBoxManager.show('Thank you for your message! We will get back to you soon.');
          initElements.contactForm.reset();
          initElements.contactForm.querySelectorAll('.input-group').forEach(group => {
            group.classList.remove('valid', 'invalid');
          });
        } else {
          messageBoxManager.show('Please fill in all required fields and correct any errors.');
        }
      });
    }
  };

  // Initialize
  themeManager.initTheme();
  initializeEventListeners();

  // Make messageBoxManager.hide globally available for onclick handlers
  window.hideMessageBox = messageBoxManager.hide;
});
