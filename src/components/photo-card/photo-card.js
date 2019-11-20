import React from "react";

import PhotoCardMeta from './photo-card-meta';
import Spinner from "../spinner/spinner"; 

import GalleryService from "../../services/gallery-service/gallery-service";
const service = new GalleryService();

export default class PhotoCard extends React.Component {
  
  state = {
    error: false,
    photo: false
  }

  componentDidMount() {
    const {id} = this.props;
    
    this.getPhoto(id);
  }

  getPhoto = (id) => {
    service.getPhoto(id)
      .then(photo => {
        if (photo.errors) this.setState({error: photo.errors})
        else this.setState({photo})
      })
  }
  
  render() {
    const {photo, error} = this.state;
    
    if (!photo && !error) return <Spinner />
    
    const {alt_description, color, urls = {}, user} = photo;
    
    return (
      
      <div className="photo-card">
        {
          error ? <h1>{[...error]}</h1> :
        <>
          <PhotoCardMeta user={user} urls={urls}/>
          <img 
            className="photo-card__image"
            src={urls.full}
            alt={alt_description}
            style={{backgroundColor: color}}
            />
        </>
        }
      </div>
    )
  }
}