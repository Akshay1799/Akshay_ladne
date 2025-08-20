import React, { useContext } from 'react';
import { Eye, MessageSquare } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { DarkModeContext } from '../App';
import profile from '../assets/profile.jpg'

const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  const handleViewProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="home" className="pt-24 pb-16 relative overflow-hidden min-h-screen flex items-center ">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full max-w-2xl">

            {/* Profile Image */}
            <div className="w-48 h-48 mx-auto mb-8 relative group">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 ">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl">
                    <img src={profile} alt="profile" className='rounded-full' />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1 className={`text-5xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Hey, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Akshay Ladne</span>✨
              </h1>
              <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A <span className="text-purple-400">Frontend Developer</span>
              </h2>
              <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                A <span className="font-semibold">frontend developer</span> with solid foundations in <span className="font-semibold">design</span>.<br />
                passionate about crafting <span className="font-semibold">seamless user experiences</span> I thrive at the intersection<br />
                of creativity and functionality.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={handleContactMe} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                  <MessageSquare size={20} />
                  Contact Me
                </button>
                <button onClick={handleViewProjects} className={`border-2 ${darkMode ? 'border-gray-600 text-gray-300 hover:border-gray-500' : 'border-gray-300 text-gray-700 hover:border-gray-400'} px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2`}>
                  <Eye size={20} />
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 