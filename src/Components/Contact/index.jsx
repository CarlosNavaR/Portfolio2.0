import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { TfiLinkedin } from 'react-icons/tfi';
import { TbBrandGithub } from 'react-icons/tb';
import { sendEmail } from '../../Helper/emailHelper';
import Loading from '../../Lotties/loading_plane.json';
import './index.scss';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function index() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const honeyFields = ['name', 'email', 'message'];

    const itsHoneyValidation = honeyFields.map(field => {
      if (formData.get(field)) {
        return true;
      }
      return false;
    });

    if (itsHoneyValidation.includes(true)) {
      setLoading(false);
      return;
    }

    const data = {
      buzName: formData.get('buzName@@'),
      buzEmail: formData.get('buzEmail@@'),
      buzMessage: formData.get('buzMessage@@'),
    };

    const { status } = await sendEmail(data);

    if (status === 200) {
      // Do something / Control loading
      setLoading(false);
    }
  };

  return (
    <>
      <div className='main_container_contact'>
        <h1 className='contact_title'>Send me a rock</h1>
        {!loading && (
          <form id='form' className='contact_form' onSubmit={onSubmit}>
            <div className='contact_form_inputs'>
              <input
                className='honeypot'
                type='text'
                placeholder='Name'
                id='name'
                name='name'
                tabIndex={-1}
              />
              <input
                className='honeypot'
                type='email'
                placeholder='Email'
                id='email'
                name='email'
                tabIndex={-1}
              />
              <textarea
                placeholder='Message'
                className='honeypot'
                type='text'
                id='message'
                name='message'
                tabIndex={-1}
              />
              <input
                type='text'
                placeholder='Name'
                required
                id='buzName@@'
                name='buzName@@'
                autoComplete='off'
              />
              <input
                type='email'
                placeholder='Email'
                required
                id='buzEmail@@'
                name='buzEmail@@'
                autoComplete='off'
              />
              <textarea
                placeholder='Message'
                type='text'
                required
                id='buzMessage@@'
                name='buzMessage@@'
                autoComplete='off'
              />
            </div>
            <button type='submit'>Go 🚀</button>
          </form>
        )}
        <div className='social_container'>
          <a
            href='https://www.linkedin.com/in/carlos-navar/'
            target='_blank'
            className='linkedin'
            rel='noopener noreferrer'
          >
            <TfiLinkedin />
          </a>
          <a
            href='https://github.com/CarlosNavaR/'
            target='_blank'
            className='github'
            rel='noopener noreferrer'
            style={{
              border: '1px solid #333',
            }}
          >
            <TbBrandGithub />
          </a>
        </div>
      </div>
      {loading && (
        <Lottie
          options={defaultOptions}
          className='loading_animation'
          height={400}
          width={400}
        />
      )}
    </>
  );
}
