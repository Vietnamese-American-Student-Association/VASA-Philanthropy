import React from 'react';
import { FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-socials">
          <h2>STAY UPDATED ON OUR SOCIALS!</h2>
          <div className="footer-social-row icon-text">
            <span className="footer-icon"><FaInstagram /></span>
            <span>@VASAUCF</span>
          </div>
          <div className="footer-social-row icon-text">
            <span className="footer-icon"><FaFacebook /></span>
            <span>Va Sa</span>
          </div>
          <div className="footer-social-row icon-text">
            <span className="footer-icon"><FaDiscord /></span>
            <span>VASA UCF</span>
          </div>
        </div>
        <div className="footer-contact">
          <h2>CONTACT US</h2>
          <div className="footer-email">vasaproject407@gmail.com</div>
          <div>
            <img src="../images/VASALogo.png" alt="VASA Logo" className="vasa-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
