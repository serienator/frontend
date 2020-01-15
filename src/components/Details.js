import React, {Component} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import './../styles/Details.css';

export default class Detail extends Component {
  render() {
    const serie = this.props.info.show;
    return <div className="modal-details">
    <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{serie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{serie.year}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  }
}