
import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <a href="#" className="waves-effect waves-light" onClick={toggleDarkMode}>
      <i className={`fa ${isDarkMode ? 'fa-sun-o' : 'fa-moon-o'}`} id="dark-mode-icon"></i>
    </a>
  );
};

export default DarkModeToggle;