import React, { useContext } from 'react';
import {  ExternalLink, Eye, Code, Smartphone, Globe, Database } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { DarkModeContext } from '../App';

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment processing, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Tailwind CSS'],
      github: '#',
      live: '#',
      category: 'Full-Stack'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.',
      image: '💼',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      github: '#',
      live: '#',
      category: 'Frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '🌤️',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet Maps'],
      github: '#',
      live: '#',
      category: 'Frontend'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full-Stack':
        return <Globe className="w-4 h-4" />;
      case 'Frontend':
        return <Code className="w-4 h-4" />;
      case 'Backend':
        return <Database className="w-4 h-4" />;
      case 'AI/ML':
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl border overflow-hidden transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10'
              }`}
            >
              {/* Project Image */}
              <div className={`h-48 flex items-center justify-center text-8xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                {project.image}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  {getCategoryIcon(project.category)}
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    darkMode 
                      ? 'bg-purple-900 text-purple-300' 
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      darkMode
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-purple-500 text-white hover:bg-purple-600'
                    }`}
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Interested in working together? Let's discuss your project!
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
              darkMode
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
            }`}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
