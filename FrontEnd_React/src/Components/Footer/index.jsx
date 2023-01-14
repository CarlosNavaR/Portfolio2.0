import React from 'react';
import ThemeSetter from '../ThemeSetter';
import LangSetter from '../LangSetter';

export default function index() {
  return (
    <div
      className='footer'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 1rem',
      }}
    >
      <ThemeSetter />
      <LangSetter />
    </div>
  );
}
