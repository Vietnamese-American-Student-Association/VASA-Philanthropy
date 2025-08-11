'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside or on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: { key: string; }) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  // Close menu on window resize (if user rotates device)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mobile-header">
      <div className="mobile-header-top">
        <Link href="/" aria-label="VASA home">
          <Image
            src="/images/VASALogo.png"
            alt="VASA Logo"
            width={44}
            height={44}
            className="mobile-header-logo"
            priority
          />
        </Link>
        
        <button 
          className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>

      {/* Dropdown Navigation */}
      <nav 
        className={`mobile-dropdown-nav ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/officers" onClick={closeMenu}>
          Officers
        </Link>
        <Link href="/philanthropy" onClick={closeMenu}>
          Philanthropy
        </Link>
        <Link href="/donation" onClick={closeMenu}>
          Donate
        </Link>
      </nav>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </div>
  );
}