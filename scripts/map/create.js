//L is a reference to the Leaflet library
var map = L.map('map');
map.setView([42.725, -84.5], 13);

//Uses OpenStreetMap for map data
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
