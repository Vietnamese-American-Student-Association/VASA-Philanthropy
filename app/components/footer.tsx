import React from 'react';
import { FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-socials">
          <h2>STAY UPDATED ON OUR SOCIALS!</h2>
            <a
            href="https://www.instagram.com/vasaucf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-row icon-text"
            >
            <span className="footer-icon"><FaInstagram /></span>
            <span>@VASAUCF</span>
            </a>
          <div className="footer-social-row icon-text">
            <span className="footer-icon"><FaFacebook /></span>
            <span>VASA UCF</span>
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
            <Image src="/images/VASALogo.png" alt="VASA Logo" width={100} height={100} className="vasa-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;