"use client"
import React, { useEffect, useState } from 'react';

const CrazyCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    });
  };

  const handleScroll = () => {
    setPosition((prevPosition) => ({
      x: Math.min(prevPosition.x, window.innerWidth + window.scrollX),
      y: Math.min(prevPosition.y, window.innerHeight + window.scrollY),
    }));
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="crazy-cursor" style={{ left: position.x, top: position.y }}></div>;
};

export default CrazyCursor;
