import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './Contexts/ThemeContext';
import LangProvider from './Contexts/LangContext';
import { Loading, NotFound } from './Components';
import './Styles/General/index.scss';
import { RProjects } from './Views';

const Home = lazy(() => import('./Views/Home'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LangProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/projects'
                element={<RProjects />}
                loader={<Loading />}
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LangProvider>
    </Suspense>
  );
}

export default App;
