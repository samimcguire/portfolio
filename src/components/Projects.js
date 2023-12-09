import PacMan1 from '../assets/PacMan1.png';
import PacMan3 from '../assets/PacMan3.png';
import Eyes from '../assets/eyes.png';
import Heatmap from '../assets/heatmap.png';
import Blue from '../assets/blue.png';
import Blockie from '../assets/blockie.png';
import BadBank from '../assets/badbanklogo.png';
import EComm from '../assets/ecommerce.JPG';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';


const Projects = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0" id="accordian">
        <Accordion.Header>Part 1: Web Development with Javascript</Accordion.Header>
        <Accordion.Body>
          <Row xs={1} md={2}>
            <Col>
              <Card>
                <Card.Img variant="top" src={PacMan1} id="image" />
                <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <Card.Title>
                    <h2>Simple Pacman</h2>
                  </Card.Title>
                  <Card.Text>
                    <p><a id="link" href="https://samimcguire.github.io/pacman/" target="_blank">Project in Action</a></p>
                    <p><a id="link" href="https://github.com/samimcguire/pacman/" target="_blank">GitHub Repository</a></p>
                    <p id="project-description">In this project, the Pacman bounces inside of the confines of your window.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={PacMan3} id="image" />
                <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <Card.Title>
                    <h2>Complex Pacman</h2>
                  </Card.Title>
                  <Card.Text>
                    <p><a id="link" href="https://samimcguire.github.io/pacman-exersize/" target="_blank">Project in Action</a></p>
                    <p><a id="link" href="https://github.com/samimcguire/pacman-exercise/x" target="_blank">GitHub Repository</a></p>
                    <p id="project-description">This Pacman exercise generates random sized Pacmen and sends them bouncing around your window.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <Card>
                <Card.Img variant="top" src={Eyes} id="image" />
                <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <Card.Title>
                    <h2>Eyes Exersize</h2>
                  </Card.Title>
                  <Card.Text>
                    <p><a id="link" href="https://samimcguire.github.io/eyes-exersize/" target="_blank">Project in Action</a></p>
                    <p><a id="link" href="https://github.com/samimcguire/eyes-exersize" target="_blank">GitHub Repository</a></p>
                    <p id="project-description">Incorporating Style and Events, this Eyes Exersize moves the pupils with your cursor movements.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Heatmap} id="image" />
                <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <Card.Title>
                    <h2>Chicago Heatmap</h2>
                  </Card.Title>
                  <Card.Text>
                    <p><a id="link" href="https://samimcguire.github.io/chicago-crime-heat-map/" target="_blank">Project in Action</a></p>
                    <p><a id="link" href="https://github.com/samimcguire/chicago-crime-heat-map" target="_blank">GitHub Repository</a></p>
                    <p id="project-description">Using MapBox API and 2012 Chicago crime data, we were able to create this heatmap.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <Card>
                <Card.Img variant="top" src={Blue} id="image" />
                <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <Card.Title>
                    <h2>Bus Tracker</h2>
                  </Card.Title>
                  <Card.Text>
                    <p><a id="link" href="https://samimcguire.github.io/boston-bus-tracker/" target="_blank">Project in Action</a></p>
                    <p><a id="link" href="https://github.com/samimcguire/boston-bus-tracker" target="_blank">GitHub Repository</a></p>
                    <p id="project-description">Using Google Maps and MBTA API's, we were able to map bus routes in Boston that updates every 15 seconds.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Blockie} id="image" />
                <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <Card.Title>
                    <h2>Make a Blockie</h2>
                  </Card.Title>
                  <Card.Text>
                    <p><a id="link" href="https://samimcguire.github.io/blockie/" target="_blank">Project in Action</a></p>
                    <p><a id="link" href="https://github.com/samimcguire/blockie" target="_blank">GitHub Repository</a></p>
                    <p id="project-description">In our introduction to cyber security we made blockies of our name. Enter your name and see what your blockie is!</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <AccordionItem eventKey="1" id="accordian">
        <Accordion.Header>Part 2: Front-End Development with React</Accordion.Header>
          <Accordion.Body>
            <Row xs={1} md={2}>
              <Col>
                <Card>
                  <Card.Img variant="top" src={BadBank} id="image" />
                  <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <Card.Title>
                      <h2>BadBank</h2>
                    </Card.Title>
                    <Card.Text>
                      <p><a id="link" href="https://samantha-mcguirebankingapplication.netlify.app" target="_blank">Project in Action</a></p>
                      <p><a id="link" href="https://github.com/samimcguire/bad-bank-app" target="_blank">GitHub Repository</a></p>
                      <p id="project-description">This is the Bad Bank created with React! So called "bad" because there is no security and no back-end to it. See part 2 of this project as a Capstone project.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={EComm} id="image" />
                  <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <Card.Title>
                      <h2>E-Commerce</h2>
                    </Card.Title>
                    <Card.Text>
                      <p><a id="link" href="https://samantha-mcguire-ecommerce.netlify.app" target="_blank">Project in Action</a></p>
                      <p><a id="link" href="https://github.com/samimcguire/e-commerce" target="_blank">GitHub Repository</a></p>
                      <p><a id="link" href="https://www.figma.com/file/mf6j7e1THtZjau3lg5rQPZ/Book-E-Commerce-Site---Rough-Draft?type=design&node-id=0%3A1&mode=design&t=ZJuVHIxTV8F9BlP1-1" target="_blank">Figma</a></p>
                      <p id="project-description">This is a work in progress e-commerce site. Created with React and utilizes Axios.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
      </AccordionItem>
      <AccordionItem eventKey="2" id="accordian">
      <Accordion.Header>Part 3: Back-End Development (Projects TBD)</Accordion.Header>
        <Accordion.Body>
          <Row xs={1} md={2}>
            <Col>
              <Card>
                <Card.Img variant="top" id="image" />
                <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <Card.Title>
                    <h2>Tiered Bad Bank</h2>
                  </Card.Title>
                  <Card.Text>
                    <p id="project-description">This project will build on the front-end Bad Bank project connecting it to a database and adding user authentication.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" id="image" />
                <Card.Body className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <Card.Title>
                    <h2>Tiered Restaurant App</h2>
                  </Card.Title>
                  <Card.Text>
                    <p id="project-description">This project is in the design phase and still a work in progress and will be shared closer to January 2024.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Accordion.Body>
      </AccordionItem>
    </Accordion>
  );
}

export default Projects;