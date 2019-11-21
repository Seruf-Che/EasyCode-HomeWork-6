import React from "react";
import { withRouter } from "react-router";

import SearchSvgIcon from "../svg/icons/search";

class SearchBar extends React.Component {
  
  state = {
    inputText: ""
  }

  onChangeHandler(e) {
    this.setState({inputText: e.target.value})
  }

  onSubmitHandler = e => {
    e.preventDefault();
    const {inputText} = this.state;
    this.props.history.push(`/search/${inputText}`);
  }
  
  
  render() {
    const {inputText} = this.state;

    return(
      <form
        onSubmit={(e) => this.onSubmitHandler(e)}
        action="get"
        className={"search-bar"}>
        <input
          onChange={(e) => this.onChangeHandler(e)}
          placeholder="Type your query here..."
          type="text"
          className={"search-bar__input"}/>
        <button
          type="submit"
          className={"search-bar__button"}
          disabled={inputText.length > 0 ? false : true }><SearchSvgIcon /></button>
      </form>
    )
  }
}

export default withRouter(SearchBar);