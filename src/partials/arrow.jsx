import React from 'react';

const ArrowIcon = ({ direction = 'right' }) => {
  return (
    <div className="relative w-12 h-12 rounded-full bg-[rgba(218,197,167,0.05)] backdrop-blur-[7.5px] flex items-center justify-center transition-transform duration-300 ease-in-out">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`text-[#DAC5A7] transition-transform duration-300 ease-in-out ${direction === 'down' ? 'rotate-90' : ''}`}
      >
        <path 
          d="M5 12H19M19 12L12 5M19 12L12 19" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
