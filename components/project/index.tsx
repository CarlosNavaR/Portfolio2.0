import React, { useState } from 'react';
import { ProjectsType } from '@/types/api';
import Modal from '@/components/modal';
import styles from './index.module.scss';
import { BsGithub } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

export default function index({ project }: { project: ProjectsType }) {
  const [open, setOpen] = useState(false);

  const urlProject = project.imgUrl.asset._ref.split('-');
  const imageUrl = `${process.env.IMAGE_SANITY_URL}${urlProject[1]}-${urlProject[2]}.${urlProject[3]}`;

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.project_card} onClick={() => setOpen(true)}>
        <div className={styles.front_Card}>
          <img src={imageUrl} alt={project.title} />
        </div>
        <div className={styles.back_Card}>
          <h1>{project.title}</h1>
          {project?.tags?.length && (
            <div className={styles.container_tags}>
              {project?.tags?.map(tag => {
                const { title: tagTitle, color } = tag;
                return (
                  <span
                    key={tagTitle}
                    className={styles.tag}
                    style={{ backgroundColor: color }}
                  >
                    {tagTitle}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Modal
        visible={open}
        hasOverlay
        title={project.title}
        content={
          <div className={styles.modal_body}>
            <img src={imageUrl} alt={project.title} />
            <div className={styles.container_tags}>
              {project?.tags?.map(tag => {
                const { title: tagTitle, color } = tag;
                return (
                  <span
                    key={tagTitle}
                    className={styles.tag}
                    style={{ backgroundColor: color }}
                  >
                    {tagTitle}
                  </span>
                );
              })}
            </div>
            <p>{project.description}</p>
            <div className={styles.container_links}>
              {project?.sourceCode && (
                <a href={project?.sourceCode} target='_blank' rel='noreferrer'>
                  <BsGithub />
                </a>
              )}
              {project?.projectLink && (
                <a href={project?.projectLink} target='_blank' rel='noreferrer'>
                  <TfiWorld />
                </a>
              )}
            </div>
          </div>
        }
        onClose={handleClose}
      />
    </>
  );
}
