// DOM Elements
// document.addEventListener('DOMContentLoaded', () => {
$(document).ready(function() {
  const initElements = {
    darkModeToggle: document.getElementById('dark-mode-toggle'),
    searchInput: document.getElementById('search-input'),
    contactForm: document.getElementById('contactForm'),
    modalBox: document.getElementById('modal-box'),
    modalText: document.getElementById('modal-text'),
    modalTitle: document.getElementById('modal-title'),
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
    show: (title, message) => {
      initElements.modalTitle.textContent = title;
      initElements.modalText.textContent = message;
      const modal = new bootstrap.Modal(initElements.modalBox);
      modal.show();
    },
    hide: () => {
      const modal = bootstrap.Modal.getInstance(initElements.modalBox);
      if (modal) {
        modal.hide();
      }
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
          messageBoxManager.show('Thank you', 'Thank you for your message! We will get back to you soon.');
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

  // Show or hide the button based on scroll position
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) { // Show after scrolling 100px
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  // Smooth scroll to top when button is clicked
  $('#back-to-top').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });
});
