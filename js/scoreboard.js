import { header } from './header.js';
header('scoreboard');

const homeDOM = document.getElementsByClassName('.board:first-child');
const [homeOne, homeTwo, homeThree] = document.querySelectorAll('.home .btn button');
const [homeScore] = document.querySelectorAll('.home .score');

const guestDOM = document.getElementsByClassName('guest');
const [guestOne, guestTwo, guestThree] = document.querySelectorAll('.guest .btn button');
const [guestScore] = document.querySelectorAll('.guest .score');

console.log(document.querySelectorAll('.guest .score'));


let homeCount = 0;
let guestCount = 0;

function upOneH() {
    homeScore.textContent = ++homeCount;
}
function upTwoH() {
    homeScore.textContent = (homeCount += 2);
}
function upThreeH() {
    homeScore.textContent = (homeCount += 3);
}

function upOneG() {
    guestScore.textContent = ++guestCount;
}
function upTwoG() {
    guestScore.textContent = (guestCount += 2);
}
function upThreeG() {
    guestScore.textContent = (guestCount += 3);
}

homeOne.addEventListener('click', upOneH);
homeTwo.addEventListener('click', upTwoH);
homeThree.addEventListener('click', upThreeH)

guestOne.addEventListener('click', upOneG)
guestTwo.addEventListener('click', upTwoG)
guestThree.addEventListener('click', upThreeG)