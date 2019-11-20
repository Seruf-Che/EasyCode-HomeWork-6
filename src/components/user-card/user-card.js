import React from "react";

import UserCardGalley from "./user-card-gallery";
import Spinner from "../spinner/spinner"; 

import GalleryService from "../../services/gallery-service/gallery-service";
const service = new GalleryService();

export default class UserCard extends React.Component {
  
  state = {
    error: false,
    user: false,
    photoData: []
  }

  componentDidMount() {
    const {username} = this.props;
    
    this.getUser(username);
  }

  getUser = (username) => {
    service.getUser(username)
      .then(user => {
        if (user.errors) this.setState({error: user.errors})
        else this.setState({
          user,
          photoData: [...user.photos]
        })
      })
  }
  
  render() {
    const {user, error, photoData} = this.state;
    
    if (!user && !error) return <Spinner />
    
    const {bio, name, downloads, followers_count, following_count, location, profile_image, tags, total_collections, total_likes, total_photos} = user;
    
    return (
      
      <div className="user-card">
        {
          error ? <h1>{[...error]}</h1> :
        <>
          <div className="user-card__meta">
            <div className="user-card__main">
              <img src={profile_image.large} alt={name} className="user-card__avatar"/>
              <div className="user-card__name">
                <span>{name}</span>
                <p>{bio}</p>
              </div>
            </div>
            <div className="user-card__content">
              <p>Location: {location}</p>
              <p>Total photos: {total_photos}</p>
              <p>Total collections: {total_collections}</p>
              <p>Donwloads: {downloads}</p>
              <p>Total likes: {total_likes}</p>
              <p>Followers: {followers_count}</p>
              <p>Following: {following_count}</p>
              <p>Tags: {tags.custom.map((e,i) => <span key={i} className="user-card__tag">{`${e.title} `}</span>)}</p>
            </div>
          </div>
          <UserCardGalley data={photoData}/>
        </>
        }
      </div>
    )
  }
}