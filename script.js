// Portfolio section populating
const portfolios = [
  {
    id: 1,
    title: 'My Portfolio',
    tech: 'HTML, CSS, JavaScript',
    description: 'This project is a visually stunning portfolio website showcasing my work and skills. Built using HTML, CSS, and JavaScript, it provides an interactive and engaging experience for visitors.',
    git: 'https://github.com/Shamseer88/html-css-js-portfolio',
    websiteLink: 'https://shamseer88.github.io/html-css-js-portfolio/',
    image: 'images/my-portfolio.png'
  },
  {
    id: 2,
    title: 'Counter App',
    tech: 'HTML, CSS, JavaScript',
    description: 'This app, developed using HTML, CSS, and JavaScript, features interactive buttons that increment, decrement, and reset a displayed number. It provides a user-friendly interface for manipulating values with ease.',
    git: 'https://github.com/Shamseer88/counter-javascript',
    websiteLink: 'https://shamseer88.github.io/counter-javascript/',
    image: 'images/counter-app.png'
  },
  {
    id: 3,
    title: 'Review Carousal',
    tech: 'HTML, CSS, JavaScript',
    description: 'Review Carousal is an engaging project that allows users to cycle through reviews using intuitive navigation: next and previous buttons for sequential browsing and a random button for a surprising twist.',
    git: 'https://github.com/Shamseer88/review-carousal',
    websiteLink: 'https://shamseer88.github.io/review-carousal/',
    image: 'images/review.png'
  },
  {
    id: 4,
    title: 'Spotify Landing Page',
    tech: 'HTML, CSS',
    description: "Crafted with HTML and CSS, it brings the essence of Spotify's interface to all devices, creating an immersive and user-friendly experience.",
    git: 'https://github.com/Shamseer88/Spotify-Landing-Page',
    websiteLink: 'https://shamseer88.github.io/Spotify-Landing-Page/',
    image: 'images/spotify.png'
  },
  {
    id: 5,
    title: 'Weather Update',
    tech: 'HTML, CSS, JavaScript',
    description: 'Our web app uses HTML, CSS, and JavaScript to display real-time weather data for any city. Enjoy a visually appealing interface with temperature, humidity, wind speed, and atmospheric pressure information.',
    git: 'https://github.com/Shamseer88/weather-app',
    websiteLink: 'https://shamseer88.github.io/weather-app/',
    image: 'images/weather-app.png'
  },
  {
    id: 6,
    title: 'To-Do List',
    tech: 'HTML, CSS, JavaScript',
    description: 'Todo List app! Built with HTML, CSS, and JavaScript, it allows you to add and delete todos. Your data is stored in the browser, ensuring seamless access across sessions. ',
    git: 'https://github.com/Shamseer88/todo-list',
    websiteLink: 'https://shamseer88.github.io/todo-list/',
    image: 'images/todo-list.png'
  }
]

const cards = document.querySelector('.portfolio-cards')
portfolios.forEach(function(portfolio) {
  window.addEventListener('DOMContentLoaded', function() {
    const card = document.createElement('div');
    card.className = 'card portfolio-card';
    cards.appendChild(card);
    
    const cardImg = document.createElement('img');
    cardImg.className = 'card-img-top';
    cardImg.src = portfolio.image;
    card.appendChild(cardImg);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title portfolio-card-title';
    cardTitle.innerText = portfolio.title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.className = 'card-text portfolio-card-text';
    cardText.innerText = 'Technology used: '+portfolio.tech;
    cardBody.appendChild(cardText);

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    card.appendChild(overlay);

    const overlayText = document.createElement('div');
    overlayText.className = 'text';
    overlay.appendChild(overlayText);

    const overlayDescription = document.createElement('p');
    overlayDescription.innerText = portfolio.description;
    overlayText.appendChild(overlayDescription);

    const githubLink = document.createElement('a');
    githubLink.className = 'btn btn-primary link-btn';
    githubLink.href = portfolio.git;
    githubLink.target = '_blank';
    overlayText.appendChild(githubLink);
    const githubIcon = document.createElement('i');
    githubIcon.className = 'fa-brands fa-github';
    githubLink.appendChild(githubIcon);

    const websiteLink = document.createElement('a');
    websiteLink.className = 'btn btn-primary link-btn';
    websiteLink.href = portfolio.websiteLink;
    websiteLink.target = '_blank';
    overlayText.appendChild(websiteLink);
    const websiteIcon = document.createElement('i');
    websiteIcon.className = 'fa-solid fa-link';
    websiteLink.appendChild(websiteIcon);
  })
})

// Responsive menu
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', function() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'block';
  sidebar.style.zIndex = 999;

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.style.display = 'block'
})

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
})

// Dark Mode
if (localStorage.getItem('darkMode') === null) {
  localStorage.setItem('darkMode', "false");
}
function toggleDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode') === "true";
  const newDarkModeValue = !isDarkMode;
  localStorage.setItem('darkMode', newDarkModeValue.toString());

  const themeLink = document.getElementById('theme-link');
  themeLink.href = newDarkModeValue ? 'dark.css' : 'style.css';
}
const darkModeButton = document.querySelector('.dark-toggle-btn');
darkModeButton.addEventListener('click', toggleDarkMode);

const link = document.createElement('link');
link.rel = 'stylesheet';
document.getElementsByTagName('HEAD')[0].appendChild(link);