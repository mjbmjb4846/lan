function openMap() {
    //window.open('https://www.google.com/maps/d/u/0/edit?mid=1PJt1wdtbH577aOBaFerZD8AEVimsKgA&usp=sharing');
    let map = document.createElement('div');
    map.id = 'mapDiv'
    map.innerHTML = `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1PJt1wdtbH577aOBaFerZD8AEVimsKgA&ehbc=2E312F&noprof=1" width="${getVW()}" height="${getVH()}"></iframe>\n<div class="map_close" onclick="closeMap()">Close Map</div>`;
    //map.innerHTML = `<iframe class="map" src="../map.html"></iframe>\n<div class="map_close" onclick="closeMap()">Close Map</div>`
    document.body.appendChild(map);
}

function closeMap() {
    let map = document.getElementById('mapDiv');
    map.remove();
}