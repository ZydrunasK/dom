/**
 * Sugeneruoja <header> elemento HTML ir istato i DOM.
 * @param {string} currentHref norimos pazymeti nuorodos 'href' reiksme
 */
export function header(currentHref) {
    const navData = [
        {
            href: '',
            text: 'Pagrindinis',
        },
        {
            href: 'services',
            text: 'Paslaugos',
        },
        {
            href: 'team',
            text: 'Komanda',
        },
        {
            href: 'basketball',
            text: 'Krepšinis',
        },
        {
            href: 'snake',
            text: 'Žilvinas',
        },
    ];

    let navHTML = '';

    for (const link of navData) {
        let classes = '';

        if (currentHref === link.href) {
            classes = 'link active';
        } else {
            classes = 'link';
        }

        navHTML += `<a class="${classes}" href="../${link.href}">${link.text}</a>`;
    }

    const headerHTML = `
        <header class="header">
            <img class="logo" src="../logo.webp" alt="logo">
            <nav class="nav">${navHTML}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

export function header2(currentHref) {
    const data = [
        { href: '', text: 'Pagrindinis' },
        { href: 'services', text: 'Paslaugos' },
        { href: 'team', text: 'Komanda' },
    ];

    const linkHTML = [];

    for (const { href, text } of data) {
        linkHTML.push(
            `<a class="link ${currentHref === href ? 'active' : ''}" href="../${href}">${text}</a>`
        );
    }

    const HTML = `<header class="header">
            <img class="logo" src="../logo.png" alt="logo">
            <nav class="nav">${linkHTML.join('')}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', HTML);
}