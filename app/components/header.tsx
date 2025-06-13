import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
        <h1>
          UCF VIETNAMESE AMERICAN STUDENT ASSOCIATION
        </h1>
        <nav>
          <Link href="/about">ABOUT US</Link>
          <span> | </span>
          <Link href="/officers">OFFICERS</Link>
          <span> | </span>
          <Link href="/philanthropy">PHILANTHROPY</Link>
          <span> | </span>
          <Link href="/donate">DONATE</Link>
        </nav>
    </header>
  );
};

export default Header;
