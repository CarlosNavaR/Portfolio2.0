import React, { useState, useLayoutEffect } from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import useTranslate from '../../Hooks/useTranslate';
import Astronaut from '../../Lotties/astronaut-hero.json';
import './index.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Astronaut,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const items = [
  {
    id: 0,
    content: 'Buz 🚀',
  },
  { id: 1, content: 'Carlos' },
];

const languagesClass = [
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
    color: '#e34c26',
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
  const [current, setCurrent] = useState(0);
  const textTranslate = "Hi, I'm";

  useLayoutEffect(() => {
    const id = setInterval(() => {
      setCurrent(state => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className='hero'>
      <div className='Content'>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app_header_circles'
        >
          {languagesClass.map(item => (
            <div
              className={`icon_circle ${item.className}`}
              style={{ backgroundColor: item.color }}
              key={item.id}
            >
              <i className={item.icon} />
            </div>
          ))}
        </motion.div>
        <div className='hero_img'>
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <div className='hero_about'>
          <div className='hero_about_title'>
            {useTranslate(textTranslate)}
            <motion.div
              key={items[current].id}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{
                type: 'spring',
                duration: 1.5,
                ease: 'anticipate',
              }}
            >
              <span className='flip'>{items[current].content}</span>
            </motion.div>
          </div>

          <h2 className='hero_about_subtitle'>
            <span className='hero_subtitle_name'>
              {useTranslate('Jr Frontend Developer')}
            </span>
          </h2>
        </div>
      </div>
      <div className='scroll_down'>
        <div className='scroll_down_icon' />
      </div>
    </div>
  );
}
