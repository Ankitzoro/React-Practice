import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <nav style={{
      backgroundColor: colors.primary,
      color: colors.text,
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <h2>My App</h2>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;