import React from "react";
import {withData} from "../../hoc/with-data";
import GalleryService from "../../../services";

import PhotoCard from "../../photo-card/photo-card";

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