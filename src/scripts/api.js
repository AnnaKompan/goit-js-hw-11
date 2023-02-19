import axios from 'axios';
import Notiflix from 'notiflix';

const URL = 'https://pixabay.com/api/';
const KEY = '33749972-83f662c6bdabdd618260a5551';

function fetchData(query) {
  const dataURL = `${URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  fetch(dataURL)
    .then(response => response.json())
    .then(data => console.log(data));
}

export default fetchData;
