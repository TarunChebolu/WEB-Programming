import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div
        style={{
          background: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
          minHeight: '100vh',
          padding: '10px'
        }}
      >
        <button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
