import { header } from './header.js';
header('snake');

const formDOM = document.forms[0];
const [widthDOM, heightDOM] = formDOM.querySelectorAll('input');
const [widthNoteDOM, heightNoteDOM] = formDOM.querySelectorAll('.note');
const worldDOM = document.getElementById('world');


const cellSize = 48;
const { clientHeight, clientWidth } = worldDOM;


const width = Math.floor(clientWidth / cellSize);
const height = Math.floor(clientHeight / cellSize);

// uzpildome forma su perskaiciuota info pagal ekrano dydi
widthDOM.value = width;
widthDOM.max = width;
widthNoteDOM.textContent = 'max: ' + width;

heightNoteDOM.textContent = 'max: ' + height;
heightDOM.max = height;
heightDOM.value = height;


// uzpildome pasauli langeliais
worldDOM.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(width)}</div>`.repeat(height)
    +  '<img class="snake" style="top: 0px; left: 0px;" src="snake.png" alt="snake">'
    +  '<img class="chicken" style="top: 96px; left: 96px;" src="chicken.png" alt="snake">';

const snakeDOM = document.querySelector('.snake');
const chickenDOM = document.querySelector('.chicken');


const snakePosition = {
    x: 1,
    y: 1,
};
snakeDOM.style.top = (snakePosition.y * cellSize) + 'px';
snakeDOM.style.left = (snakePosition.x * cellSize) + 'px';

const chickenPosition = {
    x: 2,
    y: 2,
};
chickenDOM.style.top = (chickenPosition.y * cellSize) + 'px';
chickenDOM.style.left = (chickenPosition.x * cellSize) + 'px';











    /* 
clientWidth : 1489
clientHeight : 591
*/