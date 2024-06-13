import './Project.css';
import thumbnail from '../assets/project3-thumbnail.png'; // Adjust path as necessary
import image1 from '../assets/project3-image1.png'; // Adjust path as necessary
import image2 from '../assets/project3-image2.png'; // Adjust path as necessary
import image3 from '../assets/project3-image3.png'; // Adjust path as necessary

const Project3 = () => (
  <div className="project-section">
    <div className="content">
      <div className="text-section">
        <h1>Dandy Fields Collective</h1>
        <p>Welcome to my Shopify e-commerce website, where creativity meets functionality! Explore a unique collection of digital art designs that bring a touch of artistry to your everyday life. From stylish clothing and chic stationery to elegant home decor and more, each piece is thoughtfully crafted to inspire and delight. Discover the perfect blend of beauty and practicality, transforming ordinary items into extraordinary works of art.</p>
      </div>
      <div className="thumbnail-and-images">
        <a href="https://www.dandyfields.com" target="_blank" rel="noopener noreferrer" className="thumbnail-link">
          <img src={thumbnail} alt="Dandy Fields Collective" className="project-thumbnail" />
        </a>
        <div className="stacked-images">
          <img src={image1} alt="Project 3 Image 1" className="project-image" />
          <img src={image2} alt="Project 3 Image 2" className="project-image" />
          <img src={image3} alt="Project 3 Image 3" className="project-image" />
        </div>
      </div>
    </div>
  </div>
);

export default Project3;
