import React from "react";

const GalleryItem = (props) => {
  const {urls, color, description, user = {}, links: {download = "#"} = {}} = props.element;
  const {name = "Author's Avatar", profile_image = {}, links: {html = "#"} = {}} = user;

  return(
    <div className={"gallery__item"}>
      <div className={"gallery__meta"}>
        <a
          href={html}
          className={"gallery__author"}
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={profile_image.small}
            alt={name}
            width="32"
            height="32"
            className={"gallery__avatar"}/>
          <span className={"gallery__name"}>{name}</span>
        </a>
        <a
          href={download}
          className={"gallery__download"}
          target="_blank"
          rel="noopener noreferrer">
          <svg viewBox="0 0 300 300">
            <path d="M149.997,0C67.158,0,0.003,67.161,0.003,149.997S67.158,300,149.997,300s150-67.163,150-150.003S232.837,0,149.997,0z M209.453,220.955c-1.644,0-3.268-0.091-4.866-0.254c-1.46,0.163-2.944,0.254-4.448,0.254h-37.656l40.504-40.87 c2.342-2.365,3.079-5.983,1.849-9.137c-1.227-3.156-4.165-5.218-7.431-5.218h-19.958v-42.662c0-5.14-4.171-9.311-9.311-9.311	h-28.231c-5.14,0-9.311,4.168-9.311,9.311v42.662h-21.529c-0.016,0-0.034,0-0.047,0c-4.43,0-8.019,3.737-8.019,8.354 c0,2.63,1.162,4.969,2.977,6.5l40.011,40.372H83.794c-21.916,0-39.684-17.771-39.684-39.684c0-18.256,12.327-33.615,29.108-38.245 c1.854-15.541,15.058-27.598,31.094-27.598c4.85,0,9.428,1.136,13.526,3.105c7.973-22.188,29.188-38.053,54.118-38.053 c29.896,0,54.455,22.821,57.227,51.988c15.779,7.42,26.709,23.454,26.709,42.045C255.891,200.163,235.101,220.955,209.453,220.955	z"/>
         </svg>
        </a>
      </div>
      <img
        src={urls.small}
        alt={description}
        style={{backgroundColor: color}}
        className={"gallery__image"}/>
   </div>
  )
}

export default GalleryItem;
