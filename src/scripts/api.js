import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '33749972-83f662c6bdabdd618260a5551';

export default class PixabayAPI {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  async getData(query) {
    const dataURL = `${URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&pageSize=5&page=${this.page}`;
    const response = await axios.get(dataURL);

    this.nextPage();
    return response.data.hits;
  }

  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
