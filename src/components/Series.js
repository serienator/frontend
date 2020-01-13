import React, {Component} from "react";
import List from "./List";
import Loading from "./Loading";

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
    fetch('https://api.trakt.tv/shows/trending',{      headers: new Headers({
        'trakt-api-key': '74e217f4a8767131d2036b289ecbbdf0924761639c9f2533deb2b1f3173f7fb1',
      })
    })
    .then(response => response.json())
    .then(data => this.setState({series: data}));
  }
}

export default Series;