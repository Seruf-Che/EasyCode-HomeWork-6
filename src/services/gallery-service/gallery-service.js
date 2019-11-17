export default class GalleryService {
  constructor() {
    this.urlBase = "https://api.unsplash.com/"
    this.headers = {"Authorization": "Client-ID 30172bf13fb6e85b6aad8a8646b304b84d62fe6d0679be24649048424a83d497"}
  }

  getPhotos = async({page, perPage = 20, id}) => {
    const typeUrl = id ? `collections/${id}/` : "";
    const pageUrl = page ? `page=${page}` : "";
    const perPageUrl = perPage ? `per_page=${perPage}` : "";
    const URL = `${this.urlBase}${typeUrl}photos?${pageUrl}&${perPageUrl}`

    const response = await fetch(URL , {
      method: "get",
      headers: this.headers
    });

    return await response.json();
  }
}
