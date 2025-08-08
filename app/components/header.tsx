import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <h1>UCF VIETNAMESE AMERICAN STUDENT ASSOCIATION</h1>
      <nav aria-label="Primary">
        <Link href="/">ABOUT US</Link>
        <span> | </span>
        <Link href="/officers">OFFICERS</Link>
        <span> | </span>
        <Link href="/philanthropy">PHILANTHROPY</Link>
        <span> | </span>
        <Link href="/donation">DONATE</Link>
      </nav>
    </header>
  );
};

export default Header;