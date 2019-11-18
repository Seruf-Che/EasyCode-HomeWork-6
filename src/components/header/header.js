import React from "react";
import Menu from "../menu/menu";

const Header = () => {
  return(
    <nav className={"header"}>
      <Menu />
      <div>
        <form>
          <input type="text"/>
          <button type="submit">Find</button>
        </form>
      </div>
    </nav>
  )
}

export default Header;