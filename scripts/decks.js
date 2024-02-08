function getCardById(deck, id) {
    let card = decks[deck].find(card => card.id === id);
    return card ? card : null;
}

function search(deck) {
    if (document.querySelector('.popup')) {
        console.log('A popup is already open');
        return;
    }

    const search = new Popup(
        "Search",
        "Search up a card by its number",
        `<div id="cardNumber" contenteditable="true" style="border: 1px solid #000; padding: 10px; margin-bottom: 10px;"></div>
        <button id="submitBtn">Submit</button>`
    );

    search.appendAnimate();

    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.stopPropagation();
        processForm();
    });

    event.stopPropagation();
    
    document.addEventListener('click', Popup.handleClickOutside.bind(search));

    function processForm() {
        let val = parseInt(document.getElementById('cardNumber').textContent);
        let card = getCardById(deck, val);
        if (card) {
            search.element().innerHTML = `<div id="${card.title}" class="popup" title="${card.title}" style="width: ${search.element().style.width}; height: ${search.element().style.height};"><h1>${card.title}</h1><p>${card.description}</p><div>`
        }
    }
}