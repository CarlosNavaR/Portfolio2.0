import React from 'react';
import ThemeSetter from '../ThemeSetter';
import LangSetter from '../LangSetter';
import './index.scss';

export default function index() {
  return (
    <div className='footer'>
      <ThemeSetter />
      <LangSetter />
    </div>
  );
}
