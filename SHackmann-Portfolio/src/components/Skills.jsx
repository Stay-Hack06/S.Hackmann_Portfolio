import './Skills.css';

const Skills = () => (
  <div className="skills-section">
    <h1>My Skills</h1>
    <div className="skills-content">
      <div className="technical-skills">    
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> HTML, CSS, JavaScript Fundamentals, Python, C++</li>
          <li><strong>Frameworks:</strong> Bootstrap, Next.js</li>
          <li><strong>SEO:</strong> Website Performance, Website Optimization</li>
          <li><strong>UX Design:</strong> Wireframes, React.js</li>
          <li><strong>Quality Assurance:</strong> Identifying and documenting bugs</li>
          <li><strong>Project Management:</strong> Agile / SCRUM</li>
        </ul>
      </div>
      <div className="general-skills">
        <h2>Skills</h2>
        <ul>
          <li>Interpersonal Communication</li>
          <li>Team-Oriented</li>
          <li>Attention to Detail</li>
          <li>MS Office Proficiency</li>
          <li>Ability to Multitask</li>
          <li>Web Savvy</li>
          <li>Self-Motivated</li>
          <li>Time Management</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
