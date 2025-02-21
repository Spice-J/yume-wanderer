const navBar = document.querySelector(".nav-list");
const img = document.getElementById('carousel-img');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
let navOpen;


//Open/close nav bar function


function openNav() {
    if (navOpen) {
        navBar.style.display = 'none';
        navOpen = false;
    } else if (!navOpen) {
        navBar.style.display = 'block';
        navOpen = true;
    }

}

//image carousel functionality

let pictures = [
    'images/example1.gif',
    'images/example2.gif',
    'images/example3.gif',
    'images/tokyo-dawn-palette.jpg',
    'images/tokyo-day-palette.jpg',
    'images/tokyo-night-palette.png',
    'images/tokyo-night2-palette.jpeg',
    'images/tokyo-night3-palette.jpeg'
]

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length -1) {
        position = 0;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);