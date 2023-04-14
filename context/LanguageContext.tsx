import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ChildrenType } from '@/types/general';

export let lang = 'en';

if (typeof window !== 'undefined') {
  lang = localStorage.getItem('Buz@@Lang') || 'en';
}

type ContextType = {
  toggleLanguage: () => void;
  language: string;
};

export const InitialStateLanguage: ContextType = {
  language: lang,
  toggleLanguage: () => {},
};

export const LanguageContext = createContext(InitialStateLanguage);

export default function LanguageProvider({
  children,
}: {
  children: ChildrenType;
}) {
  const [language, setLanguage] = useState(InitialStateLanguage.language);
  const router = useRouter();

  const context: ContextType = {
    language,
    toggleLanguage: () => {
      localStorage.setItem('Buz@@Lang', language);
      setLanguage(language === 'en' ? 'es' : 'en');

      const path = router.pathname;
      router.replace(path, path, { locale: language });
    },
  };

  return (
    <LanguageContext.Provider value={context}>
      <div className={`Language--${language}`}>{children}</div>
    </LanguageContext.Provider>
  );
}
