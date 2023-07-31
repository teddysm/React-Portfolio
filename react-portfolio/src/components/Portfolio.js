import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import works from "./portfolio.json";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="work-cards">
      {works.map((work, i) => {
        return (
          <Card>
            <Card.Img variant="top" src={works[i].screenshot} />
            <Card.Body>
              <Card.Title>{works[i].title}</Card.Title>
              <Card.Text>{works[i].description}</Card.Text>
              {/* Note: put each button inside div if want them on each row*/}
              {works[i].github && (
                <a
                  className="link-button"
                  target="_blank"
                  href={works[i].github}
                >
                  <Button variant="primary">Github Link Here </Button>
                </a>
              )}
              {works[i].external && (
                <a
                  className="link-button"
                  target="_blank"
                  href={works[i].external}
                >
                  <Button variant="primary">Deployed Link Here </Button>
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
