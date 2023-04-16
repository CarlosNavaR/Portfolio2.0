import React from 'react';
import { defaultLottieOptions } from '@/constants/framer';
import Lottie from 'react-lottie';
import AstronautContact from '@/lotties/astronaut-contact.json';
import ContactForm from '@/components/contact';
import styles from './index.module.scss';

export default function index() {
  return (
    <div className={styles.contact_container} id='contact'>
      <div className={styles.Lottie_container}>
        <Lottie
          options={defaultLottieOptions(AstronautContact)}
          height={400}
          width={400}
        />
      </div>
      <ContactForm />
    </div>
  );
}
