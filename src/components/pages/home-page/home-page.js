import React from "react";
import {withData} from "../../hoc/with-data";
import GalleryService from "../../../services";

import Slider from "../../slider/slider";
import Collection from "../../collection/collection";

const service = new GalleryService();

const HomePage = () => {
  const SliderComponent = withData(Slider, service.getRandomPhoto);
  
  return (
    <>
      <SliderComponent />
      <Collection spinnerOff={true}/>
    </>
  )
}

export default HomePage;