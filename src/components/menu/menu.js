import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
  return(
    <ul className={"menu"}>
      <li className={"menu__item"}>
        <NavLink to={"/"} className={"menu__link"}>All</NavLink>
      </li>
      <li className={"menu__item"}>
        <NavLink to={"/animals"} className={"menu__link"}>Animals</NavLink>
      </li>
      <li className={"menu__item"}>
        <NavLink to={"/food&drink"} className={"menu__link"}>Food&Drink</NavLink>
      </li>
      <li className={"menu__item"}>
        <NavLink to={"/nature"} className={"menu__link"}>Nature</NavLink>
      </li>
      <li className={"menu__item"}>
        <NavLink to={"/sport"} className={"menu__link"}>Sport</NavLink>
      </li>
      <li className={"menu__item"}>
        <NavLink to={"/search"} className={"menu__link"}>Search</NavLink>
      </li>
    </ul>
  )
}

export default Menu;