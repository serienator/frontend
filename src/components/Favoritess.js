import React, {Component} from "react";
import Loading from "./Loading";
import {getFavorites} from "../clients/Api";
import List from "./List";

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
    return <List series={this.state.series}/>
  }

  componentDidMount() {
    getFavorites().then(data => this.setState({series: data}))
  }

}

export default Favorites;