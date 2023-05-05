import React from 'react';
import { TfiLinkedin } from 'react-icons/tfi';
import { VscFilePdf } from 'react-icons/vsc';
import { TbBrandGithub } from 'react-icons/tb';
import styles from './index.module.scss';

export default function index() {
  return (
    <div className={styles.social_container}>
      <a
        target='_blank'
        className={styles.LinkedIn}
        href='https://www.linkedin.com/in/carlos-navar/'
        rel='noopener noreferrer'
      >
        <TfiLinkedin />
      </a>
      <a
        target='_blank'
        className={styles.CV}
        href={process.env.APP_LINK_CV}
        rel='noopener noreferrer'
      >
        <VscFilePdf />
      </a>
      <a
        target='_blank'
        className={styles.GitHub}
        href='https://github.com/CarlosNavaR/'
        rel='noopener noreferrer'
      >
        <TbBrandGithub />
      </a>
    </div>
  );
}
