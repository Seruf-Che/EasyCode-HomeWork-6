import React from "react";
import {withData} from "../../hoc/with-data";

import UserCard from "../../user-card/user-card";

import GalleryService from "../../../services";
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