
let headerDOM = document.getElementsByTagName('header')

const headerArray = [
    {
        link: '../',
        title: 'Home',
    },
    {
        link: '../services',
        title: 'services',
    },
    {
        link: '../about',
        title: 'about',
    },
    {
        link: '../contact',
        title: 'Contact us',
    },
];
// <a href= ""
function headerMaker(arr) {

    let links = '';
    for (let i = 0; i < arr.length; i++) {
        links += `<a href= "${arr[i].link}">${arr[i].title}</a> \n`; 
    }
    const head = `
        <img src="#" alt="logo" />
        <nav>
            ${links}
        </nav>
    `;
    return head;
}

headerDOM[0].innerHTML = headerMaker(headerArray);

