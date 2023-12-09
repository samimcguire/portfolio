import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Projects = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="PacMan1.png" />
            <Card.Body class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <Card.Title>
                <h2 class="display-5">Simple Pacman</h2>
              </Card.Title>
              <Card.Text>
                <p class="lead"><a href="https://samimcguire.github.io/pacman/">Project in Action</a></p>
                <p class="lead"><a href="https://github.com/samimcguire/pacman">GitHub Repository</a></p>
                <p id="project-description">In this project, the Pacman bounces inside of the confines of your window.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Projects;