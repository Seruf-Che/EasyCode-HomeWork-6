import React from "react";
import GalleryService from "../../services/gallery-service/gallery-service";

export default class SearchResult extends React.Component {

//  state = {
//    data: [],
//    page: 1,
//    query: false,
//    searchResult: false,
//    searchPages: false,
//  }
//
//  componentDidMount() {
//    const {query} = this.props;
//    
//    if (query) {
//      this.setState({query})
//      this.uploadSearchedPhotos(query);
//    } 
//    else {
//      this.uploadPhotos(this.state.page);
//    }
//  }
//
//  uploadPhotos = (page, search = false) => {
//    const {data} = this.state;
//
//    const {collectionId} = this.props;
//
//    new GalleryService()
//          .getPhotos({
//            page: page,
//            id: collectionId
//          })
//          .then(response => this.setState({
//            data: [...data, ...response]
//          }));
//  }
//  
//  uploadSearchedPhotos = (query, page = 1) => {
//    const {data} = this.state;
//    
//    new GalleryService()
//          .getSearch({
//            query,
//            page
//          })
//          .then(response => this.setState({
//            data: [...data, ...response.results],
//              searchResult: response.total,
//              searchPages: response.total_pages
//          }));
//  }
//
//  uploadNewPage = () => {
//    const {query} = this.props;
//    let {searchResult, page} = this.state;
//    page = this.state.page + 1;
//    
//    if (searchResult !== false) {
//      
//    }
//    else {
//      this.uploadSearchedPhotos(query, page);
//    }
//    
//    this.setState({page});
//  }
//
  render() {
//    const {data, query, searchResult, searchPages} = this.state;
//
    return(<h1>asdasd</h1>
//      <div className={"gallery"}>
//        {
//          query !== false ? <SearchInfo searchResult={searchResult}/> : ""
//        }
//        {
//          data.map(e => <img
//                          key={e.id}
//                          src={e.urls.small}
//                          alt={e.description}
//                          style={{backgroundColor: e.color}}
//                          className={"gallery__item"}/>)
//        }
//        <button onClick={() => this.uploadNewPage()}>New page</button>
//      </div>
    )
  }
}
