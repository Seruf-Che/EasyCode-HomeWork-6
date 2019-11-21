import React from "react";
import {Link} from "react-router-dom";

import DownloadSvgIcon from "../svg/icons/download";


const GalleryMeta = (props) => {
  const {id} = props;
  const {name = "Author's Avatar", profile_image = {}, username} = props.user;
  const {download} = props.links;

  return (
    <div className={"gallery__meta"}>
      <Link
        to={`/users/${username}`}
        className={"gallery__author"}>
        <img
          src={profile_image.small}
          alt={name}
          width="32"
          height="32"
          className={"gallery__avatar"}/>
        <span className={"gallery__name"}>{name}</span>
      </Link>
      <Link to={`/photos/${id}`} className={"gallery__fullimg-link"}>Full Image</Link>
      <a
        href={download}
        className={"gallery__download"}
        target="_blank"
        rel="noopener noreferrer">
        <DownloadSvgIcon />
      </a>
    </div>
  )
}

export default GalleryMeta;