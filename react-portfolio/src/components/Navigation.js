import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation({ setPage }) {
  return (
    <Navbar
      expand='lg'
      bg='dark'
      data-bs-theme='dark'
      sticky='top'
    >
      <Container>
        <Navbar.Brand>
          <h2>Thanh T Doan</h2>
        </Navbar.Brand>
        <Nav variant='tabs' defaultActiveKey='#first' className='me-auto'>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage('about-me');
              }}
            >
              <h5>About Me</h5>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage('portfolio');
              }}
            >
              <h5>Portfolio</h5>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage('resume');
              }}
            >
              <h5>Resume</h5>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage('contact');
              }}
            >
              <h5>Contact</h5>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
