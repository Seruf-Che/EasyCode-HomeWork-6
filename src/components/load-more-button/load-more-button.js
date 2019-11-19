import React from "react";

const LoadMoreButton = (props) => {
  
  const {uploadNewPage, loading} = props
  
  return (
    <div className="load-button">
      <span
        onClick={() => uploadNewPage()}
        className={`glyphicon glyphicon-refresh load-button__icon ${loading? "active" : ""}`}>
      </span>
    </div>
  )
}

export default LoadMoreButton;