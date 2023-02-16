import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import useTranslate from '../../Hooks/useTranslate';
import logo from '../../Images/logo.png';
import './index.scss';

export const links = [
  {
    id: '2',
    url: '#about',
    text: 'About',
  },
  {
    id: '3',
    url: '#projects',
    text: 'Projects',
  },
  {
    id: '4',
    url: '#contact',
    text: 'Contact',
  },
];

export default function index() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const location = useLocation();
  const isProjectMenu = location.pathname === '/projects';

  useEffect(() => {
    if (linksRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks && linksContainerRef) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} className='logo' alt='logo' />
          </Link>
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
            type='button'
          >
            {!showLinks ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {!isProjectMenu &&
              links &&
              links.map(link => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={`${url}`}>{useTranslate(text)}</a>
                  </li>
                );
              })}
            {isProjectMenu && <Link to='/'>Home</Link>}
          </ul>
        </div>
      </div>
    </nav>
  );
}
