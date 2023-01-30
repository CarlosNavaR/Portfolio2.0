import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../Components';
import { client } from '../../Hooks/client';
import './index.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};
export default function index() {
  const [projects, setProjects] = useState([]);

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

  return (
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='projects_body'
    >
      <div className='projects_body_title'>Last projects</div>
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
      <div className='projects_body_footer'>see all</div>
    </motion.div>
  );
}
