import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import './index.scss';

export default function index() {
  return (
    <div className='project_card'>
      <div className='project_card__image'>
        <img src='https://picsum.photos/200/300' alt='project' />
      </div>
      <div className='project_card_container'>
        <h1>Project Name</h1>
        <div className='project_card__details'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quidem nemo quas. Quisquam, quae. Quisquam, quae.
          </p>
          <div className='project_card__details__links'>
            <a href='#as'>
              <BsGithub />
            </a>
            <a href='#as'>
              <TfiWorld />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
