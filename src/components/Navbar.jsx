import React, { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { DarkModeContext } from '../App';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <nav className={`fixed top-0 left-[-50px] right-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center ">
            <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}> <span className="text-purple-400">⚡</span> Akshay </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className={`transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Home</a>
              <a href="#skills" className={`transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Skills</a>
              <a href="#projects" className={`transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Projects</a>
              <a href="#contact" className={`transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* social links */}
          <div className="flex gap-4 justify-center mt-8">
            <a href="https://github.com/Akshay1799" target='_blank' className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400 hover:text-white hover:bg-transparent' : 'text-gray-600 hover:text-gray-900 hover:bg-transparent'}`}><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/akshay-ladne-42602a195/" target='_blank' className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400  hover:text-blue-500 hover:bg-transparent' : 'text-gray-600  hover:text-blue-500 hover:bg-transparent'}`}><FaLinkedin size={24} /></a>
            <a href="https://x.com/akshay_ladne" target='_blank' className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-400   hover:text-blue-400 hover:bg-transparent' : 'text-gray-600 hover:text-blue-400 hover:bg-transparent'}`}><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 