import React, {Component} from "react";
import Series from "./Series"
import './../styles/App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Favorites from "./Favoritess";
import Page from "./Page";

class App extends Component {
  render() {
    return <BrowserRouter>
        <Switch>
          <Route exact path='/' component={() => <Page><Series/></Page>}/>
          <Route exact path='/fav' component={() => <Page><Favorites/></Page>}/>
        </Switch>
    </BrowserRouter>
  };
}

export default App