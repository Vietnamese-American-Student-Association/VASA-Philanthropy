"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change and unlock scroll
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open (prevents iOS URL bar jitter)
  useEffect(() => {
    const cls = "no-scroll";
    if (open) document.body.classList.add(cls);
    else document.body.classList.remove(cls);
    return () => document.body.classList.remove(cls);
  }, [open]);

  return (
    <header className="mobile-header">
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
          className={`menu-btn ${open ? "open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-dropdown-nav ${open ? "open" : ""}`}>
        <Link href="/">About</Link>
        <Link href="/officers">Officers</Link>
        <Link href="/philanthropy">Philanthropy</Link>
        <Link href="/donation">Donate</Link>
      </nav>
    </header>
  );
}
