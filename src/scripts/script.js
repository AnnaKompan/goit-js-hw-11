// import PixabayAPI from './api';
// import loadMoreBtn from './components/loadMoreBtn.js';
import fetchData from './api';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const value = form.elements.searchQuery.value.trim();

  fetchData(value)
    .then(({ hits }) => {
      if (hits.length === 0) throw new Error('no pics');
      console.log(hits);
    })
    .catch(onError);
}

function onError(err) {
  console.error(err);
}
