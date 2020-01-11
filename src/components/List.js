import React, {Component} from "react";
import Item from "./Item"
import Loading from "./Loading";
import { ListGroup } from 'react-bootstrap';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: null
    };
  }

  render() {
    if (!this.state.series) {
      return <Loading/>
    }
    const series = this.state.series;
    return <ListGroup>{series.map(
        (serie, index) => <Item key={index} serie={serie}/>)}</ListGroup >
  };

  componentDidMount() {
      fetch('https://api.trakt.tv/shows/trending',{      headers: new Headers({
          'trakt-api-key': '74e217f4a8767131d2036b289ecbbdf0924761639c9f2533deb2b1f3173f7fb1',
        })
      })
      .then(response => response.json())
      .then(data => this.setState({series: data}));
    }
  }

export default List