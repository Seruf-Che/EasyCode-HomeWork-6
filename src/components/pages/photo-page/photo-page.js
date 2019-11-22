import React from "react";
import {withData} from "../../hoc/with-data";

import PhotoCard from "../../photo-card/photo-card";

import GalleryService from "../../../services";
const service = new GalleryService();

const PhotoPage = (props) => {
  const PhotoCardComponent = withData(PhotoCard, () => service.getPhoto(props.id))
  
  return (
    <div className={"photo-page"}>
      <PhotoCardComponent />
    </div>
  )
}

export default PhotoPage;