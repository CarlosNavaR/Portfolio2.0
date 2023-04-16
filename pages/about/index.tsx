import React from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import { fadeIn } from '@/helpers/motion';
import useTranslation from '@/hooks/useTranslate';
import astronautAbout from '@/Lotties/astronaut-about.json';
import { defaultLottieOptions } from '@/constants/framer';
import { AboutType } from '@/types/api';
import styles from './index.module.scss';

export default function Index({ aboutMe }: { aboutMe: AboutType[] }) {
  const { t } = useTranslation();

  return (
    <div className={styles.about_container}>
      <motion.div
        className={styles.about_container_image}
        variants={fadeIn({
          direction: 'right',
          type: 'tween',
          delay: 0.2,
          duration: 1,
        })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <Lottie
          options={defaultLottieOptions(astronautAbout)}
          width={300}
          height={300}
        />
      </motion.div>
      <motion.div
        className={styles.about_container_description}
        variants={fadeIn({
          direction: 'up',
          type: 'tween',
          delay: 0.2,
          duration: 1,
        })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <h1>{t(aboutMe[0]?.title)}</h1>
        <p>{t(aboutMe[0]?.description)}</p>
      </motion.div>
    </div>
  );
}
