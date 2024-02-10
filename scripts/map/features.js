function createFeaturesFromJson(data) {
    data.forEach(item => {
        // Create polygon if polygon data is present
        if (item.polygon && item.polygonColor) {
            L.polygon(item.polygon, { color: item.polygonColor }).addTo(map);
        }
        // Create marker if marker data is present
        if (item.marker && item.markerColor) {
            fetch(item.icon ? `icons/${item.icon}.svg` : '../../icons/marker.svg')
            .then(response => response.text())
            .then(data => {
                let injected = data.replaceAll('OUTSIDE', item.outsideColor || item.markerColor || 'white');
                injected = injected.replaceAll('INSIDE', item.markerColor || 'navy');

                // Create a custom icon
                let customIcon = L.divIcon({
                    className: 'custom-icon',
                    html: injected,
                    iconSize: [40, 50],
                    iconAnchor: [20, 50],
                    popupAnchor: [0, -50]
                });
                let marker = L.marker(item.marker, { icon: customIcon }).addTo(map);

                // Add custom popup to marker
                if (item.title && item.description) {
                    let popupContent = `<h2>${item.title}</h2>${item.points ? '<p>' + item.points + ' Points</p>' : ''}<p>${item.description}</p>`;
                    marker.bindPopup(popupContent);
                }
            });
        }
    });
}
