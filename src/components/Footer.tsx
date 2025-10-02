import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🇸🇬 Singapore Adventure 2025</h3>
          <p>An unforgettable father-son journey to the Lion City</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Gardens by the Bay</li>
            <li>Marina Bay Sands</li>
            <li>Singapore F1 Grand Prix</li>
            <li>Changi Airport</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Travel Dates</h4>
          <p>October 2-7, 2025</p>
          <p>5 Days of Adventure</p>
          <p>Singapore, Southeast Asia</p>
        </div>

        <div className="footer-section">
          <h4>Travelers</h4>
          <p>Simon Marks (70)</p>
          <p>Jeremy Marks (39)</p>
          <p>From Australia 🇦🇺</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made with ❤️ for an epic F1 adventure</p>
        <p>© 2025 Simon & Jeremy's Singapore Trip</p>
      </div>
    </footer>
  );
};

export default Footer;
