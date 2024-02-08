function setCorner(e) {
    if (editorMode) {
        corners.push([e.latlng.lat, e.latlng.lng]);

        setBounds();
    }
}

document.addEventListener("keypress", function keyPress() {
    console.log("got press: " + event.keyCode);
    if (event.keyCode === 13) { // ENTER (Enter Key)
        if (editorMode) {
            corners.pop();
            setBounds();
        }
    }

    if (event.keyCode === 96) { // ` (Tilde Key)
        editorMode = !editorMode;
    }

    if (event.keyCode === 99) { // C (Letter C)
        navigator.clipboard.writeText(`{
"polygon": [ [${corners.join('], [')}] ],
"polygonColor": "black",
"marker": [${calculateMidpoint(corners)}],
"markerColor": "black",
"outsideColor": "white",
"title": "TITLE",
"tags": ["winter", "spring", "summer", "autumn"],
"svg": "icons/marker.svg",
"points": 0,
"description": "DESCRIPTION"
}`);
    }

    if (event.keyCode === 100) { // D (Letter D)
        corners = [];
        setBounds();
    }
})

function setBounds() {
    if (gameBounds) {
        map.removeLayer(gameBounds);
    }

    gameBounds = L.polygon(corners).addTo(map);
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