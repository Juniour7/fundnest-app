
import React from 'react';

const ProgressBar = ({ amountRaised, targetAmount }) => {
  const percentage = Math.min((amountRaised / targetAmount) * 100, 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-[#4FC0E8] h-2 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
