import MyResume from '../images/resume.png';

function Resume() {
  return (
    <main>
      <h3>My Resume</h3>
      <a
        href='../images/resume.png'
        fileName='resume.png'
        download
        target='_blank'
      >
        <img src={MyResume}></img>
      </a>
    </main>
  );
}

export default Resume;
