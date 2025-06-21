import React from 'react';

export interface Officer {
  name: string;
  position: string;
  image: string;
}
const OfficerCard: React.FC<{ officer: Officer }> = ({ officer }) => {
  return (
    <div className="officer-card">
      <img
        src={officer.image}
        alt={officer.name}
      />
      <h3>{officer.name}</h3>
      <p>{officer.position}</p>
    </div>
  );
};

export default OfficerCard;
