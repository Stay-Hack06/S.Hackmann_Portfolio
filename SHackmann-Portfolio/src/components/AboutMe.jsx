import './AboutMe.css';
import butterflyImage from '../assets/Untitled design (6).png';

const AboutMe = () => (
    <div className="about-me">
        <div className="about-content">
            <div className="text-section">
                <h2>Hello, my name is Staysha</h2>
                <p>Hello! I am a passionate software engineer with a deep love for creating innovative solutions and tackling intricate puzzles. From a young age, I found joy in the challenge of solving complex problems, which naturally led me to the world of software development. I thrive in environments that are fun, creative, and intellectually stimulating, where I can continuously learn and grow. I am always on the lookout for opportunities that allow me to apply my skills in new and exciting ways. Let us create something amazing together!</p>
            </div>
        <div className="image-section">
            <img src={butterflyImage} alt="Butterfly" />
        </div>
    </div>
</div>
);

export default AboutMe;