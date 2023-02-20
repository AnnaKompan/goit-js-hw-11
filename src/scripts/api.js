import axios from 'axios';

export default class PixabayAPI {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.baseUrl = 'https://pixabay.com/api/';
    this.key = '33749972-83f662c6bdabdd618260a5551';
    this.imageType = 'photo';
    this.orientation = 'horizontal';
    this.safeSearch = true;
    this.perPage = 40;
  }

  async getData() {
    const dataURL = `${this.baseUrl}?key=${this.key}&q=${this.searchQuery}&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${this.safeSearch}&per_page=${this.perPage}&page=${this.page}`;
    return await axios.get(dataURL).then(response => {
      if (response.status !== 200 || response.data.hits.length === 0) {
        throw new Error(response.status);
      }
      this.nextPage();
      return response.data;
    });
  }

  setSearchQuery(name) {
    this.searchQuery = name;
  }

  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
