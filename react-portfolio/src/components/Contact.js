import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

function Contact() {
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleAlert = () => {
    setDisplayAlert(true);
  };

  return (
    <main>
      <Container style={{ width: '700px' }}>
        <h5> Contact Me </h5>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Name</Form.Label>
            <Form.Control size='lg' type='name' placeholder='John Smith' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size='lg'
              type='email'
              placeholder='name@example.com'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message</Form.Label>
            <Form.Control size='lg' type='text' placeholder='Your Message' />
          </Form.Group>
          <Button variant='dark' onClick={handleAlert}>
            Submit
          </Button>
          {displayAlert && (
            <Alert
              dismissible
              key='info'
              variant='info'
              style={{ margin: '25px' }}
            >
              <h4>Message submitted!</h4>
            </Alert>
          )}
        </Form>
      </Container>
    </main>
  );
}

export default Contact;
