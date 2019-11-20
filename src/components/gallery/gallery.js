import React from "react";

import GalleryItem from "./gallery-item";

const Gallery = (props) => {

  const {data} = props;

  return(
    <div className={"gallery"}>
      {
        data.map(e => <GalleryItem key={e.id} element={e}/>)
      }
    </div>
  )
}

export default Gallery;
