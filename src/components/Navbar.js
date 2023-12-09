import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Navbar expand="lg" id="navbar-custom">
      <Container>
        <Navbar.Brand href="/">Sami's Portfolio</Navbar.Brand>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Navigation;