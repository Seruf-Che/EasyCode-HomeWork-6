import React from "react";

import PhotoCardMeta from './photo-card-meta';

const PhotoCard = (props) => {
  const {data} = props;

  if (data.errors) return <h1>{[...data.errors]}</h1>

  const {alt_description, color, urls = {}, user} = data;

  return (      
    <div className="photo-card">
      <PhotoCardMeta user={user} urls={urls}/>
      <img 
        className="photo-card__image"
        src={urls.full}
        alt={alt_description}
        style={{backgroundColor: color}}
        />
    </div>
  )
}

export default PhotoCard;