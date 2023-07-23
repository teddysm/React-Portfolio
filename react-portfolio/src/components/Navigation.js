import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ setPage }) {
  return (
    // <nav>
    //   <ul>
    //     <li onClick={()=>{ setPage("about-me")} }>About Me</li>
    //     <li onClick={()=>{ setPage("portfolio")} }>Portfolio</li>
    //     <li onClick={()=>{ setPage("resume")} }>Resume</li>
    //     <li onClick={()=>{ setPage("contact")} }>Contact</li>
    //   </ul>
    // </nav>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Thanh T Doan</Navbar.Brand>
        {/* <Navbar.Brand
          href=""
          onClick={() => {
            setPage("about-me");
          }}
        >
          About Me
        </Navbar.Brand>
        <Navbar.Brand
          href=""
          onClick={() => {
            setPage("portfolio");
          }}
        >
          Portfolio
        </Navbar.Brand>
        <Navbar.Brand
          href=""
          onClick={() => {
            setPage("resume");
          }}
        >
          Contact
        </Navbar.Brand>
        <Navbar.Brand
          href="" 
          onClick={() => {
            setPage("contact");
          }}
        >
          Resume
        </Navbar.Brand> */}
        <Nav variant="tabs" defaultActiveKey="#first" className="me-auto">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage("about-me");
              }}
            >
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage("portfolio");
              }}
            >
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage("resume");
              }}
            >
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setPage("contact");
              }}
            >
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
