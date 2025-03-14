export function handleNavigation() {
  const navLinks = document.querySelectorAll('.navbar-link');
  const sections = document.querySelectorAll('article[data-page]');

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
}
