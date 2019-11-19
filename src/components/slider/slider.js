import React from "react";
import sliderImg from './1993_McLaren_F1GTR-6-15361.jpg';

const Slider = () => {
  return (
    <div className={"slider"}>
      <img
        className={"slider__image"}
        src={sliderImg}
        alt={"slider"}/>
      <div className={"slider__content"}>Images Gallery</div>
    </div>
  )
}

export default Slider;
