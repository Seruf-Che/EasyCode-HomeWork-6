import React from "react";
import {Link} from "react-router-dom";

import Menu from "../menu/menu";
import SearchBar from "../search-bar/search-bar";
import Logo from "../logo/logo";

const Header = () => {
  return(
    <nav className={"header"}>
      <Link to="/"><Logo /></Link>
      <Menu />
      <SearchBar />
    </nav>
  )
}

export default Header;