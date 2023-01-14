import React from 'react';
import { useTranslation } from 'react-i18next';

export default function useTranslate(text) {
  const { t } = useTranslation();
  if (text) {
    return t(text);
  }
  return <div>{t('No message')}</div>;
}
