"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BoardToggle from "./components/BoardToggle";
import OfficersBoard from "./components/OfficersBoard";

const OfficersPage: React.FC = () => {
  const [activeBoard, setActiveBoard] = useState<"executive" | "general">("executive");

  return (
    <div id="page-container">
      <Header />
      <main>
        <div className="content-wrapper">
          <div className="board-header">
            <h2>
              {activeBoard === "executive" ? "Executive Board Officers" : "General Board Officers"}
            </h2>
            <div className="board-toggle-container">
              <BoardToggle activeBoard={activeBoard} setActiveBoard={setActiveBoard} />
            </div>
          </div>
          <OfficersBoard type={activeBoard === "executive" ? "eboard" : "gboard"} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficersPage;
