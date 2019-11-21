import React from "react";

import UserCardGalley from "./user-card-gallery";
import Spinner from "../spinner/spinner";
import InstaIcon from "../svg/icons/instagram";
import TwitIcon from "../svg/icons/twitter";
import WebIcon from "../svg/icons/web";

import GalleryService from "../../services";
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

    const {bio, name, downloads, followers_count, following_count, location, profile_image, tags, total_collections, total_likes, total_photos, instagram_username, twitter_username, portfolio_url} = user;

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
              {location ? <p>Location: {location}</p> : ""}
              <p>Total photos: {total_photos}</p>
              <p>Total collections: {total_collections}</p>
              <p>Donwloads: {downloads}</p>
              <p>Total likes: {total_likes}</p>
              <p>Followers: {followers_count}</p>
              <p>Following: {following_count}</p>
              {tags ? <p>Tags: {tags.custom.map((e,i) =>
                  <span key={i} className="user-card__tag">{`${e.title} `}</span>
              )}</p> : ""}
              {instagram_username ?
                <a
                  href={`//www.instagram.com/${instagram_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-card__soc-icon">
                  <InstaIcon />
                </a> : ""}
              {twitter_username ?
                <a
                  href={`//twitter.com/${twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-card__soc-icon">
                  <TwitIcon/>
                </a> : ""}
              {portfolio_url ?
                <a href={`${portfolio_url}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="user-card__soc-icon">
                  <WebIcon/>
                </a> : ""}
            </div>
          </div>
          <UserCardGalley data={photoData}/>
        </>
        }
      </div>
    )
  }
}
