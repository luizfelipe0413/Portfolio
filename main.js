const lightModeIcon = document.getElementById('lightmode');
const darkModeIcon = document.getElementById('darkmode');

lightModeIcon.addEventListener('click', () => {
    lightModeIcon.classList.add('clicked');
    darkModeIcon.classList.add('clicked');
});

darkModeIcon.addEventListener('click', () => {
    lightModeIcon.classList.remove('clicked');
    darkModeIcon.classList.remove('clicked');
});

