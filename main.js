const hamburger = document.querySelector('.hamburger');
const navul = document.querySelector('.navul');
const main = document.querySelector('.main');
const works = document.getElementById('portfolio');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navul.classList.toggle('active');
  main.classList.toggle('active');
});

document.querySelectorAll('.navitem').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navul.classList.remove('active');
  main.classList.remove('active');
}));

const projects = [
  {
    id: 'proj1',
    title: 'CheckLister',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,
    description:
            'CheckLister App is a simple web app that helps to organize your day.It simply lists the things that you need to do and allows you to mark them as complete,delete a task or add a new task and you can even clean all of the completed tasks if you want.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './images/Todolist.PNG',
    live: 'https://checklister-com.onrender.com/',
    source: 'https://github.com/lucy-sees/CheckLister',
  },

  {
    id: 'proj2',
    title: 'NinjaReader',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,
    description:
            'NinjaReader is a dynamic online platform dedicated to book enthusiasts. It offers a vast selection of books across various genres, enabling users to browse, review, and purchase their favorite reads with ease.',

    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: './Assets/images/ninja.png',
    live: 'https://ninja-reader.vercel.app/',
    source: 'https://github.com/lucy-sees/NinjaReader',
  },

  {
    id: 'proj3',
    title: 'Stocks API',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
            'StocksAPI is a metrics app that fetches stocks data via API, built with React JavaScript framework and Redux ',
    technologies: {
      tech1: 'React',
      tech2: 'Redux',
    },
    image: './images/stocks.PNG',
    live: 'https://stocks-api-app.vercel.app/',
    source: 'https://github.com/lucy-sees/Stocks-API-App',
  },

  {
    id: 'proj4',
    title: 'Leaderboard',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
            ' Leaderboard project is a versatile and engaging platform that aims to foster healthy competition and collaboration among individuals or teams in various fields or activities. Whether its a coding competition, a fitness challenge, a gaming tournament, or any other type of competitive endeavor, the Leaderboard project provides a centralized space to track and showcase participants progress, achievements, and rankings.',
    technologies: {
      tech1: 'React',
    },
    image: './images/Leaderboard.PNG',
    live: 'https://lucy-sees.github.io/Leaderboard/',
    source: 'https://github.com/lucy-sees/Leaderboard',
  },
  {
    id: 'proj5',
    title: 'Movie Monday',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
            ' Movie Monday is a dynamic web application designed for movie enthusiasts to explore, discover, and engage with the world of cinema. This repository contains the source code and files for the Movie Monday website, an online platform dedicated to enhancing the movie-watching experience.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'api',
    },
    image: './images/Movie-Monday.PNG',
    live: 'https://lucy-sees.github.io/Movie-Monday/',
    source: 'https://github.com/lucy-sees/Movie-Monday',
  },
  {
    id: 'proj6',
    title: 'Math-Magician',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
            ' Math Magician, users can access a wide range of functionalities that cater to different mathematical needs. The application supports basic arithmetic operations such as addition, subtraction, multiplication, and division, allowing users to quickly perform calculations with ease. Additionally, Math Magician goes beyond simple arithmetic and includes advanced features like exponentiation, square roots, factorials, and more, enabling users to tackle complex mathematical tasks effortlessly.',
    technologies: {
      tech1: 'html',
      tech2: 'Css',
      tech3: 'JSX',
      tech4: 'Api',
      tech5: 'REACT',
    },
    image: './images/Math-magician.PNG',
    live: 'https://math-magician-eo3z.onrender.com/Calculator',
    source: 'https://github.com/lucy-sees/Math-Magician',
  },
  {
    id: 'proj7',
    title: 'Space Travelers Hub',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
            "Space Traverlers' Hub is a corporation that offers services for commercial and scientific space flight has a web application called Space-Travelers-Hub. Users of the app will be able to reserve rockets and sign up for particular space missions.",
    technologies: {
      tech1: 'html',
      tech2: 'Css',
      tech3: 'JSX',
      tech4: 'Api',
      tech5: 'REACT',
      tech6: 'Redux',
    },
    image: './images/Space-hub.png',
    live: 'https://space-travel-hub-dupt.onrender.com/',
    source: 'https://github.com/lucy-sees/Space-Hub',
  },
  {
    id: 'proj8',
    title: 'ECOCLIMA',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
            'ECOCLIMA Revolutionizing climate action with an environmental-social app. Stay informed and connected to protect our planet. Real-time air quality updates and a supportive community. Embrace positive peer pressure for a sustainable future. Join us in making a collective impact for a greener world',
    technologies: {
      tech1: 'html',
      tech2: 'Css',
      tech3: 'JSX',
      tech4: 'Api',
      tech5: 'REACT',
      tech6: 'Redux',
    },
    image: './images/EcoClima.png',
    live: 'https://github.com/lucy-sees/EcoClima',
    source: 'https://github.com/lucy-sees/EcoClima',
  },
  {
    id: 'proj9',
    title: 'TASKMATE',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2023,

    description:
            'TaskMate is a user-friendly React app that simplifies task management and enhances productivity. With its intuitive interface, users can easily create, organize, and prioritize tasks. The app offers features like due dates, reminders, and advanced filtering, allowing users to stay on top of their responsibilities.',
    technologies: {
      tech1: 'html',
      tech2: 'Css',
      tech3: 'JSX',
      tech5: 'REACT',
    },
    image: './images/TaskMate.PNG',
    live: 'https://#.com/',
    source: 'https://github.com/lucy-sees/Taskmate',
  },
];
let count = 1;
projects.forEach((project) => {
  const newdiv = document.createElement('div');
  newdiv.innerHTML = `
  <div class="cards">
    <div class="image">
        <img src="${project.image}" alt="image">
    </div>
    <div class="desc">
        <h2 class="title">${project.title}</h2>
        <ul class="icons fav">
            <li class="cano">${project.company}</li>
            <li class="dev"><img src="./Assets/images/counter-images.png" alt="dot">&nbsp; ${project.specialization
}</li>
            <li class="dev"><img src="./Assets/images/counter-images.png" alt="dot">&nbsp; ${project.year
}</li>
        </ul>
        <p class="desctext">
        ${project.description}
        </p>
        <ul class="tech icons">
        ${Object.values(project.technologies)
    .map((tech) => `<li class="techitems">${tech}</li>`)
    .join('\n')}
      </ul>
      
        <button type="button" id="${project.id
}" class="see">See Project</button>
    </div>
  </div>`;
  works.append(newdiv);
});

const image = document.querySelectorAll('.image');
image.forEach((im) => {
  if (count % 2 === 0) {
    im.classList.add('two');
  }
  count += 1;
});

const seeproject = document.querySelectorAll('.see');
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
      <button class="close">&times;</button>
    </div>
    <ul class="icons fav">
      <li class="cano">${pop.company}</li>
      <li class="dev"><img src="./Assets/images/counter-images.png" alt="dot">&nbsp; ${pop.specialization
}</li>
      <li class="dev"><img src="./Assets/images/counter-images.png" alt="dot">&nbsp; ${pop.year
}</li>
    </ul>
    </div>
    <img src="${pop.image}" alt="live">
    <div class="explain">
      <p class="desctext">
        ${pop.description}
      </p>
      <div class="smart">
      <ul class="tech icons">
      ${Object.values(pop.technologies)
    .map((tech) => `<li class="techitems">${tech}</li>`)
    .join('\n')}
      </ul>
    
          <div class="btns">
            <button type="button" id="live" class="but">See live &nbsp; &nbsp;
              <img src="./images/live.png" alt="live">
            </button>
            <button type="button" id="source" class="but">See source &nbsp; &nbsp;
              <img src="./images/github.svg" alt="source">
            </button>
          </div>
      </div>
  </div>  `;

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

const formdata = {
  yourname: '',
  youremail: '',
  yourmessage: '',
};

const fields = [...document.querySelectorAll('.names')];
fields.forEach((n) => n.addEventListener('change', () => {
  const index = fields.indexOf(n);
  if (index === 0) {
    formdata.yourname = document.forms[0].elements[index].value;
  } else if (index === 1) {
    formdata.youremail = document.forms[0].elements[index].value;
  } else formdata.yourmessage = document.forms[0].elements[index].value;

  window.localStorage.setItem('formdata', JSON.stringify(formdata));
}));

if (window.localStorage.getItem('formdata') !== null) {
  const formdata = JSON.parse(window.localStorage.getItem('formdata'));
  document.forms[0].elements[0].value = formdata.yourname;
  document.forms[0].elements[1].value = formdata.youremail;
  document.forms[0].elements[2].value = formdata.yourmessage;
}

const intouch = document.getElementById('intouch');

intouch.addEventListener('click', () => {
  const email = document.forms[0].elements[1].value;
  const small = document.getElementById('small');
  if (email.toLowerCase() !== email) {
    small.innerText = 'Enter your email in lower case letters';
    document.forms[0].addEventListener('submit', (event) => {
      event.preventDefault();
    });
  } else {
    document.forms[0].submit();
  }
});