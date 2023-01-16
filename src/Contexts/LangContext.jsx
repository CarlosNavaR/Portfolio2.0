import React, { useState, useEffect, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '../i18n';

export const initialLangState = {
  Lang: localStorage.getItem('Buz@@Lang') || 'en',
  setLang: () => null,
};

i18n.use(initReactI18next).init({
  resources,
  lng: initialLangState.Lang,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export const LangContext = createContext(initialLangState);

export default function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLangState.Lang);

  useEffect(() => {
    localStorage.setItem('Buz@@Lang', lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <LangContext.Provider
      value={useMemo(() => ({ lang, setLang }), [lang, setLang])}
    >
      <div className={`Lang--${lang}`}>{children}</div>
    </LangContext.Provider>
  );
}

LangProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
