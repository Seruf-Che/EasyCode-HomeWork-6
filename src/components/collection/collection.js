import React, {Component} from "react";

import Gallery from "../gallery/gallery";
import LoadMoreButton from "../load-more-button/load-more-button";

import GalleryService from "../../services/gallery-service/gallery-service";
const service = new GalleryService();

export default class Collection extends Component {

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
    const {id} = this.props;
    
    service
      .getPhotos({page, id})
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
      <>
      <Gallery data={data} />
      <LoadMoreButton uploadNewPage={this.uploadNewPage} loading={loading}/>
      </>
    )
  }
}
