import React, {Component} from "react";
import Item from "./Item"
import Loading from "./Loading";
import { ListGroup } from 'react-bootstrap';

class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const series = this.props.series;
    return <ListGroup>{series.map(
        (serie, index) => <Item key={index} serie={serie}/>)}</ListGroup >
  };

  }

export default List