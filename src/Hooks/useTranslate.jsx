import React from 'react';
import { useTranslation } from 'react-i18next';

export default function useTranslate(text) {
  const { t } = useTranslation();
  const translatedText = t(text || 'No message');
  return translatedText;
}
