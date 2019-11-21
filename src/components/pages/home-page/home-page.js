import React from "react";
import Slider from "../../slider/slider";
import Collection from "../../collection/collection";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Collection spinnerOff={true}/>
    </>
  )
}

export default HomePage;
