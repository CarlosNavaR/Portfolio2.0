import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../Components';
import { client } from '../../Hooks/client';
import { fadeIn } from '../../Helper/motion';
import './index.scss';

export default function index() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projects.length > 0) return;

    const query = `*[_type == "project"] | order(_createdAt desc) {
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
    <div className='RProjects'>
      <div className='App_container projects_all_body'>
        <motion.div
          variants={fadeIn('down', 'tween', 0.2, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className='projects_body_title'
        >
          Projects
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
      </div>
    </div>
  );
}
