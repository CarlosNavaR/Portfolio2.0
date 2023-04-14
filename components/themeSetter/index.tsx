import React, { useContext } from 'react';
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '@/context/ThemeContext';
import { ThemeOptionsType } from '@/types/nav';
import styles from './index.module.scss';

const themeOptions: ThemeOptionsType[] = [
  { value: 'light', icon: <BsSun /> },
  { value: 'dark', icon: <MdDarkMode /> },
];

export default function index() {
  const { toggleDark, isDark } = useContext(ThemeContext);
  const currentTheme = themeOptions[!isDark ? 0 : 1];

  return (
    <span
      tabIndex={0}
      role='button'
      aria-label='light'
      onClick={toggleDark}
      onKeyDown={toggleDark}
    >
      <span className={styles.box_switch}>{currentTheme.icon}</span>
    </span>
  );
}
