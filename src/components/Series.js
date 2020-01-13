import React, {Component} from "react";
import List from "./List";
import Loading from "./Loading";
import { getSeries }from "../clients/Api"

class Series extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: null
    };
  }
  render() {
    if(!this.state.series){
      return <Loading/>
    }
    return <List series={this.state.series}/>
  }

  componentDidMount() {
    getSeries().then(data => this.setState({series: data}));
  }
}

export default Series;