"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "About" },
  { href: "/officers", label: "Officers" },
  { href: "/philanthropy", label: "Philanthropy" },
  { href: "/donation", label: "Donate" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open (prevents iOS address-bar thrash)
  useEffect(() => {
    const cls = "no-scroll";
    if (open) document.body.classList.add(cls);
    else document.body.classList.remove(cls);
    return () => document.body.classList.remove(cls);
  }, [open]);

  // Allow ESC to close, and close when clicking a link
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleLinkClick = useCallback(() => setOpen(false), []);

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

      <nav
        id="mobile-nav"
        className={`mobile-dropdown-nav ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={handleLinkClick}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}