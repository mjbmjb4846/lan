function openMap() {
    let map = document.createElement('div');
    map.id = 'mapDiv'
    //map.innerHTML = `<iframe class="map" src="${mapURL}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n<div class="map_close" onclick="closeMap()">Close Map</div>`;
    map.innerHTML = `<iframe class="map" src="../map.html"></iframe>\n<div class="map_close" onclick="closeMap()">Close Map</div>`
    document.body.appendChild(map);
}

function closeMap() {
    let map = document.getElementById('mapDiv');
    map.remove();
}