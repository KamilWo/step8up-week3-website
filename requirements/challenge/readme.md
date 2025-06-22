# Migrating a Site to Bootstrap

## Challenge

Bootstrap is not only a great tool for scaffolding websites quickly, but its utility classes and pre-made components make it an excellent choice for maintaining and updating existing sites. For this reason, developers often migrate existing sites to Bootstrap to simplify updates and continued support.

In this challenge, you will take one of your existing projects (either from Week 1 or Week 2) and migrate it to Bootstrap. The final project should be deployed using GitHub Pages, so it is accessible online. You've also learnt about jQuery Widgets, so feel free to use any Widgets that you feel might enhance your site further

## Key Learnings

By completing this exercise, you will:

- Gain practical experience in using Bootstrap within a website.
- Learn how to incorporate Bootstrap's responsive grid system, components, and utility classes into an existing project.
- Understand the benefits of using a front-end framework like Bootstrap for easier maintenance and scalability.
- Practice deploying a site using GitHub Pages.
- (optional) Gain experience of installing and using jQuery Widgets

## User Story

As a developer, I want to migrate my existing website to Bootstrap so that I can leverage its responsive design, utility classes, and pre-built components for easier updates and maintenance.

## Acceptance Criteria

- Take an existing site from Week 1 or Week 2 and migrate it to use Bootstrap for layout, styling, and components.
- Incorporate Bootstrap's responsive grid system to ensure the site is mobile-friendly.
- Use at least **three Bootstrap components** (e.g., Navbar, Cards, Buttons, Forms) to replace existing UI elements.
- Utilize **Bootstrap utility classes** (e.g., spacing, text alignment, background colors) to simplify styling.
- Ensure the migrated site looks clean, responsive, and functions correctly across various screen sizes.
- If using jQuery Widgets, ensure they are installed and working correctly
- Deploy the migrated site using GitHub Pages, ensuring it is publicly accessible.

## Getting Started

1. **Choose an existing site:**

   - Select one of your previous projects from Week 1 or Week 2 that you will be migrating to Bootstrap.

2. **Add Bootstrap to your project:**
   - Include Bootstrap's CSS and JavaScript in your HTML file by adding the following lines inside the `<head>` section:
     ```html
     <link
       href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
       rel="stylesheet"
     />
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
     ```
3. **Migrate the layout to Bootstrap:**

   - Use Bootstrap's [Grid System](https://getbootstrap.com/docs/4.5/layout/grid/) to restructure your layout for responsiveness. For example:
     ```html
     <div class="container">
       <div class="row">
         <div class="col-md-6">
           <!-- Your content here -->
         </div>
         <div class="col-md-6">
           <!-- Your content here -->
         </div>
       </div>
     </div>
     ```

4. **Incorporate Bootstrap components:**

   - Replace existing UI elements with Bootstrap components. For example, replace a navigation menu with the [Navbar component](https://getbootstrap.com/docs/4.5/components/navbar/):
     ```html
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="#">Navbar</a>
       <div class="collapse navbar-collapse">
         <ul class="navbar-nav mr-auto">
           <li class="nav-item">
             <a class="nav-link" href="#">Home</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">About</a>
           </li>
         </ul>
       </div>
     </nav>
     ```

5. **Use Bootstrap utility classes:**

   - Simplify your CSS by replacing custom styles with Bootstrap's utility classes (e.g., `.text-center`, `.mt-4`, `.bg-primary`).

6. **Test responsiveness:**

   - Ensure that your site is responsive and works well on different screen sizes.

7. **Deploy the site on GitHub Pages:**
   - Push your migrated project to GitHub and [deploy it on GitHub Pages](https://pages.github.com/).

## Example

Here’s an example of how you might convert a simple header and layout into Bootstrap:

```html
<header class="bg-primary text-white text-center p-3">
  <h1>My Bootstrap Website</h1>
</header>

<div class="container mt-4">
  <div class="row">
    <div class="col-md-8">
      <p>This is the main content area.</p>
    </div>
    <div class="col-md-4">
      <p>This is the sidebar.</p>
    </div>
  </div>
</div>
```

## Submission

Once your site has been migrated and deployed, submit the link to your GitHub Repo and GitHub Pages deployment.

## Additional Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
- [Bootstrap Components](https://getbootstrap.com/docs/4.5/components/alerts/)
- [Bootstrap Utility Classes](https://getbootstrap.com/docs/4.5/utilities/spacing/)
- [GitHub Pages: Getting Started](https://docs.github.com/en/pages/getting-started-with-github-pages)
- [jQuery UI Widgets Documentation](https://api.jqueryui.com/category/widgets/)
- [jQuery UI Demos and Code Samples](https://jqueryui.com/)
