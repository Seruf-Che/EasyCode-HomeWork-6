import React from "react";
import {withData} from "../../hoc/with-data";

import Slider from "../../slider/slider";
import Collection from "../../collection/collection";

import GalleryService from "../../../services";
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