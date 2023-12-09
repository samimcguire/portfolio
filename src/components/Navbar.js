import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" id="navbar-custom">
      <Container>
        <Link to='/' className="nav-link"><li className="nav-item">Sami's Portfolio</li></Link>
        <Link to='/projects' className="nav-link"><li className="nav-item">Projects</li></Link>
      </Container>
    </Navbar>
  );
}

export default Navigation;