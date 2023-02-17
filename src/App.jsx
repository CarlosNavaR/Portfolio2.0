import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './Contexts/ThemeContext';
import LangProvider from './Contexts/LangContext';
import { Layout, Loading, NotFound } from './Components';
import './Styles/General/index.scss';

const Home = lazy(() => import('./Views/Home'));
const RProjects = lazy(() => import('./Views/RProjects'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LangProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<RProjects />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </LangProvider>
    </Suspense>
  );
}

export default App;
