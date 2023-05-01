import React from 'react';
import { TfiLinkedin } from 'react-icons/tfi';
import { TbBrandGithub } from 'react-icons/tb';
import styles from './index.module.scss';

export default function index() {
  return (
    <div className={styles.social_container}>
      <a
        href='https://www.linkedin.com/in/carlos-navar/'
        target='_blank'
        className={styles.LinkedIn}
        rel='noopener noreferrer'
      >
        <TfiLinkedin />
      </a>
      <a
        href='https://github.com/CarlosNavaR/'
        target='_blank'
        className={styles.GitHub}
        rel='noopener noreferrer'
        style={{
          border: '1px solid #333',
        }}
      >
        <TbBrandGithub />
      </a>
    </div>
  );
}
