import React, { useContext } from 'react';
import {FaLinkedin, FaGithub, FaTwitter  } from 'react-icons/fa'
import { DarkModeContext } from '../App';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <footer className={`w-full py-12  `}>
      
        
        <div className={`mt-8 pt-8 border-t text-center ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© 2025 Akshay. All rights are reserved.</p>
          <div className="flex gap-4 mx-12 mt-[-20px]">
            <a href="https://github.com/Akshay1799" target='_blank' className={`transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/akshay-ladne-42602a195/" target='_blank' className={`transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}><FaLinkedin size={20} /></a>
            <a href="https://x.com/akshay_ladne" className={`transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}><FaTwitter size={20} /></a>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer; 