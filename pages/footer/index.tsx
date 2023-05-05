import React from 'react';
import SocialContainer from '@/components/social';
import styles from './index.module.scss';
import useTranslation from '@/hooks/useTranslate';

export default function index({ id }: { id: string }) {
  const { t } = useTranslation();
  const [changeIcon, setChangeIcon] = React.useState(false);

  return (
    <footer className={styles.footer} id={id}>
      <div className={styles.footer__container}>
        <h1>{t('Get in touch')}</h1>
        <p>{t('text.footer')}</p>
        <div className={styles.container__social}>
          <a
            className={styles.container__social__button}
            href={`mailto:${process.env.APP_EMAIL}`}
          >
            {t('Send me a rock')}
          </a>
          <SocialContainer />
        </div>
      </div>
      <div className={styles.footer__made}>
        <p>
          {t('text.made')}
          <span
            role='img'
            aria-label='heart'
            onMouseEnter={() => setChangeIcon(!changeIcon)}
          >
            {!changeIcon ? '❤️' : '🚀'}
          </span>
          {t('text.by')} Carlos Nava
        </p>
      </div>
    </footer>
  );
}
