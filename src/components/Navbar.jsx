import React, { useState } from 'react';
import { useDarkMode } from "./hooks/useDarkMode";

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);

  const [theme, setTheme] = useDarkMode("dark-mode", false);

  const toggleMode = e => {
    e.preventDefault();
    setTheme(!theme);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={theme ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
