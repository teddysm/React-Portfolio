import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import works from './portfolio.json';
import './Portfolio.css';
import img1 from '../images/profile.png';
import img2 from '../images/SyllaShare.png';
import img3 from '../images/SpyGame.png';
import img4 from '../images/snake.jpg';
import img5 from '../images/Front-page.png';
import img6 from '../images/screenshot3.png';

function Portfolio() {
  const imgArray = [img1, img2, img3, img4, img5, img6];
  return (
    <div className='work-cards'>
      {works.map((work, i) => {
        return (
          <Card>
            <Card.Img variant='top' src={imgArray[i]} />
            <Card.Body>
              <Card.Title>{works[i].title}</Card.Title>
              <Card.Text>{works[i].description}</Card.Text>
              {/* Note: put each button inside div if want them on each row*/}
              {works[i].github && (
                <a
                  className='link-button'
                  target='_blank'
                  href={works[i].github}
                >
                  <Button variant='primary'>Github Link Here </Button>
                </a>
              )}
              {works[i].external && (
                <a
                  className='link-button'
                  target='_blank'
                  href={works[i].external}
                >
                  <Button variant='primary'>Deployed Link Here </Button>
                </a>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Portfolio;
