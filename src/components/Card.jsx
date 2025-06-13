import React from 'react'

const Card = ({ children, bg = 'bg-white' }) => {
  return (
    <div className={`${bg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
      {children}
    </div>
  );
};

export default Card