import React, {Component} from "react";
import { Navbar } from 'react-bootstrap';

class NavigationBar extends Component {
  render(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>
            {this.props.title}
        </Navbar.Brand>
        </Navbar>
    );
  }
}

export default NavigationBar;