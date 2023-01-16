import React, { useState, useEffect, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const initialThemeState = {
  theme: localStorage.getItem('Buz@@Theme') || 'light',
  setTheme: () => null,
};

export const ThemeContext = createContext(initialThemeState);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialThemeState.theme);

  useEffect(() => {
    localStorage.setItem('Buz@@Theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={useMemo(() => ({ theme, setTheme }), [theme, setTheme])}
    >
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
