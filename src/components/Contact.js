import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

const contact = ({ }) => {
return (
<div className="row">
<div className="col s2 left  leftSide" id="contact">
  <h2  className="leftSideH2">Contact</h2>
</div>
<div className="col s10 right">
  <h3 className="contactLinks">
    <a href="mailto:mdschenck@gmail.com"> mdschenck@gmail.com </a>
    <a
      href="https://www.linkedin.com/in/michaeldschenck"
      target="top"
    >
      Linkedin
    </a>
    <a href="https://www.github.com/mdschenck" target="top">
      GitHub
    </a>
    <a
      href="./assets/files/MIchaelSchenck-Resume2022.pdf"
      target="top"
    >
      Resume
    </a>
  </h3>
</div>
<div className="col s10 right">
<h2>Reach Out!</h2>
<Form>
<Form.Group className="mb-3" controlId="formContactName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      <Form.Label>Email</Form.Label>
      <InputGroup hasValidation>

      <Form.Control type="email" required isInvalid/>
      <Form.Control.Feedback type="invalid">
        Please enter a valid email address.
      </Form.Control.Feedback>
    </InputGroup>

      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group> */}
      <Button variant="primary" type="submit" className="right">
        Submit
      </Button>
    </Form>


</div>
</div>
);
};

export default contact;