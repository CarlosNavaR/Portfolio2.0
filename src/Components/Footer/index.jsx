import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import ThemeSetter from '../ThemeSetter';
import LangSetter from '../LangSetter';
import './index.scss';

export default function index() {
  const [showContent, setShowContent] = React.useState(false);

  return (
    <div className='footer_float_container'>
      <div
        className='footer_content'
        style={{
          visibility: showContent ? 'visible' : 'hidden',
          opacity: showContent ? 1 : 0,
        }}
        onMouseLeave={() => setShowContent(false)}
        onMouseEnter={() => setShowContent(true)}
      >
        <ThemeSetter />
        <LangSetter />
      </div>
      <div className='button_float' onMouseEnter={() => setShowContent(true)}>
        <IoSettingsSharp />
      </div>
    </div>
  );
}
