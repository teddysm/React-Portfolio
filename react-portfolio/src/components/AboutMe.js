import Container from 'react-bootstrap/Container';
import Me from '../images/Me.jpg';

function AboutMe() {
  return (
    <main>
      <h4> About Me </h4>
      <img
        src={Me}
        style={{ borderRadius: '10px', width: '150px', margin: '10px' }}
      />
      <Container style={{ width: '650px' }}>
        <p>
          My name is Thanh Doan but I usually go by Ted. I was born in Ho Chi
          Minh city, Vietnam. I have always had a strong passion for technology
          ever since I was little by messing with (and breaking) all pieces of
          tech I could get my hands on. When I got my first computer, I know
          that I have met my match since there are so many things I could do and
          learn on the Internet. That is what got me into Computer Science and
          Software Engineering. I like solving problems, especially when I can
          solve problems with code.
        </p>
      </Container>
    </main>
  );
}

export default AboutMe;
