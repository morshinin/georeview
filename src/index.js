import {mapInit as map} from './js/ymaps';

window.onload = map();

const myMap = document.querySelector('#map');

myMap.addEventListener('click', () => {
    const x = 55;
    const y = 37;

    let myObj = new map.GeoObject({
        geometry: {
            type: 'Point',
            coordinates: [x, y]
        },
        properties: {
            clusterCaption: 'So lovely',
            balloonContentBody: 'lorem ipsum'
        }
    })

    map.geoObjects.add(myObj);
});
