import React, { useContext } from 'react';
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../../Contexts/ThemeContext';
import './index.scss';

const themeOptions = [
  { value: 'light', icon: <BsSun /> },
  { value: 'dark', icon: <MdDarkMode /> },
];

export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='box'>
      <ul className='box_switch'>
        {themeOptions.map(option => (
          <li
            className={`box_switch__item ${theme === option.value && 'active'}`}
            key={option.value}
            onClick={() => setTheme(option.value)}
            aria-hidden='true'
          >
            <div className='box_switch__content'>
              <span className='box_switch_icon'>{option.icon}</span>
              <span>{option.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
