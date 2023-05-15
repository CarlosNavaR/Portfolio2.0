import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { LinkType } from '@/types/nav';
import logo from '@/images/logo.png';
import LanguageSetter from '@/components/langSetter';
import ThemeSetter from '@/components/themeSetter';
import useTranslate from '@/hooks/useTranslate';
import styles from './index.module.scss';

export const links: LinkType[] = [
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
  {
    id: '5',
    url: '/blog',
    text: 'Blog',
  },
];

export default function index() {
  const [showLinks, setShowLinks] = useState(false);

  const router = useRouter();
  const { pathname } = router;
  const isNotHome = pathname !== '/';

  const { t } = useTranslate();

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__center}>
        <div className={styles.nav__header}>
          <Link href='/'>
            <Image src={logo} className={styles.logo} alt='logo' />
          </Link>
        </div>

        <ul
          className={`${styles.nav_menu} ${
            showLinks ? styles.isOpened : styles.isClosed
          }`}
        >
          {!isNotHome &&
            links &&
            links?.map(link => {
              const { id, url, text } = link;
              return (
                <li
                  key={id}
                  className={styles.menu_item}
                  onClick={() => setShowLinks(false)}
                >
                  <Link href={`${url}`}>{t(text)}</Link>
                </li>
              );
            })}
        </ul>

        <div className={styles.themeSetter}>
          <ThemeSetter />
          <LanguageSetter />
          <button
            className={styles.nav__toggle}
            onClick={() => setShowLinks(!showLinks)}
            type='button'
          >
            {!showLinks ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </div>
    </nav>
  );
}
