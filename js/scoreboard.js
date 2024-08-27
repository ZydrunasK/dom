import { header } from './header.js';
header('scoreboard');

const homeDOM = document.getElementsByClassName('.board:first-child');
const homeOne = document.querySelector('button:first-child');
const homeTwo = document.querySelector('button:nth-child(2)');
const homeThree = document.querySelector('button:last-child');
const homeScore = document.querySelector('.score');

const guestDOM = document.getElementsByClassName('.board:last-child');
const guestOne = document.querySelector('button:first-child');
const guestTwo = document.querySelector('button:nth-child(2)');
const guestThree = document.querySelector('button:last-child');
const guestScore = document.querySelector('.score');

let homeCount = 0;
let guestCount = 0;

function upOne() {
    homeScore.textContent = ++homeCount;
}
function upTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}
function upThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

homeOne.addEventListener('click', upOne)
homeTwo.addEventListener('click', upTwo)
homeThree.addEventListener('click', upThree)