document.addEventListener('DOMContentLoaded', function () {
    const unionBar = document.querySelector('.union-bar');
    const crossBtn = document.querySelector('.cross-btn');
    const popUpSection = document.querySelector('.pop-up-section');
    const popUpMenu = document.querySelector('.pop-up');

    unionBar.addEventListener('click', popUp());
    crossBtn.addEventListener('click', popOut());

    function popUp() {
        popUpSection.style.display = 'block';
    }

    function popOut() {
        popUpSection.style.display ='none';
    }
});
