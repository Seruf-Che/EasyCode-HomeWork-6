import React from "react";

const Slider = (props) => {
  const {color, urls = {}} = props.data;

  return (
    <div 
      className={"slider"}
      style={{
        backgroundColor: color,
        backgroundImage: `url(${urls.regular})`
      }}>
      <h1 className={"slider__content"}>Gallery App</h1>
    </div>
  )
}

export default Slider;