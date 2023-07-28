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

const works = document.getElementById('portifolio');
/**
 * Pop up windows for work section cards
 */
const projects = [
  {
    id: 'proj1',
    title: 'Tonic',
    title2: 'Tonic',
    company: 'CANOPY',
    company2: 'CANOPY',
    specialization: 'Back End Dev',
    specialization2: 'Back End Dev',
    year: 2015,
    year2: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description3:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'Ruby',
      tech5: 'Bootstrap',
    },
    image: './Assets/images/tonic1.svg',
    image2: '../Assets/images/Snapshoot-Portfolio-1.png',
    live: '#',
    source: 'https://github.com/lucy-sees/',
  },

  {
    id: 'proj2',
    title: 'Multi-Post Stories',
    title2: 'Multi-Post',
    company: 'CANOPY',
    company2: 'FACEBOOK',
    specialization: 'Back End Dev',
    specialization2: 'Full Stack Dev',
    year: 2015,
    year2: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description3:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'Ruby',
      tech5: 'Bootstrap',
    },
    image: './Assets/images/multistories.svg',
    image2: '../Assets/images/Snapshoot-Portfolio-2.png',
    live: '#',
    source: 'https://github.com/lucy-sees/',
  },

  {
    id: 'proj3',
    title: 'Tonic',
    title2: 'Facebook 360',
    company: 'CANOPY',
    company2: 'FACEBOOK',
    specialization: 'Back End Dev',
    specialization2: 'Full Stack Dev',
    year: 2015,
    year2: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2:
      'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    description3:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'Ruby',
      tech5: 'Bootstrap',
    },
    image: './Assets/images/tonic2.svg',
    image2: '../Assets/images/Snapshoot-Portfolio-3.png',
    live: '#',
    source: 'https://github.com/lucy-sees/',
  },

  {
    id: 'proj4',
    title: 'Multi-Post Stories',
    title2: 'Uber Navigation',
    company: 'CANOPY',
    company2: 'Uber',
    specialization: 'Back End Dev',
    specialization2: 'Lead Developer',
    year: 2015,
    year2: 2018,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description2:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description3:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'Ruby',
      tech5: 'Bootstrap',
    },
    image: './Assets/images/multistories2.svg',
    image2: '../Assets/images/Snapshoot-Portfolio-4.png',
    live: '#',
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
            <li class="tech_desk"><a>${project.technologies.tech4}</a></li>
            <li class="tech_desk"><a>${project.technologies.tech5}</a></li>
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
            <button type="button" id="source" class="pop-but">See source &nbsp; &nbsp;
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
