import React from 'react';
import OfficerCard, { Officer } from './officerCard';

const executiveBoard: Officer[] = [
  { name: 'Madeline Quach', position: 'President', image: '/images/madeline.png' },
  { name: 'Huy Phan', position: 'Internal Vice President', image: '/images/huy.png' },
  { name: 'Jinju Nam', position: 'External Vice President', image: '/images/jinju.png' },
  { name: 'Dorothy Ta', position: 'Secretary', image: '/images/dort.png' },
  { name: 'Jason Lai', position: 'Events Coordinator', image: '/images/jinju.png' },
  { name: 'Stella Nguyen', position: 'Treasurer', image: '/images/jinju.png' },
];

const generalBoard: Officer[] = [
  { name: 'Jeff Li', position: 'Historian', image: '/images/jaz.png' },
  { name: 'Alex Tran', position: 'Webmaster', image: '/images/dort.png' },
  { name: 'Natalie Escobar', position: 'Logistics Chair', image: '/images/jinju.png' },
  { name: 'Soleil Pham', position: 'Decorations Chair', image: '/images/huy.png' },
  { name: 'Caden Bianes', position: 'Decorations Chair', image: '/images/madeline.png' },
  { name: 'Julian Libutan', position: 'Public Relations Chair', image: '/images/jaz.png' },
  { name: 'Vinh Nguyen-Luu', position: 'Public Relations Chair', image: '/images/dort.png' },
  { name: 'Aileena Nguyen', position: 'Culture Chair', image: '/images/jinju.png' },
  { name: 'Anna Nguyen', position: 'Culture Chair', image: '/images/huy.png' },
  { name: 'Tristan Nguyen', position: 'Videographer', image: '/images/jaz.png' },
  { name: 'My-Linh Eberhard', position: 'Videographer', image: '/images/dort.png' },
  { name: 'Devin Chin', position: 'Community Chair', image: '/images/jinju.png' },
];

type OfficersBoardProps = {
  type: 'eboard' | 'gboard';
};

const OfficersBoard: React.FC<OfficersBoardProps> = ({ type }) => {
  const boardMembers = type === 'eboard' ? executiveBoard : generalBoard;

  return (
    <div>
      <div className="officer-grid">
        {boardMembers.map((officer, index) => (
          <OfficerCard key={index} officer={officer} />
        ))}
      </div>
    </div>
  );
};

export default OfficersBoard;
