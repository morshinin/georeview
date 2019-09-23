import { mapInit as map } from './js/ymaps';

window.onload = map();

const myMap = document.querySelector('#map');

myMap.events.add('click', function(e) {
    var coords = e.get('coords');
    var geoCoords = ymaps.geocode(coords);
    var position = e.get('position');

    geoCoords.then(res => {
        var obj = {};


    });
});
