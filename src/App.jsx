import React, { useState, createContext, useEffect } from 'react';
import './App.css';

export const DarkModeContext = createContext();

function App({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode to the entire HTML document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-900'
      }`}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
