import React from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import { BiDownArrowAlt } from 'react-icons/bi';
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
    name: 'NodeJS',
    icon: 'devicon-nodejs-plain',
    color: '#339933',
  },
  {
    name: 'typescript',
    icon: 'devicon-typescript-plain',
    color: '#007acc',
  },
  {
    name: 'Sass',
    icon: 'devicon-sass-original',
    color: '#cc6699',
  },
  {
    name: 'Git',
    icon: 'devicon-git-plain',
    color: '#f05032',
  },
];

export default function index() {
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
      </div>
      <div className='scroll_down'>
        <p>Scroll down</p>
        <BiDownArrowAlt className='icon-down' />
      </div>
    </div>
  );
}
