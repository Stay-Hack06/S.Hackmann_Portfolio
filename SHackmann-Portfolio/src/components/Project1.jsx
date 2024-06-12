import './Project.css';
import thumbnail from '../assets/project1-thumbnail.png'; // Adjust path as necessary

const Project1 = () => (
  <div className="project-section">
    <h1>Horoscopes</h1>
    <p>React website created with vite react utilizing a horoscopes api.</p>
    <a href="https://feam-1-horoscopes-starter.vercel.app/" target="_blank" rel="noopener noreferrer">
      <img src={thumbnail} alt="Staysha's Horoscope App" className="project-thumbnail" />
    </a>
  </div>
);

export default Project1;
