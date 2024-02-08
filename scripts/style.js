function preColorMode() {
    let button = document.getElementById('colorMode');
    if (button.innerHTML === '🌚') {
        colormode(false);
        button.innerHTML = '🌞';
    } else {
        colormode(true);
        button.innerHTML = '🌚';
    }
}

function colormode(colorMode) {
    const root = document.documentElement;

    const normalColors = {
        '--black': '#000000',
        '--white': '#FFFFFF',
        '--color-light': '#FAE1FA',
        '--color-medium': '#AA41C0',
        '--color-dark': '#6441C3',
        '--color-alert': '#FF0000',
        '--color-highlight': '#FF9B00'
    };

    const invertedColors = {
        '--black': '#242424',
        '--white': '#FFFFFF',
        '--color-light': '#000000',
        '--color-medium': '#3A3A3A',
        '--color-dark': '#808080',
        '--color-alert': '#9D0000',
        '--color-highlight': '#AA41C0'
    };

    if (colorMode) {
        for (const [variable, value] of Object.entries(normalColors)) {
            root.style.setProperty(variable, value);
        }
    } else {
        for (const [variable, value] of Object.entries(invertedColors)) {
            root.style.setProperty(variable, value);
        }
    }
}