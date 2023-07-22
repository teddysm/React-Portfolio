import Container from "react-bootstrap/Container";
// import nav from "react-bootstrap/Nav";
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
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          onClick={() => {
            setPage("about-me");
          }}
        >
          About Me
        </Navbar.Brand>
        <Navbar.Brand
          onClick={() => {
            setPage("portfolio");
          }}
        >
          Portfolio
        </Navbar.Brand>
        <Navbar.Brand
          onClick={() => {
            setPage("resume");
          }}
        >
          Contact
        </Navbar.Brand>
        <Navbar.Brand
          onClick={() => {
            setPage("contact");
          }}
        >
          Resume
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
