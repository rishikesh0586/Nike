// DarkModeToggle.js
import { useState } from 'react';
import './DarkMode.css'; // Import your CSS file

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button
      className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
    </button>
  );
};

export default DarkMode;
