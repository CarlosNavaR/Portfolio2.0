import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './Contexts/ThemeContext';
import LangProvider from './Contexts/LangContext';
import { Loading, NotFound } from './Components';
import './Styles/General/index.scss';

const Home = lazy(() => import('./Views/Home'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LangProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              {
                // TODO: Verify witch option is better, set one route for each section or just set one for projects
              }
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<h1>All projects</h1>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LangProvider>
    </Suspense>
  );
}

export default App;
