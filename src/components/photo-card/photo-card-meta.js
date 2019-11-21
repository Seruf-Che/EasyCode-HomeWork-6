import React from "react";
import {Link} from "react-router-dom";

const PhotoCardMeta = (props) => {
  const {user: {name, location, username } = {}, urls} = props;
  
  return (
    <div className="photo-card__meta">
      <Link to={`/users/${username}`} className="photo-card__author">
        Author: {name}
      </Link>
      <span className="photo-card__location">From {location}</span>
      <a 
        href={urls.raw}
        target="_blank"
        rel="noopener noreferrer"
        className="photo-card__download">Download Photo</a>
    </div>
  )
}

export default PhotoCardMeta;