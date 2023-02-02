import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import { urlFor } from '../../Hooks/client';
import { fadeIn } from '../../Helper/motion';
import './index.scss';

export default function index({
  title,
  description,
  tags = [],
  image,
  github,
  url,
}) {
  return (
    <>
      <motion.hr
        variants={fadeIn('down', 'tween', 0.1, 1, 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='header_line'
      />
      <div className='project_card'>
        <motion.div
          variants={fadeIn('right', 'tween', 0.1, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='project_card__image'
        >
          <img src={urlFor(image)} alt='project' />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.1, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='project_card_container'
        >
          <h1>{title}</h1>
          {tags?.length && (
            <div className='tags_containers'>
              {tags?.map(tag => {
                const { title: tagTitle, color } = tag;
                return (
                  <span
                    key={tagTitle}
                    className='tag'
                    style={{ backgroundColor: color }}
                  >
                    {tagTitle}
                  </span>
                );
              })}
            </div>
          )}
          <p>{description}</p>
          <div className='project_card__details__links'>
            {github && (
              <a href={github} target='_blank' rel='noreferrer'>
                <BsGithub />
              </a>
            )}
            {url && (
              <a href={url} target='_blank' rel='noreferrer'>
                <TfiWorld />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

index.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  image: PropTypes.shape({
    _type: PropTypes.string.isRequired,
    asset: PropTypes.shape({
      _ref: PropTypes.string.isRequired,
      _type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
