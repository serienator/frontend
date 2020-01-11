import React, {Component} from "react";

class Item extends Component {
  render() {
    const serie  = this.props.serie;
    return <li>{serie.show.title}</li>
  }
}

export default Item