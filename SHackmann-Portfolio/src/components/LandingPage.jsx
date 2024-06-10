
import './LandingPage.css';
import qrCode from '../assets/S.Hackmann.png';

const LandingPage = () => (
  <div className="landing-page">
    <div className="content">
      <div className="text-section">
        <h1>STAYSHA HACKMANN</h1>
        <p>FULL-STACK SOFTWARE ENGINEER</p>
      </div>
      <div className="qr-code">
        <img src={qrCode} alt="QR Code" />
      </div>
    </div>
  </div>
);

export default LandingPage;
