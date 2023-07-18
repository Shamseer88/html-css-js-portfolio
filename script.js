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
    title: 'My Portfolio',
    tech: 'HTML, CSS, JavaScript',
    description: 'This project is a visually stunning portfolio website showcasing my work and skills. Built using HTML, CSS, and JavaScript, it provides an interactive and engaging experience for visitors.',
    git: 'https://github.com/Shamseer88/html-css-js-portfolio',
    websiteLink: 'https://shamseer88.github.io/html-css-js-portfolio/',
    image: 'images/my-portfolio.png'
  },
  {
    id: 4,
    title: 'Counter App',
    tech: 'HTML, CSS, JavaScript',
    description: 'This app, developed using HTML, CSS, and JavaScript, features interactive buttons that increment, decrement, and reset a displayed number. It provides a user-friendly interface for manipulating values with ease.',
    git: 'https://github.com/Shamseer88/counter-javascript',
    websiteLink: 'https://shamseer88.github.io/counter-javascript/',
    image: 'images/counter-app.png'
  },
  {
    id: 5,
    title: 'My Portfolio',
    tech: 'HTML, CSS, JavaScript',
    description: 'This project is a visually stunning portfolio website showcasing my work and skills. Built using HTML, CSS, and JavaScript, it provides an interactive and engaging experience for visitors.',
    git: 'https://github.com/Shamseer88/html-css-js-portfolio',
    websiteLink: 'https://shamseer88.github.io/html-css-js-portfolio/',
    image: 'images/my-portfolio.png'
  },
  {
    id: 6,
    title: 'Counter App',
    tech: 'HTML, CSS, JavaScript',
    description: 'This app, developed using HTML, CSS, and JavaScript, features interactive buttons that increment, decrement, and reset a displayed number. It provides a user-friendly interface for manipulating values with ease.',
    git: 'https://github.com/Shamseer88/counter-javascript',
    websiteLink: 'https://shamseer88.github.io/counter-javascript/',
    image: 'images/counter-app.png'
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