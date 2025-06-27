# Skill8Up Week 3 Multipage Responsive Website Challenge

This repository contains a solution to the challenge of migrating an existing multi-page responsive website
to Bootstrap and jQuery. The goal was to leverage their responsive design, utility classes, pre-built
components, and widgets for easier updates and maintenance, as specified in the Skill8Up Week 3 challenge.

---

## 🎯 The Challenge

The core challenge was to take an existing web project (I chose Week 2) and fully migrate it
to use **Bootstrap 5.3** for its layout, styling, and components. This involved:

* Implementing Bootstrap's **grid system** for responsive layout.
* Incorporating at least three **Bootstrap components** (e.g., Navbar, Cards, Buttons, Forms) to replace existing UI elements.
* Utilising **Bootstrap utility classes** (e.g., spacing, text alignment, background colors) to simplify styling and reduce custom CSS.
* Ensuring the site is **fully responsive** across mobile, tablet, and desktop screens.
* (Optional) Integrating **jQuery Widgets** to enhance functionality.
* Deploying the migrated site successfully via **GitHub Pages**.

---

## 🧠 Key Learnings

By completing this challenge, I gained practical experience in:

* **Integrating Bootstrap 5.3**: Understanding how to correctly link Bootstrap's CSS and JavaScript into an existing HTML project.
* **Responsive Grid System Mastery**: Effectively using Bootstrap's `container`, `row`, and `col` classes to create a flexible and responsive layout that adapts to various screen sizes.
* **Component-Based Development**: Replacing custom UI elements with pre-built Bootstrap components, understanding their structure and customization options.
* **Utility-First Styling**: Leveraging Bootstrap's extensive set of utility classes to streamline styling, reduce the need for custom CSS, and maintain consistency.
* **Deployment with GitHub Pages**: Practicing the process of deploying a web project to GitHub Pages, ensuring public accessibility.
* **(Optional) jQuery Widget Integration**: Gaining experience in installing and using jQuery Widgets to add interactive elements and enhance user experience.
* **Code Migration Best Practices**: Learning to refactor existing HTML and CSS to align with Bootstrap's conventions while preserving semantic HTML and accessibility attributes.

---

## ✨ Core Functionalities & Features

This migrated website now boasts the following core functionalities and features:

1. **Fully Responsive Design**
2. **Bootstrap Grid System**
3. **Integrated Bootstrap Components**
4. **Utility Class Styling**
5. **jQuery Widget Enhancement**

* The layout dynamically adjusts and optimizes for viewing on mobile phones, tablets, and desktop computers.
* The entire site structure is built upon Bootstrap's robust grid system, ensuring seamless responsiveness.
* **Integrated Bootstrap Components**:
  * **Navbar**: A fully responsive navigation bar replaces the original menu, providing intuitive navigation across different pages.
  * **Cards**: Content sections are styled using Bootstrap Cards, offering a clean and organized presentation.
  * **Buttons**: All interactive buttons now utilise Bootstrap's styling, ensuring consistent visual feedback and accessibility.
  * **Modals**: Dialog boxes to interact with the user dynamically enhance the experience.
* Extensive use of Bootstrap utility classes for spacing (`mt-`, `mb-`, `p-`), text alignment (`text-center`, `text-left`), background colors (`bg-primary`, `bg-light`), and more, resulting in a lean and maintainable stylesheet.
* **jQuery**: ????

---

## 🌟 Why Bootstrap and jQuery are Good Libraries?

**Bootstrap** is an excellent choice for front-end development due to several key advantages:

* Its mobile-first approach and powerful grid system make creating responsive websites significantly easier and faster, saving developers considerable time and effort.
* Bootstrap provides a rich library of ready-to-use UI components (navbars, carousels, forms, cards, modals, etc.). This accelerates development, ensures consistency, and reduces the need to write custom CSS for common elements.
* The extensive set of utility classes allows for rapid styling directly in the HTML, minimizing the need for custom CSS and promoting highly reusable styles. This leads to smaller CSS file sizes and easier maintenance.
* By using a standardized framework, designs inherently gain a professional and consistent look and feel across different parts of the application.
* Bootstrap has a massive and active community, along with comprehensive and clear documentation, making it easy to find solutions and learn.

**jQuery** (especially when paired with jQuery UI for widgets) is a beneficial library for:

* jQuery greatly simplifies JavaScript's interaction with the Document Object Model (DOM), making tasks like selecting elements, traversing the DOM, and manipulating content much easier and cross-browser compatible.
* It provides a straightforward and consistent API for handling various user events (clicks, hovers, form submissions), simplifying interactive elements.
* jQuery streamlines AJAX requests, making it simple to fetch data from servers asynchronously without page reloads.
* jQuery abstracts away many browser-specific quirks, allowing developers to write less code that works consistently across different browsers.
* The jQuery UI library extends jQuery with a collection of highly customizable and themeable UI widgets (like date pickers, sliders, tabs, accordions) and interactions (draggable, droppable), enabling the quick addition of complex UI functionalities.

Together, Bootstrap and jQuery provide a powerful combination for building modern, responsive, and interactive web applications efficiently.

---

## 🚀 Example Flow

1.  A user lands on the homepage. The **Bootstrap Navbar** at the top provides clear links to different sections (e.g., Home, About Us, Services, Contact).
2.  On a desktop screen, content might be displayed in a `col-md-8` (main content) and `col-md-4` (sidebar) layout within a Bootstrap `container` and `row`. When viewed on a mobile device, Bootstrap's grid system automatically restacks these columns vertically, ensuring readability.
3.  Information is presented within **Bootstrap Cards**, each with a clear header and body. These cards stack neatly on smaller screens and arrange themselves in a grid on larger screens.
4.  If a form is present, it utilises **Bootstrap Form components** for input fields, labels, and validation feedback. If jQuery Widgets were integrated, a user might interact with a custom slider for selecting a range of values or use a date picker for selecting a date in a booking form.
5.  Throughout the site, **Bootstrap utility classes** are used for consistent spacing (e.g., `mb-3` for margin-bottom), text alignment (`text-center`), and background colors (`bg-light`), ensuring a clean and unified aesthetic.

---

## 🌐 Website public URL

[Github Pages URL](https://kamilwo.github.io/step8up-week3-website)

---

## 🔍 Validation

[W3 HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkamilwo.github.io%2Fstep8up-week3-website%2F)

[W3 CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkamilwo.github.io%2Fstep8up-week3-website&profile=css3svg&usermedium=all&warning=1)

### Automated Testing Tools
- **HTML Validation** ✓
  - Use [W3C Markup Validation Service](https://validator.w3.org/)
  - Ensure all pages pass without errors
  - Check for proper semantic structure

- **CSS Validation** 🎨
  - Use [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
  - Verify CSS syntax and properties
  - Check for vendor prefix requirements

- **Accessibility Testing** ♿
  - Use [WAVE Web Accessibility Tool](https://wave.webaim.org/)
  - Check ARIA labels and roles
  - Verify color contrast ratios
  - Test keyboard navigation

- **Responsive Design Testing** 📱
  - Use Chrome DevTools Device Emulation
  - Test on multiple real devices
  - Verify breakpoints functionality

### Manual Testing Checklist
1. **Cross-browser Testing** 🌐
- Chrome
- Firefox
- Safari
- Edge

2. **Functionality Testing** ⚙️
- Navigation links
- Form submissions
- Interactive elements
- Search functionality

3. **Content Review** 📝
- Spelling and grammar
- Image alt texts
- Link text clarity
- Content consistency

4. **Performance Testing** ⚡
- Page load times
- Image optimization
- CSS/JS minification
- Mobile performance

5. **User Experience Testing** 👥
- Navigation flow
- Form usability
- Error message clarity
- Mobile touch targets

--

## 📚 Resources

The following resources were invaluable during the development of this project:

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap Components](https://getbootstrap.com/docs/5.3/components/alerts/)
- [Bootstrap Utility Classes](https://getbootstrap.com/docs/5.3/utilities/spacing/)
- [GitHub Pages: Getting Started](https://docs.github.com/en/pages/getting-started-with-github-pages)
- [jQuery UI Widgets Documentation](https://api.jqueryui.com/category/widgets/)
- [jQuery UI Demos and Code Samples](https://jqueryui.com/)
- [Google Speed Libraries](https://developers.google.com/speed/libraries)
