import React, {Component} from "react";
import { ListGroup } from 'react-bootstrap';

class Item extends Component {
  render() {
    const serie  = this.props.serie;
    return <ListGroup.Item >{serie.show.title}</ListGroup.Item >
  }
}

export default Item