import { header } from './header.js';
header('scoreboard');

const [homeOne, homeTwo, homeThree] = document.querySelectorAll('.home .btn button');
const [homeScore] = document.querySelectorAll('.home .score');

const [guestOne, guestTwo, guestThree] = document.querySelectorAll('.guest .btn button');
const [guestScore] = document.querySelectorAll('.guest .score');

const periodBtnDOM = document.querySelector('.periodBtn');
const pHomeDOM = document.querySelectorAll('.perHome p');
const pGuestDOM = document.querySelectorAll('.perGuest p');
const thePeriodDOM = document.querySelector('.thePeriod');



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

console.log(thePeriodDOM.textContent === `P${0 + 1}`);

function endPeriod() {
    if (thePeriodDOM.textContent === 'FIN') {
        for (let i = 0; i < 4; i++) {
            thePeriodDOM.textContent = 'P1';
            pHomeDOM[i].textContent = 0;
            pGuestDOM[i].textContent = 0;
            homeCount = 0;
            guestCount = 0;
            homeScore.textContent = 0;
            guestScore.textContent = 0;
            periodBtnDOM.textContent = 'End Period';
            if (i === 3) {
                return '';
            }
        }  
    }
    for (let i = 0; i < 4; i++) {
            if (thePeriodDOM.textContent === `P${i + 1}`) {
            pHomeDOM[i].textContent = 0 + homeCount;
            pGuestDOM[i].textContent = 0 + guestCount;
            break;
        }  
    }
    for (let i = 0; i < 4; i++) {
        if (i === 3) {
         thePeriodDOM.textContent = 'FIN';
         periodBtnDOM.textContent = 'RESTART' 
        }
        if (thePeriodDOM.textContent === `P${i + 1}`) {
        thePeriodDOM.textContent = `P${++i + 1}`; 
        break;
       }
    }
} 

periodBtnDOM.addEventListener('click', endPeriod)