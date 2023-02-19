import axios from 'axios';
import Notiflix from 'notiflix';
import PixabayAPI from './api';
import LoadMoreBtn from './components/loadMoreBtn.js';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.loadMore-btn');

const pixabayAPI = new PixabayAPI();

form.addEventListener('submit', onSubmit);

// LoadMoreBtn.addEventListener(('click') => {
//       loadMoreBtn.disable();
//     return PixabayAPI.getData()
//       .then(images => {
//         images.reduce((markup, image) => createMarkup(image) + markup, '');
//       })
//       .then(markup => {
//         createMarkup(markup);
//         loadMoreBtn.enable();
//       });
// });

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const value = form.elements.searchQuery.value.trim();
  console.log(value);

  pixabayAPI.getData(value).then(img => {
    try {
      if (img.length === 0) throw new Error('no pics');
      createMarkup(img);
    } catch (error) {
      clearMarkup();
      onError();
    }
  });

  function createMarkup(data) {
    const listMarkup = data
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `
  <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>
  `;
        }
      )
      .join('');
    gallery.innerHTML = listMarkup;
  }

function clearMarkup() {
  gallery.innerHTML = '';
}

function onError() {
  loadMoreBtn.hide();
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}
  
  function onSearch({totalHits}) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`
    );
}
