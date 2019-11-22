import React, {Component} from "react";
import GalleryService from "../../services";

import Gallery from "../gallery/gallery";
import LoadMoreButton from "../load-more-button/load-more-button";
import Spinner from "../spinner/spinner"; 

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
      .getPhotos(page, id)
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
    
    if (data.length < 1) return <Spinner />
      
    return(
      <>
        <Gallery data={data} />
        <LoadMoreButton uploadNewPage={this.uploadNewPage} loading={loading}/>
      </>
    )
  }
}