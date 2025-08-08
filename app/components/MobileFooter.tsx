"use client";

import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const MobileFooter: React.FC = () => {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-message">STAY UPDATED ON OUR SOCIALS!</div>

      <div className="mobile-footer-top">
        <Image
          src="/images/VASALogo.png"
          alt="VASA Logo"
          width={50}
          height={50}
          className="mobile-footer-logo"
        />
        <div className="mobile-footer-contact">
          <p className="email">vasaproject407@gmail.com</p>
        </div>
      </div>

      <div className="mobile-footer-socials">
        <a
          href="https://www.instagram.com/vasaucf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/vasa.ucf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default MobileFooter;