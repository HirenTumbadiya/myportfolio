// MobileMenu component

import React from 'react';
import Link from 'next/link';

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-50 overflow-hidden ${
        isOpen ? 'flex items-center justify-center' : 'hidden'
      }`}
      onClick={onClose}
    >
      <div className="text-white text-center p-8">
        <Link href="/">
          <p className="text-2xl font-bold mb-6 hover:underline hover:text-gray-300">Home</p>
        </Link>
        <Link href="/contact">
          <p className="text-2xl font-bold mb-6 hover:underline hover:text-gray-300">Contact</p>
        </Link>
        <Link href="/blog">
          <p className="text-2xl font-bold mb-6 hover:underline hover:text-gray-300">Blog</p>
        </Link>
        <Link href="/projects">
          <p className="text-2xl font-bold hover:underline hover:text-gray-300">Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
