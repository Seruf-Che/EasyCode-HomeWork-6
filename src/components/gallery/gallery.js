import React, {Component} from "react";
import GalleryService from "../../services/gallery-service/gallery-service";

export default class Gallery extends Component {

  state = {
    data: [],
    page: 1
  }

  componentDidMount() {
    this.uploadPhotos(this.state.page);
  }

  uploadPhotos = (page) => {
    const {data} = this.state;

    const {collectionId} = this.props;

    new GalleryService()
          .getPhotos({
            page: page,
            id: collectionId
          })
          .then(response => this.setState({
            data: [...data, ...response]
          }));
  }

  uploadNewPage = () => {
    let {page} = this.state;
    page++;
    this.uploadPhotos(page);    
    this.setState({page});
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
