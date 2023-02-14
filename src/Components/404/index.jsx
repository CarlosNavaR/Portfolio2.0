import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import NotFound from '../../Lotties/404.json';
import './index.scss';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NotFound,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function index() {
  return (
    <div className='NotFound_container'>
      <Lottie options={defaultOptions} height={400} width={400} />
      <h1 className='NotFound_title'>Are you lost in the space</h1>
      <Link to='/' className='goBack_Button'>
        Go back
      </Link>
    </div>
  );
}
