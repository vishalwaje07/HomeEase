import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const styles = {
  color: "#A8A944",
  fontSize: 100,
  // You can adjust other styles here as needed
};

const ContactUs = () => {
  useEffect(() => {
    document.title = "HomeEase || ContactUs";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to handle form submission, like sending an email or saving the message.
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container>
      <Row className='text-center mt-5 mb-5'>
        <Col>
          <h1 style={styles}>SAY HELLO TO US!</h1>
          <h3>Contact Information</h3>
          <p>
            Feel free to get in touch with us for any inquiries or feedback.
          </p>
          <h4>Email: contact@example.com</h4>
          <h4>Phone: +91 89562 16939</h4>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
