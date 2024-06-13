import './Project.css';
import thumbnail from '../assets/project2-thumbnail.png'; // Adjust path as necessary

const Project2 = () => (
  <div className="project-section">
    <div className="content">
      <div className="text-section">
        <h1>Weather App</h1>
        <p>A responsive web application that provides real-time weather information for any location entered by the user. It features current weather conditions, a three-day forecast, and highlights the hottest day of the upcoming week. Built with React.js and utilizing WeatherAPI, the app ensures a seamless and visually appealing experience across all devices, with dynamic backgrounds and a maximum width constraint for readability. Deployed on Vercel, it offers fast and reliable weather updates.</p>
      </div>
      <a href="https://react-weather-app-fawn-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="thumbnail-link">
        <img src={thumbnail} alt="Weather App" className="project-thumbnail" />
      </a>
    </div>
  </div>
);

export default Project2;
