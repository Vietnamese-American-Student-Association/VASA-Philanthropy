"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import "./donationPage.css";
import useIsMobile from "../hooks/useIsMobile";
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";
import { useSearchParams } from "next/navigation";

const AMOUNTS: number[] = [50, 25, 10, 5];

// Payment usernames - replace with actual usernames
const VENMO_USERNAME = "vasaucf";
const CASHAPP_USERNAME = "vasaucf";

const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

// Generate payment links
const generateVenmoLink = (amount: number, note: string = "UCF VASA Donation") => {
  if (amount <= 0) return "#";
  const encodedNote = encodeURIComponent(note);
  return `https://venmo.com/${VENMO_USERNAME}?txn=pay&amount=${amount}&note=${encodedNote}`;
};

const generateCashAppLink = (amount: number, note: string = "UCF VASA Donation") => {
  if (amount <= 0) return "#";
  const encodedNote = encodeURIComponent(note);
  return `https://cash.app/$${CASHAPP_USERNAME}/${amount}?note=${encodedNote}`;
};

/** Outer page: just provides the Suspense boundary */
export default function DonationPage() {
  return (
    <Suspense fallback={<div style={{ height: "50vh" }} />}>
      <DonationPageInner />
    </Suspense>
  );
}

/** Inner client component that actually uses useSearchParams */
function DonationPageInner() {
  const isMobile = useIsMobile();
  const searchParams = useSearchParams();

  const [selected, setSelected] = React.useState<number | "custom" | null>(null);
  const [customAmount, setCustomAmount] = React.useState("");

  // Initialize from ?amount=
  React.useEffect(() => {
    const amountParam = searchParams.get("amount");
    if (!amountParam) return;

    const n = Math.max(0, Math.min(999999, Math.floor(Number(amountParam))));
    if (!Number.isFinite(n) || n <= 0) return;

    if (AMOUNTS.includes(n)) {
      setSelected(n);
      setCustomAmount("");
    } else {
      setSelected("custom");
      setCustomAmount(String(n));
    }
  }, [searchParams]);

  const amount = selected === "custom" ? Number(customAmount || 0) : selected || 0;
  
  // Generate dynamic payment links
  const venmoLink = generateVenmoLink(amount);
  const cashAppLink = generateCashAppLink(amount);

  return (
    <div className="donation-page">
      {isMobile ? <MobileHeader /> : <Header />}

      {/* Desktop/tablet background only */}
      {!isMobile && (
        <>
          <div className="donation-bg">
            <Image
              src="/images/donateBackground.png"
              alt="Support VASA"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="donation-overlay" />
        </>
      )}

      <main className="donation-content">
        <section className="donation-card">
          <h1>THANK YOU FOR YOUR SUPPORT</h1>
          <p className="donation-copy">
            Your donation directly supports UCF VASA's efforts in the Collective
            Philanthropy Project. By contributing, you're not only helping
            deliver medical care to those in need, but also investing in the
            next generation of leaders and changemakers.
            <br />
            <br />
            <span>
              Every dollar counts and brings us one step closer to our goal.
              Thank you for being part of something meaningful!
            </span>
          </p>

          {/* Amount selector */}
          <div className="amount-row">
            {AMOUNTS.map((value) => (
              <button
                key={value}
                className={`amount-pill ${selected === value ? "selected" : ""}`}
                onClick={() => setSelected(value)}
                type="button"
              >
                {formatUSD(value)}
              </button>
            ))}

            {/* Custom unified control */}
            <div
              className={`amount-custom ${selected === "custom" ? "selected" : ""}`}
              onClick={() => setSelected("custom")}
              role="group"
              aria-label="Custom amount"
            >
              <span className="custom-label">CUSTOM</span>
              <div className="custom-chip">
                <span className="custom-dollar">$</span>
                <input
                  value={customAmount}
                  onChange={(e) => {
                    const v = e.target.value.replace(/[^\d]/g, "");
                    setCustomAmount(v);
                    if (selected !== "custom") setSelected("custom");
                  }}
                  inputMode="numeric"
                  placeholder=""
                  aria-label="Custom amount"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <h2 className="form-heading">YOUR INFORMATION</h2>
          <form className="donation-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              First Name *
              <input type="text" required />
            </label>
            <label>
              Last Name *
              <input type="text" required />
            </label>
            <label className="full">
              Company
              <input type="text" />
            </label>
            <label className="full">
              Instagram
              <input type="text" placeholder="@username" />
            </label>
            <label className="hide-name full">
              <input type="checkbox" /> Hide my name
            </label>
          </form>

          {/* Bottom: summary + payment */}
          <div className="bottom-bar">
            <div className="summary">
              <div className="summary-label">Donation Summary</div>
              <div className="summary-amount">{formatUSD(amount)}</div>
            </div>

            <div className="payment-buttons">
              <a 
                className={`pay-btn venmo ${amount <= 0 ? "disabled" : ""}`}
                href={venmoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pay with Venmo"
                onClick={amount <= 0 ? (e) => e.preventDefault() : undefined}
              >
                <span className="brand venmo-word">venmo</span>
              </a>
              <a 
                className={`pay-btn cashapp ${amount <= 0 ? "disabled" : ""}`}
                href={cashAppLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pay with Cash App"
                onClick={amount <= 0 ? (e) => e.preventDefault() : undefined}
              >
                <span className="cash-icon">$</span>
                <span className="brand">Cash App</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
}