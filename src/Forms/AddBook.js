import React,{ useState } from "react";
import { Form, Row, Button,Col} from "react-bootstrap";
import { AddNewBook } from "../data/Books";

export function AddBook(props) {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
        event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        const val={
            title : event.target.elements.title.value,
            author: event.target.elements.author.value,
            src: event.target.elements.src.value,
            date : event.target.elements.date.value,
            amount :event.target.elements.amount.value,
        }
        AddNewBook(val);
        console.log('added');
        document.getElementById('close').click();
        props.update();
      }
        setValidated(true);;
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name ='title'
              required
              type="text"
              placeholder="Book Title"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Author first Name</Form.Label>
            <Form.Control name='author' type="text" placeholder="First Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Author.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Cover Url</Form.Label>
            <Form.Control name='src' type="text" placeholder="Cover image Url" required />
            <Form.Control.Feedback type="invalid">
              Please provide a cover image url.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Date of publishing</Form.Label>
            <Form.Control name ='date' type="date" placeholder="Date" required />
            <Form.Control.Feedback type="invalid">
              Please provide a date of publishing
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Amount</Form.Label>
            <Form.Control name='amount' type="text" placeholder="Date" required />
            <Form.Control.Feedback type="invalid">
              Please provide a amount
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
