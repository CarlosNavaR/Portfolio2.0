import React from 'react';
import Lottie from 'react-lottie';
import { defaultLottieOptions } from '@/constants/framer';
import LoadingAnimation from '@/lotties/astronaut-loading.json';
import useTranslation from '@/hooks/useTranslate';
import styles from './index.module.scss';

export default function index() {
  const { t } = useTranslation();
  return (
    <div className={styles.loading_container}>
      <Lottie
        options={defaultLottieOptions(LoadingAnimation)}
        height={400}
        width={400}
      />
      <h1 className={styles.loading_container_title}>{t('loading')}</h1>
    </div>
  );
}
