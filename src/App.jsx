import React, { lazy, Suspense } from 'react';
import ThemeProvider from './Contexts/ThemeContext';
import LangProvider from './Contexts/LangContext';
import { Loading } from './Components';
import './Styles/General/index.scss';

const Home = lazy(() => import('./Views/Home'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LangProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </LangProvider>
    </Suspense>
  );
}

export default App;
