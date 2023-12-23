"use client"
import React, { useEffect, useState } from 'react';

const CrazyCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="crazy-cursor" style={{ left: position.x, top: position.y }}>
    </div>
  );
};

export default CrazyCursor;
