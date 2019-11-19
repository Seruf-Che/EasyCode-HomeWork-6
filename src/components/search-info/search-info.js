import React from "react";

const SearchInfo = (props) => {
  const {total} = props;
  let text = "";
  if (total < 1) {
    text = "Sorry, nothing was found :(";
  }
  else if (total === 1) {
    text = "1 picture was found.";
  }
  else {
    text = `${total} pictures were found`;
  }

  return (
    <div className="search-info">{text}</div>
  )
}

export default SearchInfo;
