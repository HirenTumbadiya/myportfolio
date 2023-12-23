"use client"
import React from 'react';
import { Github, Instagram, Linkedin } from 'react-bootstrap-icons';

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 h-full flex flex-col items-center justify-center space-y-4 p-4">
            <div className="border-l border-white h-40 mx-4"/>
      <a  href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <Linkedin size={20} color='white'/>
      </a>
      <div className="border-l border-white h-40 mx-4"/>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <Github size={20} color='white' />
      </a>
      <div className="border-l border-white h-40 mx-4"/>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <Instagram size={20} color='white' />
      </a>
      <div className="border-l border-white h-40 mx-4"/>
    </div>
  );
};

export default SocialLinks;
