import React, {Component} from "react";
import {ListGroup} from 'react-bootstrap';
import Detail from "./Details";

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
    this.triggerShowDetails = this.triggerShowDetails.bind(this)
    this.triggerCloseDetails = this.triggerCloseDetails.bind(this)

  }

  render() {
    const serie = this.props.serie;
    return <div className="item">
      <ListGroup.Item action
                      onClick={this.triggerShowDetails}>{serie.show.title}</ListGroup.Item>
      {this.state.showDetails && <Detail info={serie} close={this.triggerCloseDetails}/>}
    </div>
  }

  triggerCloseDetails() {
    this.setState({showDetails: false})
  }

  triggerShowDetails() {
    const currentState = this.state.showDetails;
    this.setState({showDetails: !currentState})
  }
}

export default Item