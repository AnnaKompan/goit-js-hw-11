const gallery = document.querySelector('.gallery');

export default function renderHtml(img) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = img;
  const card = `
    <div class="photo-card">
    <a href="${largeImageURL}"><img class="gallery-img" src="${webformatURL}" alt="${tags}"/></a>
    <div class="info">
      <p class="info-item">
        <b>Likes: </b>
        <br>
        ${likes}
      </p>
      <p class="info-item">
        <b>Views: </b>
        <br>
        ${views}
      </p>
      <p class="info-item">
        <b>Comments: </b>
        <br>
        ${comments}
      </p>
      <p class="info-item">
        <b>Downloads: </b>
        <br>
        ${downloads}
      </p>
    </div>
  </div>
    `;
  gallery.insertAdjacentHTML('beforeend', card);
}
