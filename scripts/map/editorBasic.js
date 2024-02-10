map.on('click', setCorner);

let mapObjects = [];
let markerObjects = [];
let allCorners = [];
let info = [];
let currentCorners = [];

function setCorner(e) {
    if (editorMode) {
        currentCorners.push([e.latlng.lat, e.latlng.lng]);

        setBounds();
    }
}

document.addEventListener("keydown", function keydown(e) {
    console.log("got press: " + e.key + " Shift: " + e.shiftKey + " CTRL: " + e.ctrlKey);

    if (e.key === '`') {
        editorMode = !editorMode;
    }

    if (e.key === 'l') {
        console.log(currentCorners);
        console.log(allCorners);
        console.log(markerObjects);
        console.log(mapObjects);
    }

    if (editorMode) {

        if ((e.key === 'Enter') || (e.key === 'Escape')) {
            if (currentCorners.length >= 3) {
                allCorners.push(currentCorners);
                addMarker(calculateMidpoint(currentCorners));
            } else if (currentCorners.length === 1) {
                allCorners.push(currentCorners);
                addMarker(calculateMidpoint(currentCorners));
            }
            currentCorners = [];
            setBounds();
        }

        if (e.key === 'Delete') {
            currentCorners = [];
            setBounds();
        }

        if ((e.key === "Backspace") || (e.key === "Delete") || (e.key === "z" && e.ctrlKey)) {
                currentCorners.pop();
                setBounds();
        }

        if (e.key === 'c') {

            let json = jsonify();

            copyText("[\n" + json + "\n]")
        }
    }
})

function jsonify() {
    let jsonArray = [];

    allCorners.forEach((set) => {
        jsonArray.push(`${set.length >= 3 ? `{\n"polygon": [ [${set.join('], [')}] ],\n"polygonColor": "#000000",` : "{"}
"marker": [${calculateMidpoint(set)}],
"markerColor": "#000000",
"outsideColor": "#FFFFFF",
"title": "TITLE",
"tags": ["winter", "spring", "summer", "autumn"],
"icon": "marker",
"points": 0,
"description": "DESCRIPTION"
}`)
    });

    return jsonArray.join(',\n');
}

function setBounds() {
     
    mapObjects.forEach((object) => {
        map.removeLayer(object);
    });

    for (let i = 0; i < allCorners.length; i++) {
        mapObjects[i] = L.polygon(allCorners[i]).addTo(map);
    }
    
    if (currentCorners.length > 0) {
        mapObjects[allCorners.length] = L.polygon(currentCorners).addTo(map);
    }
}

function addMarker(pos) {
    fetch('../../icons/marker.svg')
    .then(response => response.text())
    .then(data => {
        let injected = data.replaceAll('OUTSIDE', 'white');
        injected = injected.replaceAll('INSIDE', 'black');
    
        // Create a custom icon
        let customIcon = L.divIcon({
            className: 'custom-icon',
            html: injected,
            iconSize: [40, 50],
            iconAnchor: [20, 50],
            popupAnchor: [0, -50]
        });
        markerObjects.push(L.marker(pos, { icon: customIcon }).addTo(map));

        let marker = markerObjects[markerObjects.length-1];
    
        let popupContent = `<h2 contenteditable="true">TITLE</h2><p contenteditable="true">0 Points</p><p contenteditable="true">DESCRIPTION</p>`;
        marker.bindPopup(popupContent);

        marker.on("click", () => {
            updateMarker(marker);
            console.log("CLICK!");
        })
    });
}

function calculateMidpoint(edges) {
    console.log(edges);
    let totalX = 0;
    let totalY = 0;

    for (let i = 0; i < edges.length; i++) {
        totalX += edges[i][0];
        totalY += edges[i][1];
    }

    let midpoint = [totalX / edges.length, totalY / edges.length]

    return midpoint;
}
