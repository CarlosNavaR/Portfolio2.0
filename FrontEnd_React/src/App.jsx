import React from 'react';
import ThemeProvider from './Contexts/ThemeContext';
import LangProvider from './Contexts/LangContext';
import { Home } from './Views';
import './Styles/General/index.scss';

function App() {
  return (
    <LangProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </LangProvider>
  );
}

export default App;
