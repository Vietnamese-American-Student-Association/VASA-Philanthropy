"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="mobile-header">
      <div className="mobile-header-top">
        <Image
          src="/images/VASALogo.png"
          alt="VASA Logo"
          width={50}
          height={50}
          className="vasa-logo"
        />
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={28} color="black" /> : <FaBars size={28} color="black" />}
        </button>
      </div>

        <nav className={`mobile-dropdown-nav ${open ? 'open' : ''}`}>
            <Link href="/" prefetch={false} onClick={() => setOpen(false)}>ABOUT US</Link>
            <Link href="/officers" onClick={() => setOpen(false)}>OFFICERS</Link>
            <Link href="/philanthropy" onClick={() => setOpen(false)}>PHILANTHROPY</Link>
            <Link href="/donation" onClick={() => setOpen(false)}>DONATE</Link>
        </nav>

    </header>
  );
};

export default MobileHeader;
