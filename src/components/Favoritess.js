import React, {Component} from "react";
import Loading from "./Loading";

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: null
    };
  }
  render() {
    if(!this.state.series) {
      return <Loading/>;
    }
    return <div>FAVORITES</div>;
  }
}

export default Favorites;