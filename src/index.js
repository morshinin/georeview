import { mapInit as map } from './js/ymaps';

window.onload = map();

const myMap = document.querySelector('#map');

myMap.addEventListener('click', () => {
    console.log('ok');
});
