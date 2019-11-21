import React from "react";

import GalleryService from "../../services";
const service = new GalleryService();

export default class Slider extends React.Component {
  
  state = {
    photo: false
  }
  
  componentDidMount() {
    this.getRandomPhoto();
  }

  getRandomPhoto = () => {
    service.getRandomPhoto()
      .then(photo => this.setState({photo}))
  }

  render() {
    const {photo: {color, urls = {}} = {}} = this.state;
    return (
      <div 
        className={"slider"}
        style={{
          backgroundColor: color,
          backgroundImage: `url(${urls.regular})`
        }}>
        <h1 className={"slider__content"}>Images Gallery</h1>
      </div>
    )
  }
}