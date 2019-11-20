import React from "react";
import GalleryMeta from "./gallery-meta";

const GalleryItem = (props) => {
  const {urls, color, description, user = {}, links, id} = props.element;

  return(
    <div className={"gallery__item"}>
      <GalleryMeta user={user} links={links} id={id}/>
      <img
        src={urls.small}
        alt={description}
        style={{backgroundColor: color}}
        className={"gallery__image"}/>
   </div>
  )
}

export default GalleryItem;