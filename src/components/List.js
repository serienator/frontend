import React, {Component} from "react";
import Item from "./Item"
import { ListGroup } from 'react-bootstrap';

class List extends Component {
  render() {
    const series = this.props.series;
    return <ListGroup>{series.map(
        (serie, index) => <Item key={index} serie={serie}/>)}</ListGroup >
  };

  }

export default List