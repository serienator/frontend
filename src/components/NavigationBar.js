import React, {Component} from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Favorites from "./Favoritess";

class NavigationBar extends Component {
  render(){
    return (
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
              {this.props.title}
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/fav">Favorites</Nav.Link>
            </Nav>
          </Navbar>
    );
  }
}


export default NavigationBar;