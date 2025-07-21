"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BoardToggle from "./components/BoardToggle";
import OfficersBoard from "./components/OfficersBoard";
import MobileOfficersBoard from "./components/MobileOfficersBoard";
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";
import useIsMobile from "../hooks/useIsMobile";

const OfficersPage: React.FC = () => {
  const [activeBoard, setActiveBoard] = useState<"executive" | "general">("executive");
  const isMobile = useIsMobile();

  return (
    <div id="page-container">
      {isMobile ? <MobileHeader /> : <Header />}
      <main>
        <div className="content-wrapper">
          <div className="board-header">
            <h2 className="text-2xl text-green-500">
              {activeBoard === "executive" ? "Executive Board Officers" : "General Board Officers"}
            </h2>
            <div className="board-toggle-container">
              <BoardToggle activeBoard={activeBoard} setActiveBoard={setActiveBoard} />
            </div>
          </div>
          {isMobile ? (
            <MobileOfficersBoard type={activeBoard === "executive" ? "eboard" : "gboard"} />
          ) : (
            <OfficersBoard type={activeBoard === "executive" ? "eboard" : "gboard"} />
          )}
        </div>
      </main>
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default OfficersPage;
