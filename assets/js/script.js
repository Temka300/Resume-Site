document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-link');
  const sections = document.querySelectorAll('article[data-page]');
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      const targetPage = this.textContent.trim().toLowerCase();

      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active class to the clicked link
      this.classList.add('active');

      // Hide all sections
      sections.forEach(section => section.classList.remove('active'));

      // Show the target section
      const targetSection = document.querySelector(`article[data-page="${targetPage}"]`);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });

  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      themeIcon.setAttribute('name', 'sunny-outline');
    } else {
      themeIcon.setAttribute('name', 'moon-outline');
    }
  });
});