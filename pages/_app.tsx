import React, { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Cursor from '@/components/cursor';
import LanguageProvider from '@/context/LanguageContext';
import ThemeProvider from '@/context/ThemeContext';
import '@/styles/normalize.css';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={'loading...'}>
      <ThemeProvider>
        <LanguageProvider>
          <Cursor />
          <Component {...pageProps} />
          <Analytics />
        </LanguageProvider>
      </ThemeProvider>
    </Suspense>
  );
}
