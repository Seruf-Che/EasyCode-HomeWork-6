import React from "react";
import {Link} from "react-router-dom";

const UserCardGallery = (props) => {

  const {data} = props;

  return(
    <div className={"user-card__gallery"}>
      {
        data.map(e => <Link 
                        to={`/photos/${e.id}`}
                        key={e.id} 
                        className={"user-card__image"}>
                        <img 
                          src={e.urls.regular} 
                          alt=""
                          />
                      </Link>)
      }
    </div>
  )
}

export default UserCardGallery;