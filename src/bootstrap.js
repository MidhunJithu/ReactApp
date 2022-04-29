
import React,{ useState } from "react";
import { Modal,Button} from "react-bootstrap";

export function CustomModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-primary" onClick={handleShow} className='mt-2'>
          {props.btn}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.head}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} id='close'>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }