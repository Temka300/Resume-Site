export function handleThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Load theme preference from local storage
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
}
