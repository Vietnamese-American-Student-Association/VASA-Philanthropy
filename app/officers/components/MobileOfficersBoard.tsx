"use client";
import React from "react";
import OfficerCard, { Officer } from "./OfficerCard";

const executiveBoard: Officer[] = [
  { name: 'Madeline Quach', position: 'President', image: '/images/madeline.png' },
  { name: 'Huy Phan', position: 'External Vice President', image: '/images/huy.png' },
  { name: 'Jinju Nam', position: 'Internal Vice President', image: '/images/jinju.png' },
  { name: 'Dorothy Ta', position: 'Secretary', image: '/images/dorothy.png' },
  { name: 'Jason Lai', position: 'Events Coordinator', image: '/images/jinju.png' },
  { name: 'Stella Nguyen', position: 'Treasurer', image: '/images/stella.png' },
];

const generalBoard: Officer[] = [
  { name: 'Jeff Li', position: 'Philanthropy Chair', image: '/images/jeff.png' },
  { name: 'Alex Tran', position: 'Skit Chair', image: '/images/dort.png' },
  { name: 'Natalie Escobar', position: 'Skit Chair', image: '/images/jinju.png' },
  { name: 'Soleil Pham', position: 'Decorations Chair', image: '/images/huy.png' },
  { name: 'Caden Bianes', position: 'Decorations Chair', image: '/images/madeline.png' },
  { name: 'Julian Libutan', position: 'Public Relations Chair', image: '/images/jaz.png' },
  { name: 'Vinh Nguyen-Luu', position: 'Public Relations Chair', image: '/images/dort.png' },
  { name: 'Aileena Nguyen', position: 'Cultural Chair', image: '/images/jinju.png' },
  { name: 'Anna Nguyen', position: 'Cultural Chair', image: '/images/huy.png' },
  { name: 'Tristan Nguyen', position: 'Media Chair', image: '/images/jaz.png' },
  { name: 'My-Linh Eberhard', position: 'Media Chair', image: '/images/dort.png' },
  { name: 'Devin Chin', position: 'Media Chair', image: '/images/jinju.png' },
];

type MobileOfficersBoardProps = {
  type: 'eboard' | 'gboard';
};

const MobileOfficersBoard: React.FC<MobileOfficersBoardProps> = ({ type }) => {
  const boardMembers = type === 'eboard' ? executiveBoard : generalBoard;

  return (
    <div className="mobile-officer-grid">
      {boardMembers.map((officer, index) => (
        <OfficerCard key={index} officer={officer} />
      ))}
    </div>
  );
};

export default MobileOfficersBoard;
