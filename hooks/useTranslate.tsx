import React from 'react';
import Es from '@/locales/en/translation';
import En from '@/locales/es/translation';
import { useRouter } from 'next/router';

type TranslationType = {
  [key: string]: string;
};

export default function useTranslation() {
  const router = useRouter();
  const { locale } = router;
  const locales: TranslationType = locale === 'en' ? Es : En;

  const t = (key: string) => {
    return locales[key] || key;
  };

  return {
    t,
  };
}
