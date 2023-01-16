import React, { useContext } from 'react';
import Select from 'react-select';
import { TfiWorld } from 'react-icons/tfi';
import { LangContext } from '../../Contexts/LangContext';
import UsFlag from '../../Images/estados-unidos.png';
import MxFlag from '../../Images/mexico.png';
import './index.scss';

const setSelectedLang = lang => {
  return {
    value: lang,
    label: (
      <div className='select_item'>
        <TfiWorld />
        <p>{lang === 'en' ? 'English' : 'Spanish'}</p>
      </div>
    ),
  };
};

export default function index() {
  const { lang, setLang } = useContext(LangContext);

  const options = [
    {
      value: 'en',
      label: (
        <div className='select_item'>
          <img src={UsFlag} height='25px' width='25px' alt='EN' />
          <p>English</p>
        </div>
      ),
    },
    {
      value: 'es',
      label: (
        <div className='select_item'>
          <img src={MxFlag} height='25px' width='25px' alt='ES' />
          <p>Spanish</p>
        </div>
      ),
    },
  ];

  return (
    <div className='custom_select'>
      <Select
        menuPlacement='top'
        unstyled
        className='react-select-container'
        classNamePrefix='react-select'
        options={options}
        value={setSelectedLang(lang)}
        isSearchable={false}
        onChange={e => setLang(e.value)}
      />
    </div>
  );
}
