import React from 'react';
import Lottie from 'react-lottie';
import { ContactForm } from '../../Components';
import AstronautContact from '../../Lotties/astronaut-contact.json';
import './index.scss';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: AstronautContact,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function index() {
  return (
    <div className='contact_container' id='contact'>
      <div className='lottie_container'>
        <Lottie
          options={defaultOptions}
          className='loading_animation'
          height={400}
          width={400}
        />
      </div>
      <ContactForm />
    </div>
  );
}
