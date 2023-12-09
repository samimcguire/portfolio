import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Bio = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Body class="my-3 py-3 text-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-zJoy0SktPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body class="my-3 py-3 text-center">
          <Card.Title >Introduction</Card.Title>
          <Card.Text>
            <p>Welcome! And thank you so much for taking the time to look through my portfolio.</p>
            <p>My name is Samantha McGuire and I am currently a student in the MIT Bootcamp and a Customer Success Manager for LASSO. I have always been fascinated with technology but, until now, I have lacked the courage to jump into coding. This portfolio is the beginning of my journey and I am so excited to share with you.</p>
            <p>Please check out my <a href="https://www.linkedin.com/in/samimcguire/">LinkedIn</a> and <a href="https://github.com/samimcguire">GitHub</a> pages. Your feedback is greatly appreciated!</p>
            <p>Email: samimcguire@gmail.com</p>
            <p>GitHub Username: samimcguire</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Bio;