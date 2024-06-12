import './Project.css';
import thumbnail from '../assets/project3-thumbnail.png'; // Adjust path as necessary
import image1 from '../assets/project3-image1.png'; // Adjust path as necessary
import image2 from '../assets/project3-image2.png'; // Adjust path as necessary
import image3 from '../assets/project3-image3.png'; // Adjust path as necessary

const Project3 = () => (
  <div className="project-section">
    <h2>Dandy Fields Collective</h2>
    <p>E-commerce website selling a collection of my artistic designs.</p>
    <div className="project3-content">
      <a href="https://www.dandyfields.com" target="_blank" rel="noopener noreferrer" className="thumbnail-link">
        <img src={thumbnail} alt="Project 3 Thumbnail" className="project-thumbnail" />
      </a>
      <div className="stacked-images">
        <img src={image1} alt="Project 3 Image 1" className="project-image" />
        <img src={image2} alt="Project 3 Image 2" className="project-image" />
        <img src={image3} alt="Project 3 Image 3" className="project-image" />
      </div>
    </div>
  </div>
);

export default Project3;
