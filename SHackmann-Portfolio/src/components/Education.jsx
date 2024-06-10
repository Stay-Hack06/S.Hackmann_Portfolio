import "./Education.css";

const Education = () => (
  <div className="education-section">
    <h2>Education</h2>
    <div className="education-timeline">
      <div className="education-item">
        <div className="education-content">
          <strong>AnnieCannons Technical Bootcamp</strong>
          <br />
          June 2023 – Oct 2023
          <br />
          Completed comprehensive training in data literacy, HTML, CSS, and
          JavaScript.
        </div>
      </div>
      <div className="education-item">
        <div className="education-content">
          <strong>Rogue Community College</strong>
          <br />
          Computer Science Studies (2024)
          <br />
          Computer Information Sciences transfer
        </div>
      </div>
      <div className="education-item">
        <div className="education-content">
          <strong>University of Tennessee at Chattanooga</strong>
          <br />
          Computer Science - Cyber Security (Fall 2024 Transfer)
          <br />
          Studying computer science with a focus on Cyber Security
        </div>
      </div>
    </div>
  </div>
);

export default Education;
