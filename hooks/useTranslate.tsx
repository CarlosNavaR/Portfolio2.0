import React, { useContext } from 'react';
import { LanguageContext, lang } from '@/context/LanguageContext';
import Es from '@/locales/en/translation.js';
import En from '@/locales/es/translation.js';
import { useRouter } from 'next/router';

type TranslationType = {
  [key: string]: string;
};

export default function useTranslation() {
  const router = useRouter();
  const { locale } = router;
  const locales: TranslationType = locale === 'en' ? En : Es;

  const t = (key: string) => {
    return locales[key];
  };

  return {
    t,
  };
}
