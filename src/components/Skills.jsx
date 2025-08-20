import React, { useContext } from 'react';
import { Code, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react';
import { DarkModeContext } from '../App';

const Skills = () => {
  const { darkMode } = useContext(DarkModeContext);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'TypeScript', 'Next.js']
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8 text-blue-400" />,
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      skills: ['React Native', 'Flutter', 'Mobile UI/UX', 'App Store Deployment', 'Cross-platform']
    },
    {
      title: 'DevOps & Tools',
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      skills: ['Git & GitHub', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx']
    },
    {
      title: 'Other Skills',
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      skills: ['Agile/Scrum', 'Problem Solving', 'Team Collaboration', 'Technical Writing', 'Mentoring']
    }
  ];

  return (
    <section id="skills" className="py-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I've developed a diverse skill set that allows me to tackle complex projects from concept to deployment.
            Here's what I bring to the table:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10'
              }`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className={`text-xl font-semibold ml-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                    } transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Level */}
        <div className="mt-16 text-center">
          <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience Level
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className={`w-24 h-24 rounded-full border-4 border-purple-400 flex items-center justify-center mx-auto mb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <span className="text-2xl font-bold text-purple-400">3+</span>
              </div>
              <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Years Experience</p>
            </div>
            <div className="text-center">
              <div className={`w-24 h-24 rounded-full border-4 border-blue-400 flex items-center justify-center mx-auto mb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <span className="text-2xl font-bold text-blue-400">50+</span>
              </div>
              <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Projects Completed</p>
            </div>
            <div className="text-center">
              <div className={`w-24 h-24 rounded-full border-4 border-pink-400 flex items-center justify-center mx-auto mb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <span className="text-2xl font-bold text-pink-400">20+</span>
              </div>
              <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
