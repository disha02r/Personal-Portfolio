// Dynamic Text Animation
const dynamicText = document.querySelector('.dynamic-text');
const roles = ['Full Stack Developer', 'Web Designer', 'Freelancer'];
let i = 0;

function changeText() {
  dynamicText.textContent = roles[i];
  i = (i + 1) % roles.length;
}

setInterval(changeText, 2000);

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form Submission Handling
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Your message has been submitted!');
});