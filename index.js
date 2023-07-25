// Get the elements for the pop-up menu and the union-bar
const popUpSection = document.querySelector('.pop-up-section');
const unionBar = document.querySelector('.union-bar');
const crossBtn = document.querySelector('.cross-btn');
const popUpItems = document.querySelectorAll('.pop-menu-item');

// Function to toggle the visibility of the pop-up menu
function togglePopUp() {
  popUpSection.classList.toggle('show');
}

// Add a click event listener to the union-bar
unionBar.addEventListener('click', togglePopUp);

// Function to hide the pop-up menu when a menu item is clicked
function hidePopUp() {
  popUpSection.classList.remove('show');
}

// Add a click event listener to each pop-up menu item
popUpItems.forEach((item) => {
  item.addEventListener('click', hidePopUp);
});

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
