import React from 'react';
import Lottie from 'react-lottie';
import LoadingAnimation from '../../Lotties/astronaut-loading.json';
import useTranslate from '../../Hooks/useTranslate';
import './index.scss';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function index() {
  return (
    <div className='loading_container'>
      <Lottie
        options={defaultOptions}
        className='loading_animation'
        height={400}
        width={400}
      />
      <h1 className='loading_container_title'>
        {useTranslate('Just a moment, we are loading the page for you...')}
      </h1>
    </div>
  );
}
