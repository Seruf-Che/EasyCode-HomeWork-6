import React from "react";
import {withData} from "../../hoc/with-data";
import GalleryService from "../../../services";

import UserCard from "../../user-card/user-card";

const service = new GalleryService();

const UserPage = (props) => {
  const UserCardComponent = withData(UserCard, () => service.getUser(props.username))
  
  return (
    <div className={"user-page"}>
      <UserCardComponent />
    </div>
  )
}

export default UserPage;