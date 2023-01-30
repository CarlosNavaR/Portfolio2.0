import React from 'react';
import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import { urlFor } from '../../Hooks/client';
import './index.scss';

export default function index({
  key,
  title,
  description,
  tags = [],
  image,
  github,
  url,
}) {
  return (
    <>
      <hr className='header_line' />
      <div className='project_card' key={key}>
        <div className='project_card__image'>
          <img src={urlFor(image)} alt='project' />
        </div>
        <div className='project_card_container'>
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
        </div>
      </div>
    </>
  );
}

index.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
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
