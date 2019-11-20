export default class GalleryService {
  constructor() {
    this.urlBase = "https://api.unsplash.com/"
    this.headers = {"Authorization": "Client-ID 30172bf13fb6e85b6aad8a8646b304b84d62fe6d0679be24649048424a83d497"}
  }

  getPhotos = async(page, id) => {
    const typeUrl = id ? `collections/${id}/` : "";
    const pageUrl = page ? `page=${page}` : "";
    const URL = `${this.urlBase}${typeUrl}photos?${pageUrl}&per_page=20`

    const response = await fetch(URL , {
      method: "get",
      headers: this.headers
    });

    return await response.json();
  };

  getSearch = async({page = 1, query = ""}) => {
    const pageUrl = page ? `page=${page}` : "";
    const URL = `${this.urlBase}search/photos?${pageUrl}&query=${query}`;

    const response = await fetch(URL , {
      method: "get",
      headers: this.headers
    });

    return await response.json();
  };

  getPhoto = async(id) => {
    const URL = `${this.urlBase}photos/${id}`

    const response = await fetch(URL , {
      method: "get",
      headers: this.headers
    });

    return await response.json();
  };

  getRandomPhoto = async() => {
    const URL = `${this.urlBase}photos/random`

    const response = await fetch(URL , {
      method: "get",
      headers: this.headers
    });

    return await response.json();
  };

  getUser = async(username) => {
    const URL = `${this.urlBase}users/${username}`

    const response = await fetch(URL , {
      method: "get",
      headers: this.headers
    });

    return await response.json();
  };
}
