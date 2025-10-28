const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('nav ul');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

const yearTarget = document.querySelector('[data-current-year]');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const forms = document.querySelectorAll('form[data-netlify="true"]');
forms.forEach((form) => {
  form.addEventListener('submit', () => {
    const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
    if (submitButton) {
      submitButton.setAttribute('aria-busy', 'true');
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
    }
  });
});
