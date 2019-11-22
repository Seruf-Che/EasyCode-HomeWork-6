import React from 'react';
import {Route, Switch} from "react-router-dom";

import Header from "../header/header";
import Collection from "../collection/collection";
import PhotoCard from "../photo-card/photo-card"
import UserCard from "../user-card/user-card"
import SearchPage from "../pages/search-page/search-page";
import HomePage from "../pages/home-page/home-page";
import Page404 from "../pages/page-404/page-404";

const App = () => {

  return (  
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/photos/:id" exact
          render={ (props) => 
            {
              const {id} = props.match.params;
              return <PhotoCard id={id}/>
            }
          }
        />
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
        <Route path="/search/:query"
          render={ props => 
            {
              const {query} = props.match.params;
              return <SearchPage key={query} query={query}/>
            }
          }/>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
        <Route path="/users/:username" exact
          render={ (props) => 
            {
              const {username} = props.match.params;
              return <UserCard username={username}/>
            }
          }
        />
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
