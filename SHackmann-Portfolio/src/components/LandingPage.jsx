
import './LandingPage.css';
import qrCode from '../assets/S.Hackmann.png';
import photo from '../assets/photo.png'

const LandingPage = () => (
  <div className="landing-page">
    <div className="content">
        <img src={photo} alt='Staysha Hackmann' id='photo-staysha' />
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
