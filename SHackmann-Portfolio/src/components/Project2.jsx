import './Project.css';
import thumbnail from '../assets/project2-thumbnail.png'; // Adjust path as necessary


const Project2 = () => (
  <div className="project-section">
    <h2>Weather App</h2>
    <p>React weather app utilizing a weather api</p>
    <a href="https://vercel.com/react-weather-app" target="_blank" rel="noopener noreferrer">
      <img src={thumbnail} alt="Weather App" className="project-thumbnail" />
    </a>
  </div>
);

export default Project2;