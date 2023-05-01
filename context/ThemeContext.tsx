import React, { createContext, useEffect, useMemo, useState } from 'react';
import { ChildrenType } from '@/types/general';

type ContextType = {
  toggleDark: () => void;
  isDark: boolean;
};

export const initialStateTheme: ContextType = {
  isDark: true,
  toggleDark: () => {},
};

export const ThemeContext = createContext(initialStateTheme);

export default function ThemeProvider({
  children,
}: {
  children: ChildrenType;
}) {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? 'dark' : 'light';

  useEffect(() => {
    const themeLocale = localStorage.getItem('Buz@@Theme');
    const theme = JSON.parse(themeLocale || 'null');
    if (theme !== undefined && theme !== null) {
      setIsDark(theme?.isDark);
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches
      )
        setIsDark(false);
    }
  }, []);

  const context: ContextType = {
    isDark,
    toggleDark: () => {
      localStorage.setItem(
        'Buz@@Theme',
        JSON.stringify({
          isDark: !isDark,
        })
      );
      setIsDark(!isDark);
    },
  };

  return (
    <ThemeContext.Provider value={context}>
      <div className={`Theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
