document.addEventListener('DOMContentLoaded', function () {
  // Navigation functionality (from navigation.js and script.js)
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

  // Theme toggle functionality (merged from themeToggle.js)
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.setAttribute('name', 'sunny-outline');
  }
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      themeIcon.setAttribute('name', 'sunny-outline');
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.setAttribute('name', 'moon-outline');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Modal and navbar functionality (from script.js)
  const navbar = document.querySelector('.navbar');
  const modalCloseButtons = document.querySelectorAll('.modal-close-button');
  modalCloseButtons.forEach(button => {
    button.addEventListener('click', function () {
      document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
      });
      navbar.style.display = 'block';
    });
  });
  window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  });

  // Blog modal functionality (from index.html inline script)
  const blogLinks = document.querySelectorAll('.blog-link');
  const modal = document.getElementById('blog-modal');
  const modalContent = document.getElementById('blog-modal-content');

  blogLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const blogId = this.getAttribute('data-blog-id');
      let blogContent = '';
      if (blogId === '1') {
        blogContent = `
                <h2>Design conferences in 2022</h2>
                <img src="./assets/images/blog-1.jpg" alt="Design conferences in 2022" style="width: 100%; height: auto; margin-bottom: 20px;">
                <p>Veritatis et quasi architecto beatae vitae dicta sunt, explicabo...</p>
                <p>Design conferences provide a great opportunity for designers to network, learn about the latest trends, and get inspired by industry leaders. In 2022, many conferences are offering both in-person and virtual options to accommodate different preferences.</p>
                <p>Some of the most anticipated design conferences include:</p>
                <ul style="margin-left: 20px; margin-bottom: 20px;">
                </ul>
                <pre><code class="language-javascript">const example = 'Hello, World!';\nconsole.log(example);</code></pre>
                <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            `;
      } else if (blogId === '2') {
        blogContent = `
                <h2>Best fonts every designer</h2>
                <img src="./assets/images/blog-2.jpg" alt="Best fonts every designer" style="width: 100%; height: auto; margin-bottom: 20px;">
                <p>Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi...</p>
                <p>Choosing the right font can make or break your design. Here are some versatile fonts that every designer should consider adding to their toolkit:</p>
                <ul style="margin-left: 20px; margin-bottom: 20px;">
                </ul>
                <pre><code class="language-css">body {\n  font-family: 'Poppins', sans-serif;\n}\n\nh1, h2, h3 {\n  font-family: 'Playfair Display', serif;\n}</code></pre>
                <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            `;
      }
      modalContent.innerHTML = blogContent;
      modal.style.display = 'block';
      navbar.style.display = 'none';
    });
  });
});

// Preloader functionality
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

// Global copyCode function to allow code copying
function copyCode(button) {
  const code = button.previousElementSibling.textContent;
  navigator.clipboard.writeText(code).then(() => {
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = 'Copy Code';
    }, 2000);
  });
}

