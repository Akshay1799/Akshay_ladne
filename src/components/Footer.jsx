import React, { useContext } from 'react';
import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { DarkModeContext } from '../App';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <footer className={`w-full py-12 border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Akshay</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>🌍 Based in India</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Website Designed in Figma. Built with React and Tailwind CSS.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className={`transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}><Github size={20} /></a>
            <a href="#" className={`transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}><Globe size={20} /></a>
            <a href="#" className={`transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}><Linkedin size={20} /></a>
            <a href="#" className={`transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}><Twitter size={20} /></a>
          </div>
        </div>
        <div className={`mt-8 pt-8 border-t text-center ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© 2024 Akshay. All rights are reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 