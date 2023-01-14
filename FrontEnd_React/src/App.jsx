import React from 'react';
import { Nav, Footer } from './Components';
import ThemeProvider from './Contexts/ThemeContext';
import LangProvider from './Contexts/LangContext';
import './Styles/General/index.scss';

function App() {
  return (
    <LangProvider>
      <ThemeProvider>
        <div className='App'>
          <div className='app_navbar'>
            <Nav />
          </div>
          <div className='app_body'>
            <div className='app_body_left'>a</div>
            <div className='app_body_left'>b</div>
            <div className='app_body_left'>c</div>
          </div>
          <div className='app_footer'>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </LangProvider>
  );
}

export default App;
