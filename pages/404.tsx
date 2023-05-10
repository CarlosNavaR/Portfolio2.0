import React from 'react';
import Link from 'next/link';
import Lottie from 'react-lottie';
import NotFound from '@/lotties/404.json';
import useTranslation from '@/hooks/useTranslate';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NotFound,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function index() {
  const { t } = useTranslation();
  return (
    <div className='NotFound_container'>
      <Lottie options={defaultOptions} height={400} width={400} />
      <h1 className='NotFound_title'>{t('404')}</h1>
      <Link href='/' className='goBack_Button'>
        {t('Go back')}
      </Link>
    </div>
  );
}
