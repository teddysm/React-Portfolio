import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <main>
      <h5> Contact Me </h5>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Email address</Form.Label>
          <Form.Control size='lg' type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control type='text' placeholder='Message' />
        </Form.Group>
      </Form>
    </main>
  );
}

export default Contact;
