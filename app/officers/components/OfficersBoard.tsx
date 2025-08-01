import React from 'react';
import OfficerCard, { Officer } from './OfficerCard';

const executiveBoard: Officer[] = [
  { name: 'Madeline Quach', position: 'President', image: '/images/madeline.png' },
  { name: 'Huy Phan', position: 'External Vice President', image: '/images/huy.png' },
  { name: 'Jinju Nam', position: 'Internal Vice President', image: '/images/jinju.png' },
  { name: 'Dorothy Ta', position: 'Secretary', image: '/images/dorothy.png' },
  { name: 'Jason Lai', position: 'Events Coordinator', image: '/images/jason.png' },
  { name: 'Stella Nguyen', position: 'Treasurer', image: '/images/stella.png' },
];

const generalBoard: Officer[] = [
  { name: 'Jeff Li', position: 'Philanthropy Chair', image: '/images/jeff.png' },
  { name: 'Alex Tran', position: 'Skit Chair', image: '/images/alex.png' },
  { name: 'Natalie Escobar', position: 'Skit Chair', image: '/images/nat.png' },
  { name: 'Soleil Pham', position: 'Decorations Chair', image: '/images/soleil.png' },
  { name: 'Caden Bianes', position: 'Decorations Chair', image: '/images/caden.png' },
  { name: 'Julian Libutan', position: 'Public Relations Chair', image: '/images/julian.png' },
  { name: 'Vinh Nguyen-Luu', position: 'Public Relations Chair', image: '/images/vinh.jpg' },
  { name: 'Aileena Nguyen', position: 'Cultural Chair', image: '/images/aileena.png' },
  { name: 'Anna Nguyen', position: 'Cultural Chair', image: '/images/anna.jpg' },
  { name: 'Tristan Nguyen', position: 'Media Chair', image: '/images/tristan.png' },
  { name: 'My-Linh Eberhard', position: 'Media Chair', image: '/images/mylinh.png' },
  { name: 'Devin Chin', position: 'Media Chair', image: '/images/devin.png' },
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