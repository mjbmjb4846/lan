let jsonData;

readJsonFromFile('./scripts/data/locations.json'/*Relative to root*/, /*[getSeason()]*/)
.then(data => {
    createFeaturesFromJson(data);
    jsonData = data;
});
