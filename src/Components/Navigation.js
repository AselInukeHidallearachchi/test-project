import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Authentication from './Authentication';
import DeliverooLogo from '../Assets/logo-teal.svg';

const svgImageStyle = {
  width: "130px",
  height: "30px",
  fill: "#00ccbc",
};

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img
            src={DeliverooLogo}
            alt="Deliveroo Logo"
            style={svgImageStyle} // Adjust the size as needed
          />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
             <Authentication/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;