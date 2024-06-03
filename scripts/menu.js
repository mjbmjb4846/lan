function openMenu() {
    let menu = document.querySelector('.menu-container');
    menu.style.animationName = 'slideIn';
    menu.style.display = 'grid';
    let main = document.querySelector('.main-page');
    main.classList.add('blur-in');
    main.classList.remove('blur-out');
}

function closeMenu() {
    let menu = document.querySelector('.menu-container');
    menu.style.animationName = 'slideOut';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 500);
    let main = document.querySelector('.main-page')
    main.classList.add('blur-out');
    main.classList.remove('blur-in');
}

function rulesLink() {
    window.open('https://docs.google.com/document/d/1TS4Oak8E3HXPIS89GzJxD59OXFwOCX0h7Pr0zY1PsoU/edit?usp=sharing');
}

function coin() {
    window.open('https://docs.google.com/spreadsheets/d/1vYN__xNyR_klnWylPA5wJDX_5yOsFXPIdT3Ol9U74uE/edit#gid=0');
}

function openChonkyChonk() {
    window.open('https://doodles.google/doodle/celebrating-garden-gnomes/');
}

function createList(rawData) {
    let data = [];
    let numItems = 0;

    if (rawData === decks[0]) {
        numItems = usedCards[0];
    } else if (rawData === decks[1]) {
        numItems = usedCards[1];
    }

    if (numItems > 1) {
        data = [rawData[0]].concat((rawData.slice(0 - (numItems - 1))).reverse());
    } else if (numItems > 0) {
        data = [rawData[0]];
    } else {
        data = [{ title: "None Found:", description: "The curses you play will show up here!", id: 0 }];
    }

    //data.sort(function(a, b) {
    //    return a.id - b.id;
    //});

    let list = document.createElement('div');
    list.className = 'list';

    let closeButton = document.createElement('button')
    closeButton.textContent = 'X';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.position = 'fixed';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'var(--color-alert)';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.padding = '10px 20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '5px';

    closeButton.addEventListener('click', function() {
        document.body.removeChild(list);
    });

    list.appendChild(closeButton);

    data.forEach(function(item) {
        let card = document.createElement('div');
        let title = document.createElement('h2');
        let description = document.createElement('p');

        title.textContent = item.title;
        description.textContent = item.description;

        card.appendChild(title);
        card.appendChild(description);

        card.addEventListener('click', function() {
            copyText(`CURSE ${item.id}: ${item.title.toUpperCase()}\n   - ${item.description}`);
        });

        list.appendChild(card);
    });

    document.body.appendChild(list);
}

function imgCompose() {
    window.open('picMusic.html', '_blank');
}

function getVW(percent = 100) {
    // Find the CSS property for Viewport Width (vw):

    return window.innerWidth * (percent / 100);
}

function getVH(percent = 100) {
    // Find the CSS property for Viewport Height (vh):

    return window.innerHeight * (percent / 100);
}