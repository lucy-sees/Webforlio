// Get the elements for the pop-up menu and the union-bar
const popUpSection = document.querySelector('.pop-up-section');
const unionBar = document.querySelector('.union-bar');

// Function to toggle the visibility of the pop-up menu
function togglePopUp() {
  popUpSection.classList.toggle('show');
}

// Add a click event listener to the union-bar
unionBar.addEventListener('click', togglePopUp);

// Get all the pop-up menu items
const popUpItems = document.querySelectorAll('.pop-menu-item');

// Function to hide the pop-up menu when a menu item is clicked
function hidePopUp() {
  popUpSection.classList.remove('show');
}

// Add a click event listener to each pop-up menu item
popUpItems.forEach((item) => {
  item.addEventListener('click', hidePopUp);
});

// Get the cross button element
const crossBtn = document.querySelector('.cross-btn');

// Function to hide the pop-up menu when the cross button is clicked
function hidePopUpWithCross() {
  popUpSection.classList.remove('show');
}

// Add a click event listener to the cross button
crossBtn.addEventListener('click', hidePopUpWithCross);

// Scroll smoothly to the section when a menu item is clicked
function smoothScrollToSection(e) {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute('href'));
  if (target) {
    const yOffset = -50; // Optional offset if you have a sticky header
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  hidePopUp();
}

popUpItems.forEach((item) => item.addEventListener('click', smoothScrollToSection));

const works = document.getElementById('portfolio');
/**
 * Pop up windows for work section cards
 */
const projects = [
  {
    id: 'proj1',
    title: 'NinjaReader',
    title2: 'NinjaReader',
    company: 'NinjaReader',
    company2: 'NINJAREADER',
    specialization: 'Front End Dev',
    specialization2: 'Front End Dev',
    year: 2023,
    year2: 2023,
    description:
      'NinjaReader is a dynamic online platform dedicated to book enthusiasts. It offers a vast selection of books across various genres, enabling users to browse, review, and purchase their favorite reads with ease.',
    description2:
      'NinjaReader is a dynamic online platform dedicated to book enthusiasts. It offers a vast selection of books across various genres, enabling users to browse, review, and purchase their favorite reads with ease.',
    description3:
      'NinjaReader is a dynamic online platform dedicated to book enthusiasts. It offers a vast selection of books across various genres, enabling users to browse, review, and purchase their favorite reads with ease.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'Bootstrap',
      tech5: 'Vercel',
    },
    image: './Assets/images/Snapshoot-Portfolio-1.png',
    image2: './Assets/images/Snapshoot-Portfolio-1.png',
    live: 'https://ninja-reader.vercel.app/',
    source: 'https://github.com/lucy-sees/NinjaReader',
  },

  {
    id: 'proj2',
    title: 'Hurudevstech',
    title2: 'HuruDevsTech',
    company: 'HURUDEVSTECH',
    company2: 'HURUDEVSTECH',
    specialization: 'Back End Dev',
    specialization2: 'Full Stack Dev',
    year: 2024,
    year2: 2024,
    description:
      'A collection of awesome creations. Here you will find the latest trends, tips, and tricks on how to build stunning apps. You will also discover the amazing projects that our team has created. Whether you are a beginner or an expert, Huru Devs Tech will inspire you to learn more and create more. Join us today and become part of the Huru Devs Tech community.',
    description2:
      'A collection of awesome creations. Here you will find the latest trends, tips, and tricks on how to build stunning apps. You will also discover the amazing projects that our team has created. Whether you are a beginner or an expert, Huru Devs Tech will inspire you to learn more and create more. Join us today and become part of the Huru Devs Tech community.',
    description3:
      'A collection of awesome creations. Here you will find the latest trends, tips, and tricks on how to build stunning apps. You will also discover the amazing projects that our team has created. Whether you are a beginner or an expert, Huru Devs Tech will inspire you to learn more and create more. Join us today and become part of the Huru Devs Tech community',
    technologies: {
      tech1: 'React.js',
      tech2: 'Node.js',
      tech3: 'Express.js',
      tech4: 'css',
      tech5: 'Vercel',
    },
    image: '../Assets/images/Snapshoot-Portfolio-2.png',
    image2: './Assets/images/Snapshoot-Portfolio-2.png',
    live: 'https://hurudevs.tech/',
    source: 'https://github.com/lucy-sees/',
  },

  {
    id: 'proj3',
    title: 'metus',
    title2: 'metus',
    company: 'METUS',
    company2: 'METUS',
    specialization: 'Front End Dev',
    specialization2: 'Front End Dev',
    year: 2023,
    year2: 2023,
    description:
      'Metus is a startup website designed with HTML, CSS, and Bootstrap. This repository houses the codebase for the Metus website, showcasing the power of these technologies in creating a responsive and user-friendly interface. The website is built with a mobile-first approach, ensuring optimal viewing and interaction experience across a wide range of devices.',
    description2:
      'Metus is a startup website designed with HTML, CSS, and Bootstrap. This repository houses the codebase for the Metus website, showcasing the power of these technologies in creating a responsive and user-friendly interface. The website is built with a mobile-first approach, ensuring optimal viewing and interaction experience across a wide range of devices.',
    description3:
      'Metus is a startup website designed with HTML, CSS, and Bootstrap. This repository houses the codebase for the Metus website, showcasing the power of these technologies in creating a responsive and user-friendly interface. The website is built with a mobile-first approach, ensuring optimal viewing and interaction experience across a wide range of devices. The repository includes all the HTML files, stylesheets, and Bootstrap components used in the project. Contributions to improve the website’s design, performance, and accessibility are highly encouraged.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'bootstrap',
      tech4: 'javaScript',
      tech5: 'vercel',
    },
    image: './Assets/images/Snapshoot-Portfolio-3.png',
    image2: './Assets/images/Snapshoot-Portfolio-3.png',
    live: 'https://metus.vercel.app/',
    source: 'https://github.com/lucy-sees/',
  },

  {
    id: 'proj4',
    title: 'Stocks API app',
    title2: 'Stocks API app',
    company: 'STOCKS API APP',
    company2: 'STOCKS API APP',
    specialization: 'Full Stack Dev',
    specialization2: 'Full Stack Dev',
    year: 2023,
    year2: 2023,
    description:
      'A metrics app that fetches metric data via API, built with React JavaScript framework and Redux',
    description2:
      'A metrics app that fetches metric data via API, from Free stock API where financial statements are in real time & every statement is audited, standardized, and up to date.  It has real time stock price, covers the fundamental data part of the stocks via providing income statement, balance sheet statement and cashflow statement quarterly and annually.',
    description3:
      'A metrics app that fetches metric data via API, from Free stock API where financial statements are in real time & every statement is audited, standardized, and up to date.  It has real time stock price, covers the fundamental data part of the stocks via providing income statement, balance sheet statement and cashflow statement quarterly and annually.',
    technologies: {
      tech1: 'React.js',
      tech2: 'Redux',
      tech3: 'API/testing',
      tech4: 'css',
      tech5: 'Tailwind',
    },
    image: './Assets/images/Snapshoot-Portfolio-4.png',
    image2: './Assets/images/Snapshoot-Portfolio-4.png',
    live: 'https://stocks-api-app.vercel.app/',
    source: 'https://github.com/lucy-sees/',
  },

  {
    id: 'proj5',
    title: 'Photographer website',
    title2: 'Photographer website',
    company: 'Wanjiru',
    company2: 'Wanjiru',
    specialization: 'Front End Dev',
    specialization2: 'Front End Dev',
    year: 2024,
    year2: 2024,
    description:
      'A photographer website that showcases the work of a professional photographer. The website is built with HTML, CSS, and JavaScript, and it features a responsive and user-friendly design. The website is built with a mobile-first approach, ensuring optimal viewing and interaction experience across a wide range of devices.',
    description2:
      'A photographer website that showcases the work of a professional photographer. The website is built with HTML, CSS, and JavaScript, and it features a responsive and user-friendly design. The website is built with a mobile-first approach, ensuring optimal viewing and interaction experience across a wide range of devices.',
    description3:
      'A photographer website that showcases the work of a professional photographer. The website is built with HTML, CSS, and JavaScript, and it features a responsive and user-friendly design. The website is built with a mobile-first approach, ensuring optimal viewing and interaction experience across a wide range of devices.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'Bootstrap',
      tech5: 'Vercel',
    },
    image: './Assets/images/Snapshoot-Portfolio-5.png',
    image2: './Assets/images/Snapshoot-Portfolio-5.png',
    live: 'https://wanjiru.vercel.app/',
    source: 'https://github.com/lucy-sees/',
  },

  {
    id: 'proj6',
    title: 'Bank website',
    title2: 'Bank website',
    company: 'BlueBank',
    company2: 'BlueBank',
    specialization: 'Front End Dev',
    specialization2: 'Front End Dev',
    year: 2024,
    year2: 2024,
    description:
      'A bank website that showcases the work and services offered by a professional bank. The website is built with NextJS, and it features a responsive and user-friendly design. The website is built with a mobile-first approach, ensuring optimal viewing and interaction experience across a wide range of devices.',
    description2:
      'A bank website that showcases the work and services offered by a professional bank. The website is built with NextJS, and it features a responsive and user-friendly design. The website is built with a mobile-first approach, ensuring optimal viewing and interaction experience across a wide range of devices.',
    description3:
      'A bank website that showcases the work and services offered by a professional bank. The website is built with NextJS, and it features a responsive and user-friendly design. The website is built with a mobile-first approach, ensuring optimal viewing and interaction experience across a wide range of devices.',
    technologies: {
      tech1: 'ReactJS',
      tech2: 'NextJS',
      tech3: 'javaScript',
      tech4: 'Tailwind',
      tech5: 'Vercel',
    },
    image: './Assets/images/Snapshoot-Portfolio-6.png',
    image2: './Assets/images/Snapshoot-Portfolio-6.png',
    live: 'https://blue-bank-bb.vercel.app/',
    source: 'https://github.com/lucy-sees/',
  },

];

let count = 1;
projects.forEach((project) => {
  const newdiv = document.createElement('div');
  newdiv.innerHTML = `
  <div class="container-work-mobile">
    <div class="cards-mobile">
      <div class="card-mobile">
        <div class="card-image">
          <img src="${project.image}" alt="image-mobile" class="image-mobile">
        </div>
        <div class="desc">
          <h2 class="project-title">${project.title}</h2>
          <ul class="project-badges">
            <li><p class="project-company no-spacing">${project.company}&nbsp;&nbsp;<img src="./Assets/images/counter-images.png" alt="dot" class="counter-image">&nbsp;&nbsp;</p></li>
            <li><p class="specialization no-spacing">${project.specialization}&nbsp;&nbsp;<img src="./Assets/images/counter-images.png" alt="dot" class="counter-image">&nbsp;&nbsp;</p></li>
            <li><p class="year no-spacing">${project.year}</p></li>
          </ul>
          <p class="project-description">${project.description}</p>
          <ul class="stack">
            <li><a>${project.technologies.tech1}</a></li>
            <li><a>${project.technologies.tech2}</a></li>
            <li><a>${project.technologies.tech3}</a></li>
          </ul>
          <button type="button" id="${project.id}" class="see-btn">See Project</button>
       </div>
      </div>
    </div>
  </div> 
  
  <div class="container-work-desk">
     <div class="cards-desk">
      <div class="card-desk">
        <div class="card-image-desk">
          <img src="${project.image2}" alt="image-desk" class="image-desk">
        </div>
        <div class="desc-desk">
          <h2 class="project-title-desk">${project.title2}</h2>
          <ul class="project-badges">
            <li><p class="project-company-desk no-spacing">${project.company2}&nbsp;&nbsp;<img src="./Assets/images/counter-images.png" alt="dot" class="counter-image">&nbsp;&nbsp;</p></li>
            <li><p class="specialization-desk no-spacing">${project.specialization2}&nbsp;&nbsp;<img src="./Assets/images/counter-images.png" alt="dot" class="counter-image">&nbsp;&nbsp;</p></li>
            <li><p class="year-desk">${project.year2}</p></li>
          </ul>
          
          <p class="project-description-desk">${project.description2}</p>
          <ul class="stack-desk">
            <li><a>${project.technologies.tech1}</a></li>
            <li><a>${project.technologies.tech2}</a></li>
            <li><a>${project.technologies.tech3}</a></li>
            <li><a>${project.technologies.tech4}</a></li>
            <li><a>${project.technologies.tech5}</a></li>
            
          </ul>
          <button type="button" id="${project.id}" class="see-btn">See Project</button>
       </div>
      </div>
    </div>
  </div>
  `;
  works.append(newdiv);
});

const image = document.querySelectorAll('.image');
image.forEach((im) => {
  if (count % 2 === 0) {
    im.classList.add('two');
  }
  count += 1;
});

// Popup

const seeproject = document.querySelectorAll('.see-btn');
const overlay = document.getElementById('overlay');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');

seeproject.forEach((p) => p.addEventListener('click', (p) => {
  const { id } = p.target;
  const pop = projects.find((p) => p.id === id);
  popup.innerHTML = `
  <div class="titles">
    <div class="tile">
      <h2 class="title">${pop.title}</h2>
      <h2 class="title-desk">${pop.title2}</h2>
      <button class="close">&times;</button>
    </div>
    <ul class="stack-desk">
      <li><p class="project-company">${pop.company}&nbsp;&nbsp;<img src="./Assets/images/counter-images.png" alt="dot" class="counter-image"></p></li>
      <li><p class="project-company-desk">${pop.company2}&nbsp;&nbsp;<img src="./Assets/images/counter-images.png" alt="dot" class="counter-image"></p></li>
      <li><p class="specialization">${pop.specialization}&nbsp;&nbsp;<img src="./Assets/images/counter-images.png" alt="dot" class="counter-image"></p></li>
      <li><p class="specialization-desk">${pop.specialization2}&nbsp;&nbsp;<img src="./Assets/images/counter-images.png" alt="dot" class="counter-image"></p></li>
      <li><p class="year-desk">${pop.year2}</p></li>
    </ul>

    <div class="pop-up-card">
      <img src="${pop.image}" alt="live" class="pop-img-mobile">
      <img src="${pop.image2}" alt="live" class="pop-img-desk">
      <div class="pop-desc">
        <p class="desctext">${pop.description3}</p>
        <div>
          <ul class="stack">
            <li><a>${pop.technologies.tech1}</a></li>
            <li><a>${pop.technologies.tech2}</a></li>
            <li><a>${pop.technologies.tech3}</a></li>
          </ul>

          <ul class="stack-desk">
            <li><a>${pop.technologies.tech1}</a></li>
            <li><a>${pop.technologies.tech2}</a></li>
            <li><a>${pop.technologies.tech3}</a></li>
            <li class="tech_desk"><a>${pop.technologies.tech4}</a></li>
            <li class="tech_desk"><a>${pop.technologies.tech5}</a></li>
          </ul>
    
          <div class="btns">
            <button type="button" id="live" class="pop-but">See live &nbsp; &nbsp;
              <img src="./Assets/images/see-live.png" alt="live">
            </button>
            <button type="button" id="source" class="pop-but">Source &nbsp; &nbsp;
              <img src="./Assets/images/source.png" alt="source">
            </button>
          </div>
        </div>
      </div>
    </div>  
  </div>`;
  const live = document.getElementById('live');
  const source = document.getElementById('source');

  live.addEventListener('click', () => {
    document.location.href = pop.live;
  });

  source.addEventListener('click', () => {
    document.location.href = pop.source;
  });

  overlay.classList.toggle('active');
  popup.classList.toggle('active');
  over.classList.toggle('active');

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });
}));

/** About dropdowns */
const languageTitle = document.querySelector('.language-title');
const languagesList = document.querySelector('.languages-name');

languageTitle.addEventListener('click', () => {
  languagesList.classList.toggle('visible');
});

const frameworkTitle = document.querySelector('.framework-title');
const frameworksList = document.querySelector('.frameworks-name');

frameworkTitle.addEventListener('click', () => {
  frameworksList.classList.toggle('visible');
});

const skillTitle = document.querySelector('.skill-title');
const skillsList = document.querySelector('.skills-name');

skillTitle.addEventListener('click', () => {
  skillsList.classList.toggle('visible');
});

/** Contact form validation */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const username = document.getElementById('fname');
  const email = document.getElementById('email');

  function addError(elm, msg) {
    const inputControl = elm.parentElement;
    const errorDiv = inputControl.querySelector('.error');
    errorDiv.innerText = msg;
    inputControl.classList.add('error');
  }

  function removeError(elm) {
    const inputControl = elm.parentElement;
    const errorDiv = inputControl.querySelector('.error');
    errorDiv.innerText = '';
    inputControl.classList.remove('error');
  }

  function isLowerCase(str) {
    return str === str.toLowerCase();
  }

  function validateInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    removeError(username);
    removeError(email);

    if (usernameValue === '') {
      addError(username, 'Username is required');
    }
    if (emailValue === '') {
      addError(email, 'Email is required');
    } else if (!isLowerCase(emailValue)) {
      addError(email, 'Email must be in lowercase');
    } else {
      form.submit();
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateInput();
  });
});

/** Add local storage */
const nameData = document.querySelector('input[name="username"]');
const emailData = document.querySelector('input[name="email"]');
const messageData = document.querySelector('textarea[name="user-message"]');

function storeDataLocally() {
  const data = {
    name: nameData.value,
    email: emailData.value,
    message: messageData.value,
  };

  localStorage.setItem('formData', JSON.stringify(data));
}
window.addEventListener('load', () => {
  // Get the saved form data from Local Storage
  const savedData = localStorage.getItem('formData');
  // Check if there is any saved data
  if (savedData) {
    // Parse the JSON string back to an object
    const data = JSON.parse(savedData);

    // Access the form data properties
    nameData.value = data.name;
    emailData.value = data.email;
    messageData.value = data.message;

    // Do whatever you want with the form data...
  }
});
nameData.addEventListener('input', storeDataLocally);
emailData.addEventListener('input', storeDataLocally);
messageData.addEventListener('input', storeDataLocally);
