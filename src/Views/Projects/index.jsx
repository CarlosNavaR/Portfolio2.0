import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../../Components';
import { client } from '../../Hooks/client';
import useTranslate from '../../Hooks/useTranslate';
import { fadeIn } from '../../Helper/motion';
import './index.scss';

export default function index() {
  const [projects, setProjects] = useState([]);
  const [height, setHeight] = useState(null);
  const projectsRef = useRef();

  useEffect(() => {
    const query = `*[_type == "project"] | order(_createdAt desc) [0...2]{
      _id,
      title,
      description,
      projectLink,
      sourceCode,
      imgUrl,
      tags[]->{
        title,
        color,
      }
    }`;
    client.fetch(query).then(res => {
      setProjects(res);
    });
  }, []);

  const getContainerSize = () => {
    const newHeight = projectsRef?.current?.clientHeight;
    setHeight(newHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', getContainerSize);
  }, []);

  return (
    <div
      className='projects_body'
      style={{
        height: `${height}px`,
      }}
      ref={projectsRef}
      id='projects'
    >
      <motion.div
        variants={fadeIn('down', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='projects_body_title'
      >
        {useTranslate('Last projects')}
      </motion.div>
      <div className='projects_body_container'>
        {projects?.map(project => {
          const {
            _id: id,
            title,
            description,
            tags,
            imgUrl: image,
            sourceCode: github,
            projectLink: url,
          } = project;
          return (
            <Project
              key={id}
              title={title}
              description={description}
              tags={tags}
              image={image}
              github={github}
              url={url}
            />
          );
        })}
      </div>
      <div className='projects_body_footer'>
        <Link to='projects'>see all</Link>
      </div>
    </div>
  );
}
