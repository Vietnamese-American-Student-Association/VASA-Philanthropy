"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/header"; // adjust to your path
import Footer from "../components/footer";
import "./donationPage.css";
import useIsMobile from "../hooks/useIsMobile";
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";

const AMOUNTS = [50, 25, 10, 5];

const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export default function DonationPage() {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState<number | "custom" | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const amount =
    selected === "custom" ? Number(customAmount || 0) : selected || 0;

  return (
    <div className="donation-page">
      {isMobile ? <MobileHeader /> : <Header />}

      {/* Background image */}
      <Image
        src="/images/donateBackground.png"
        alt="Support VASA"
        fill
        className="donation-bg"
      />
      <div className="donation-overlay" />

      <main className="donation-content">
        <section className="donation-card">
          <h1>Thank You For Your Support</h1>
          <p className="donation-copy">
            Your donation directly supports UCF VASA's efforts in the Collective Philanthropy Project. By contributing, you're not only helping deliver medical care to those in need, but also investing in the next generation of leaders and changemakers.
            <br />
            <br />
            <span>
              Every dollar counts and brings us one step closer to our goal. Thank you for being part of something meaningful!
            </span>
          </p>

          {/* Amount buttons */}
        <div className="amount-buttons">
            {AMOUNTS.map((value) => (
              <button
                key={value}
                className={`amount-button ${
                  selected === value ? "selected" : ""
                }`}
                onClick={() => setSelected(value)}
              >
                {formatUSD(value)}
              </button>
            ))}

            {/* Custom amount */}
            <div className="amount-custom-group">
              <button
                className={`amount-button ${
                  selected === "custom" ? "selected" : ""
                }`}
                onClick={() => setSelected("custom")}
              >
                Custom
              </button>
              <input
                type="number"
                min="1"
                placeholder="$"
                className="amount-custom-input"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelected("custom");
                }}
              />
            </div>
          </div>

          {/* Donation form */}
          <form className="donation-form">
            <label>
              First Name*
              <input type="text" required />
            </label>
            <label>
              Last Name*
              <input type="text" required />
            </label>
            <label>
              Company
              <input type="text" />
            </label>
            <label>
              Instagram
              <input type="text" placeholder="@username" />
            </label>
            <label className="hide-name">
              <input type="checkbox" /> Hide my name
            </label>
          </form>

          {/* Summary */}
          <div className="bottom-section">
                <div className="donation-summary">
                    <div>Donation&nbsp;Summary</div>&nbsp;<div>{formatUSD(amount)}</div>
                </div>

                {/* Payment buttons */}
                <div className="payment-buttons">
                    <button className="pay-btn stripe">Stripe</button>
                    <button className="pay-btn venmo">Venmo</button>
                    <button className="pay-btn cashapp">Cash&nbsp;App</button>
                </div>
          </div>
        </section>
      </main>

      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
}