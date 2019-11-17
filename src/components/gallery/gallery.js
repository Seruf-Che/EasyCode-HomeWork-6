import React, {Component} from "react";
import GalleryService from "../../services/gallery-service/gallery-service";

export default class Gallery extends Component {
//345761 - sport
//271352 - food & drink
//327760 - nature
  state = {
    data: [],
    page: 1,
    collectionsID: 3330452
  }

  componentDidMount() {
    this.uploadPhotos({
      id: this.state.collectionsID
    });
  }

  uploadPhotos({page = 1, id}) {
    const {data, collectionsID} = this.state;

    new GalleryService()
          .getPhotos({
            id: collectionsID,
            page: page
          })
          .then(response => this.setState({
            data: [...data, ...response],
            page: page
          })
    );
  }

  uploadNewPage() {
    this.uploadPhotos({
      page: this.state.page + 1,
      id: this.state.collectionsID
    });
  }

  render() {
    const {data} = this.state;

    return(
      <div className={"gallery"}>
        {
          data.map(e => <img
                          key={e.id}
                          src={e.urls.small}
                          alt={e.description}
                          style={{backgroundColor: e.color}}
                          className={"gallery__item"}/>)
        }
        <button onClick={() => this.uploadNewPage()}>New page</button>
      </div>
    )
  }
}
