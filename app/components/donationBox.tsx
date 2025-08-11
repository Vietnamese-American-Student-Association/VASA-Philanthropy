"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const DONATION_AMOUNTS = [50, 25, 10, 5] as const;
const DONATION_ROUTE = "/donation"; // <— make sure this matches your folder (app/donate/page.tsx)

export default function DonationBox() {
  const [selected, setSelected] = useState<number | "custom" | null>(null);
  const [custom, setCustom] = useState("");
  const router = useRouter();

  const resolvedAmount =
    selected === "custom" ? Number(custom || 0) : Number(selected || 0);
  const canSubmit = resolvedAmount > 0;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    router.push(`${DONATION_ROUTE}?amount=${resolvedAmount}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "5rem",
        background: "#E8EDDF",
        borderRadius: "16px",
        padding: "1.2rem 2rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        maxWidth: 450,
        width: "100%",
        textAlign: "center",
        fontFamily: "Rubik",
      }}
    >
      <h2
        style={{
          fontFamily: "Rubik",
          fontWeight: 800,
          marginBottom: "1.25rem",
          color: "#171717",
          fontSize: "2rem",
          lineHeight: 1.15,
          letterSpacing: ".02em",
        }}
      >
        THANK YOU FOR
        <br />
        YOUR SUPPORT
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", marginBottom: "1rem" }}>
        {DONATION_AMOUNTS.map((amt) => (
          <button
            key={amt}
            type="button"
            aria-pressed={selected === amt}
            onClick={() => {
              if (selected === amt) setSelected(null);
              else {
                setSelected(amt);
                setCustom("");
              }
            }}
            style={{
              flex: "1 1 45%",
              padding: "0.9rem 0",
              borderRadius: "12px",
              border: selected === amt ? "3px solid #6B4A1B" : "3px solid transparent",
              background: "#FFC94B",
              color: "#1b1b1b",
              fontWeight: 800,
              fontSize: "1.15rem",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            ${amt}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          marginBottom: "0.75rem",
          padding: "0.6rem",
          background: "#FFC94B",
          borderRadius: "12px",
        }}
      >
        <label
          htmlFor="donation-custom"
          style={{ fontWeight: 800, color: "#1b1b1b", fontSize: "1.05rem" }}
        >
          CUSTOM
        </label>

        <input
          id="donation-custom"
          name="donationAmount"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="off"
          placeholder="$"
          value={custom}
          onFocus={() => setSelected("custom")}
          onChange={(e) => {
            const onlyDigits = e.target.value.replace(/[^\d]/g, "");
            setCustom(onlyDigits);
            setSelected("custom");
          }}
          aria-label="Custom donation amount in dollars"
          minLength={1}
          maxLength={6}
          style={{
            flex: 1,
            padding: "0.6rem",
            borderRadius: "10px",
            border: selected === "custom" ? "3px solid #6B4A1B" : "3px solid #FFC94B",
            outline: "none",
            fontSize: "1.05rem",
            background: "#fff",
            color: "#1b1b1b",
            fontWeight: 700,
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        style={{
          width: "100%",
          padding: "0.9rem 0",
          borderRadius: "12px",
          background: canSubmit ? "#664C43" : "#8f7a73",
          color: "#fff",
          fontWeight: 800,
          fontSize: "1.1rem",
          border: "none",
          cursor: canSubmit ? "pointer" : "not-allowed",
          letterSpacing: ".5px",
        }}
      >
        DONATE
      </button>
    </form>
  );
}