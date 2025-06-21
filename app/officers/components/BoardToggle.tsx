import React from "react";

type BoardToggleProps = {
  activeBoard: "executive" | "general";
  setActiveBoard: (board: "executive" | "general") => void;
};

const BoardToggle: React.FC<BoardToggleProps> = ({ activeBoard, setActiveBoard }) => {
  return (
    <>
      <button 
        className={`board-toggle-btn ${activeBoard === "executive" ? "active" : ""}`}
        onClick={() => setActiveBoard("executive")}
      >
        E-Board
      </button>
      <button
        className={`board-toggle-btn ${activeBoard === "general" ? "active" : ""}`}
        onClick={() => setActiveBoard("general")}
      >
        G-Board
      </button>
    </>
  );
};

export default BoardToggle;