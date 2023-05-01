import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ChildrenType } from '@/types/general';

type ContextType = {
  toggleLanguage: () => void;
  language: string;
};

export const InitialStateLanguage: ContextType = {
  language: 'es',
  toggleLanguage: () => {},
};

export const LanguageContext = createContext(InitialStateLanguage);

export default function LanguageProvider({
  children,
}: {
  children: ChildrenType;
}) {
  const router = useRouter();
  const { locale } = router;

  const context: ContextType = {
    language: locale || InitialStateLanguage.language,
    toggleLanguage: () => {
      localStorage.setItem(
        'Buz@@Lang',
        locale || InitialStateLanguage.language
      );
      const path = router.pathname;
      const changeLocale = locale === 'es' ? 'en' : 'es';
      router.replace(path, path, { locale: changeLocale });
    },
  };

  return (
    <LanguageContext.Provider value={context}>
      <div className={`Language`}>{children}</div>
    </LanguageContext.Provider>
  );
}
