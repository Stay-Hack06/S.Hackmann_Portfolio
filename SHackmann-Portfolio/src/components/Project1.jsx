import './Project.css';
import thumbnail from '../assets/project1-thumbnail.png'; // Adjust path as necessary

const Project1 = () => (
  <div className="project-section">
    <div className="content">
      <div className="text-section">
        <h1>Horoscopes</h1>
        <p>This project is a horoscope application built using React, a popular JavaScript library for building user interfaces. The application allows users to view daily horoscope information based on their zodiac signs and birth dates. It utilizes modern web technologies such as React hooks (useState, useEffect) for managing state and side effects, as well as ES6 features like arrow functions and template literals for writing concise and expressive code. Additionally, it integrates with a third-party API (RapidAPI) to fetch daily horoscope data dynamically. The project follows a modular component-based architecture, enhancing maintainability and scalability. Styling is achieved using CSS, providing a visually appealing and intuitive user experience. Overall, the project combines frontend development skills with API integration to deliver an engaging horoscope application for users to explore.</p>
      </div>
      <a href="https://feam-1-horoscopes-starter.vercel.app/" target="_blank" rel="noopener noreferrer" className="thumbnail-link">
        <img src={thumbnail} alt="Horoscopes App" className="project-thumbnail" />
      </a>
    </div>
  </div>
);

export default Project1;
