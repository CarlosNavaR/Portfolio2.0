import React, { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import Loading from '@/lotties/loading_plane.json';
import { defaultLottieOptions } from '@/constants/framer';
import useTranslation from '@/hooks/useTranslate';
import Social from '@/components/social';
import styles from './index.module.scss';

export default function index() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);

    const honeyFields = ['name', 'email', 'message'];

    const itsHoneyValidation = honeyFields.map(field => {
      if (formData.get(field)) {
        return true;
      }
      return false;
    });

    if (itsHoneyValidation.includes(true)) {
      setLoading(false);
      return;
    }

    const data = {
      buzName: formData.get('buzName@@') as string,
      buzEmail: formData.get('buzEmail@@') as string,
      buzMessage: formData.get('buzMessage@@') as string,
    };

    emailjs
      .send(
        process.env.EMAILJS_TEMPLATE_ID as string,
        process.env.EMAILJS_SERVICE_ID as string,
        data,
        process.env.EMAILJS_USER_ID
      )
      .then(result => {
        if (result.status === 200) {
          setLoading(false);
        }
      });
  };

  return (
    <>
      <div className={styles.main_container_contact}>
        <h1 className={styles.contact_title}>{t('Send me a rock')}</h1>
        {!loading && (
          <form id='form' className={styles.contact_form} onSubmit={onSubmit}>
            <div className={styles.contact_form_inputs}>
              <input
                className={styles.honeypot}
                type='text'
                placeholder='Name'
                id='name'
                name='name'
                tabIndex={-1}
              />
              <input
                className={styles.honeypot}
                type='email'
                placeholder='Email'
                id='email'
                name='email'
                tabIndex={-1}
              />
              <textarea
                placeholder='Message'
                className={styles.honeypot}
                id='message'
                name='message'
                tabIndex={-1}
              />
              <input
                type='text'
                placeholder={t('Name')}
                required
                id='buzName@@'
                name='buzName@@'
                autoComplete='off'
              />
              <input
                type='email'
                placeholder={t('Email')}
                required
                id='buzEmail@@'
                name='buzEmail@@'
                autoComplete='off'
              />
              <textarea
                placeholder={t('Message')}
                required
                id='buzMessage@@'
                name='buzMessage@@'
                autoComplete='off'
              />
            </div>
            <button type='submit'>{t('Go 🚀')}</button>
          </form>
        )}
        <div className={styles.social_container}>
          <Social />
        </div>
      </div>
      {loading && (
        <Lottie
          options={defaultLottieOptions(Loading)}
          height={400}
          width={400}
        />
      )}
    </>
  );
}
