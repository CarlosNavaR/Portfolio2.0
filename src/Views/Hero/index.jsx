import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import { BiDownArrowAlt } from 'react-icons/bi';
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

const languagesClass = [
  {
    name: 'Git',
    icon: 'devicon-git-plain',
    color: '#f05032',
  },
  {
    name: 'HTML5',
    icon: 'devicon-html5-plain',
    color: '#e34c26',
  },
  {
    name: 'CSS3',
    icon: 'devicon-css3-plain',
    color: '#2965f1',
  },
  {
    name: 'Sass',
    icon: 'devicon-sass-original',
    color: '#cc6699',
  },
  {
    name: 'React',
    icon: 'devicon-react-plain',
    color: '#61dafb',
  },
  {
    name: 'Javascript',
    icon: 'devicon-javascript-plain',
    color: '#f7df1e',
  },
  {
    name: 'typescript',
    icon: 'devicon-typescript-plain',
    color: '#007acc',
  },
  {
    name: 'NodeJS',
    icon: 'devicon-nodejs-plain',
    color: '#339933',
  },
];

const items = [
  { id: 0, content: 'Buz🚀' },
  { id: 1, content: 'Carlos' },
];

export default function index() {
  const [current, setCurrent] = useState(0);
  const textTranslate = "Hi, I'm";

  useEffect(() => {
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
              <span id='flip'>{items[current].content}</span>
            </motion.div>
          </div>

          <h2 className='hero_about_subtitle'>
            <span className='hero_subtitle_name'>
              {' '}
              {useTranslate('Jr Frontend Developer')}
            </span>
          </h2>
        </div>
      </div>
      <div className='scroll_down'>
        <p>Scroll down</p>
        <BiDownArrowAlt className='icon-down' />
      </div>
    </div>
  );
}
