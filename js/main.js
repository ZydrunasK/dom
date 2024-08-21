// CRUD - (Create Read Update Delete)

// 1. susirandi DOMinanti elementa
// 2. perskaitai jame esancia informacija

// 1. susirandi DOMinanti elementa
// 2. susikontstruoji nauja HTML (string)
// 3. HTML istatai i norima vieta ir taip
// gauni nauja/naujus elementus

// 1. susirandi DOMinanti elementa
// 2. ji, arba jame esanti turini pasalini/modifikuoji

const homeDOM = document.getElementById('home');
console.log(homeDOM);

const footerDOM = document.getElementById('main_footer');
console.log(footerDOM);

const linksDOM = document.getElementsByTagName('a');
console.log(linksDOM);

const h1DOM = document.getElementsByTagName('h1');
console.log(h1DOM);

const h2DOM = document.getElementsByTagName('h2');
console.log(h2DOM[1]);

console.log(document.getElementsByClassName('red'));
