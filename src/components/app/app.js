import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Gallery from "../gallery/gallery";
import Slider from "../slider/slider";
import Header from "../header/header";
import SearchResult from "../search-result/search-result";

class App extends Component {
  
  state = {
    query: "test"
  }

  render(){
    const {query} = this.state;
    
    return (
      <Router>
        <main>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Slider />
              <Gallery />
            </Route>
            <Route path="/animals" exact>
              <Gallery key={1} collectionId={3330452}/>
            </Route>
            <Route path="/food&drink" exact>
              <Gallery key={2} collectionId={271352}/>
            </Route>
            <Route path="/nature" exact>
              <Gallery key={3} collectionId={327760}/>
            </Route>
            <Route path="/sport" exact>
              <Gallery key={4} collectionId={345761}/>
            </Route>
            <Route path="/search">
              <SearchResult query={query}/>
            </Route>
            <Route>
              <h1>oooops</h1>
            </Route>
          </Switch>          
        </main>
      </Router>
    );
  }
}

export default App;