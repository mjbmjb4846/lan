//HTML 5 Geolocation API
navigator.geolocation.watchPosition(usePosition, denyPosition);

let user, userRange, gameBounds, userZoom;
let editorMode = false;

function usePosition(pos) {

    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const acu = pos.coords.accuracy;

    if (user && userRange) {
        map.removeLayer(user);
        map.removeLayer(userRange);
    }

    // Create a custom icon
    fetch('../../icons/player.svg')
        .then(response => response.text())
        .then(data => {
            let injected = data.replaceAll('OUTSIDE', 'violet');
            injected = injected.replaceAll('INSIDE', 'pink');

            let customIcon = L.divIcon({
                className: 'custom-icon',
                html: injected,
                iconSize: [40, 50],
                iconAnchor: [20, 50],
                popupAnchor: [0, -50]
            });

            user = L.marker([lat, lon], { icon: customIcon }).addTo(map);
            userRange = L.circle([lat, lon], { radius: acu, color: "pink" } ).addTo(map);

            user.bindPopup(`<h1>${getRandomElement(["😱","😭","🥲","😏","🥴","🤫","😄","😁"])}</h1>`);
        });

    //Zoom is undefined at the start of the program so starting things can be thrown in here.
    if (!userZoom) {
        userBound();
        console.log(lat + " " + lon);
    }

    //map.setView([lat, lon]);

    console.log("Location collected (:");

}

function denyPosition(err) {

    if(err.code === 1) {
        alert("Geolocation is blocked on your device ):");
    } else {
        console.log("Can't get location due to a technical error ):");
    }

}

function userBound() {
    userZoom = userRange.getBounds();
    map.fitBounds(userZoom);
}