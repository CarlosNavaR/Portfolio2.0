import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import type { HeroTextType, LanguageType } from '@/types/hero';
import { fadeIn } from '@/helpers/motion';
import styles from './index.module.scss';
import {
  defaultLottieOptions,
  scaleVariants,
  transitionOptions,
} from '@/constants/framer';
import Astronaut from '@/lotties/astronaut-hero.json';
import useTranslate from '@/hooks/useTranslate';
import SocialContainer from '@/components/Social';

const items: HeroTextType[] = [
  {
    id: 0,
    content: 'Buz 🚀',
  },
  { id: 1, content: 'Carlos' },
];

const languagesClass: LanguageType[] = [
  {
    id: 0,
    name: 'Git',
    icon: 'devicon-git-plain',
    color: '#f05032',
  },
  {
    id: 1,
    name: 'HTML5',
    icon: 'devicon-html5-plain',
    color: '#E34F26',
  },
  {
    id: 2,
    name: 'CSS3',
    icon: 'devicon-css3-plain',
    color: '#2965f1',
  },
  {
    id: 3,
    name: 'Sass',
    icon: 'devicon-sass-original',
    color: '#cc6699',
  },
  {
    id: 4,
    name: 'React',
    icon: 'devicon-react-plain',
    color: '#61dafb',
  },
  {
    id: 5,
    name: 'Javascript',
    icon: 'devicon-javascript-plain',
    color: '#f7df1e',
  },
  {
    id: 6,
    name: 'typescript',
    icon: 'devicon-typescript-plain',
    color: '#007acc',
  },
  {
    id: 7,
    name: 'NodeJS',
    icon: 'devicon-nodejs-plain',
    color: '#339933',
  },
];

export default function index() {
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  const { t } = useTranslate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition(currentPosition => {
        if (currentPosition >= items.length - 1) return 0;
        return currentPosition + 1;
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <motion.div
        className={styles.hero}
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
        <div className={styles.hero__content}>
          <div className={styles.hero__content__header}>
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className={styles.hero__content__header__languages}
              viewport={{ once: true, amount: 0.25 }}
            >
              {languagesClass.map(item => (
                <div
                  className={styles.hero__content__header__languages__language}
                  style={{ backgroundColor: item.color }}
                  key={item.id}
                >
                  <i className={item.icon} />
                </div>
              ))}
            </motion.div>
            <div className={styles.hero__content__header__img}>
              <Lottie
                options={defaultLottieOptions(Astronaut)}
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className={styles.hero__content__about}>
            <div className={styles.hero_about_title}>
              {t('mainText')}
              <motion.div
                key={items[currentPosition].id}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={transitionOptions}
              >
                <span className={styles.flip}>
                  {items[currentPosition].content}
                </span>
              </motion.div>
            </div>

            <h2 className={styles.hero_about_subtitle}>
              <span className={styles.hero_subtitle_name}>
                {t('Jr Frontend Developer')}
              </span>
            </h2>
          </div>
        </div>
        <SocialContainer />
      </motion.div>
      <div className={styles.hero__scroll}>
        <div className={styles.hero__scroll__icon} />
      </div>
    </>
  );
}
