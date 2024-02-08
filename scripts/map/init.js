readJsonFromFile('./scripts/data/locations.json'/*Relative to root*/, /*[getSeason()]*/)
.then(data => createFeaturesFromJson(data));

map.on('click', setCorner);