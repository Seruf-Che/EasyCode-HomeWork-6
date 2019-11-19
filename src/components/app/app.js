import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Header from "../header/header";
import Collection from "../collection/collection";
import SearchPage from "../pages/search-page/search-page";
import HomePage from "../pages/home-page/home-page";

class App extends Component {

  state = {
    error: false,
  };

  componentDidCatch(error) {
    this.setState({
      error: true
    })
  }

  render(){
    const { error } = this.state;

    if(error) return <div className={"error"}>Something went wrong.... :(</div>;

    return (
      <Router>
        <main>
          <Header />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/animals" exact>
              <Collection key={3330452} id={3330452}/>
            </Route>
            <Route path="/food&drink" exact>
              <Collection key={271352} id={271352}/>
            </Route>
            <Route path="/nature" exact>
              <Collection key={327760} id={327760}/>
            </Route>
            <Route path="/sport" exact>
              <Collection key={345761} id={345761}/>
            </Route>
            <Route path="/search">
              <SearchPage />
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
