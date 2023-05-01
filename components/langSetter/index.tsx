import React, { useContext } from 'react';
import Image from 'next/image';
import { LanguageContext } from '@/context/LanguageContext';
import UsFlag from '@/images/estados-unidos.png';
import MxFlag from '@/images/mexico.png';
import styles from './index.module.scss';

const langOptions = [
  {
    value: 'en',
    label: <Image src={UsFlag} alt='en' />,
  },
  {
    value: 'es',
    label: <Image src={MxFlag} alt='es' />,
  },
];

export default function index() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const currentLanguage = langOptions.find(lang => lang.value === language) as {
    value: string;
    label: JSX.Element;
  };
  return (
    <span
      role='button'
      aria-label='language'
      onClick={toggleLanguage}
      onKeyDown={toggleLanguage}
    >
      <span className={styles.image_container}>{currentLanguage?.label}</span>
    </span>
  );
}
