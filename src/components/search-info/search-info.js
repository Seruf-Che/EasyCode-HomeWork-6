import React from "react";

const SearchInfo = (props) => {
  const {searchResult} = props;
  let text = "";
  if (searchResult < 1) {
    text = "Sorry, nothing was found :(";
  } 
  else if (searchResult === 1) {
    text = "1 picture was found.";
  } 
  else {
    text = `${searchResult} pictures were found`;
  }
  
  return (
    <div className="search-info">{text}</div>
  )
}

export default SearchInfo;