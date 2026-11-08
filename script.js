const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('estimateForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Website estimate request — ' + (data.get('service') || 'New project'));
  const body = encodeURIComponent(
    'WesTex Roofing and Construction LLC estimate request\\n\\n' +
    'Name: ' + data.get('name') + '\\n' +
    'Phone: ' + data.get('phone') + '\\n' +
    'Email: ' + (data.get('email') || 'Not provided') + '\\n' +
    'Service: ' + data.get('service') + '\\n\\n' +
    'Project details:\\n' + (data.get('details') || 'Not provided') + '\\n'
  );
  document.getElementById('formStatus').textContent =
    'Your email app should open with the request prepared. Add your business email address in script.js before publishing.';
  // Replace this placeholder with your preferred business inbox before launch.
  window.location.href = 'mailto:REPLACE-WITH-YOUR-EMAIL@example.com?subject=' + subject + '&body=' + body;
});
