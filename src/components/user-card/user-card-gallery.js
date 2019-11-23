import React from "react";
import GalleryService from "../../services";

import Gallery from "../gallery/gallery";
import LoadMoreButton from "../load-more-button/load-more-button";

const service = new GalleryService();

export default class UserCardGallery extends React.Component {

  state = {
    data: [],
    page: 1,
    loading: true
  }

  componentDidMount() {
    this.uploadPhotos(this.state.page);
  }

  uploadPhotos = (page) => {
    const {data} = this.state;
    const {username} = this.props;

    service
      .getUserPhotos(page, username)
      .then(response => this.setState({
        data: [...data, ...response],
        loading: false
      }));
  }

  uploadNewPage = () => {
    this.setState({loading: true});
    let {page} = this.state;
    page++;
    this.uploadPhotos(page);
    this.setState({page});
  }

  render() {
    const {data, loading} = this.state;

    return(
      <div className="user-card__gallery">
        <Gallery data={data} />
        <LoadMoreButton uploadNewPage={this.uploadNewPage} loading={loading}/>
      </div>
    )
  }
}
