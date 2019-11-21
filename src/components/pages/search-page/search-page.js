import React, {Component} from "react";

import Gallery from "../../gallery/gallery";
import LoadMoreButton from "../../load-more-button/load-more-button";

import GalleryService from "../../../services";
const service = new GalleryService();

export default class SearchPage extends Component {

  state = {
    data: false,
    page: 0,
    loading: false,
    inputText: "",
    query: "",
    total: false,
    totalPages: Infinity
  }

  componentDidMount() {
    const {query} = this.props;
    if (query)
    this.setState({inputText: query}, () => this.onSubmitHandler());
  }

  onChangeHandler = e => {
    const {value} = e.target
    this.setState({inputText: value});
  }

  onSubmitHandler = e => {
    this.setState({
      loading: true,
      page: 1
    });
    
    if (e) e.preventDefault();
    const {inputText} = this.state;

    const query = inputText.trim().replace(/\s/g,"-");
    this.setState({query})
    service
      .getSearch({page: 1, query})
      .then(response => this.setState({
        data: [...response.results],
        loading: false,
        total: response.total,
        totalPages: response.total_pages
      }));
  }

  uploadNewPage = () => {
    this.setState({loading: true});
    const {data, query} = this.state;
    let {page} = this.state;
    page++;

    service
      .getSearch({page, query})
      .then(response => this.setState({
        data: [...data, ...response.results],
        page,
        loading: false
      }));
  }
  
  showSearchInfo = (total) => {
    return total < 1 ? "Sorry, nothing was found :(" :
           total === 1 ? "1 picture was found." :
           `${total} pictures were found`
  }

  render() {
    const {data, loading, inputText, total, totalPages, page} = this.state;

    return(
      <>
        <form
            onSubmit={(e) => this.onSubmitHandler(e)}
            action="get"
            className={"form"}>
          <input
            onChange={(e) => this.onChangeHandler(e)}
            placeholder="Type your query here..."
            type="text"
            value={inputText}
            className={"input"}/>
          <button
            type="submit"
            className={"button"}
            disabled={inputText.length > 0 ? false : true }>Find</button>
        </form>
        {
          total !== false ? <div className="search-info">{this.showSearchInfo(total)}</div> : ""
        }
        {
          data.length > 0 ? <Gallery data={data} /> : ""
        }
        {
          page && page < totalPages ?
          <LoadMoreButton uploadNewPage={this.uploadNewPage} loading={loading}/> :
          ""
        }
      </>
    )
  }
}