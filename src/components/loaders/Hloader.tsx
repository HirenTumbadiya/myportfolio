import React from 'react';

const HLoader = () => {
  return (
    <div className="h-loader h-screen flex items-center justify-center">
      <div className="w-4 h-16 bg-blue-500 mx-1 animate-h-loader"></div>
      <div className="w-4 h-16 bg-blue-500 mx-1 animate-h-loader"></div>
      <div className="w-4 h-16 bg-blue-500 mx-1 animate-h-loader"></div>
    </div>
  );
};

export default HLoader;
