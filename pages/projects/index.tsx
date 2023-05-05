import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import Modal from '@/components/modal';
import { ProjectsType } from '@/types/api';
import Project from '@/components/project';
import useTranslation from '@/hooks/useTranslate';

import styles from './index.module.scss';

export default function index({ projects }: { projects: ProjectsType[] }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState<ProjectsType>({} as ProjectsType);
  const urlProject = project?.imgUrl?.asset._ref.split('-') || [];
  const imageUrl = `${process.env.IMAGE_SANITY_URL}${urlProject[1]}-${urlProject[2]}.${urlProject[3]}`;

  const handleClose = () => {
    setOpen(!open);
  };

  const listRef = useRef<HTMLDivElement>(null);
  const [listWidth, setListWidth] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!listRef.current) return;
      const { scrollWidth, offsetWidth } = listRef.current;
      setListWidth(scrollWidth - offsetWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [listRef]);

  return (
    <div className={styles.projects_container}>
      <h1 className={styles.projects_title}>{t('Projects')}</h1>
      <motion.div
        className={styles.projects_list}
        ref={listRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className={styles.even_project}
          key={listWidth}
          drag='x'
          dragConstraints={{ right: 0, left: -listWidth }}
        >
          {projects?.map((project, index) => {
            if (index % 2 === 0)
              return (
                <div
                  onClick={() => {
                    setProject(project);
                    setOpen(!open);
                  }}
                >
                  <Project project={project} key={project?._id} />
                </div>
              );
          })}
        </motion.div>

        <motion.div
          className={styles.odd_project}
          drag='x'
          dragConstraints={{ right: 0, left: -listWidth }}
        >
          {projects?.map((project, index) => {
            if (index % 2 !== 0)
              return (
                <div
                  onClick={() => {
                    setProject(project);
                    setOpen(!open);
                  }}
                >
                  <Project project={project} key={project?._id} />
                </div>
              );
          })}
        </motion.div>
      </motion.div>

      <Modal
        visible={open}
        hasOverlay
        title={project.title}
        content={
          <div className={styles.modal_body}>
            <img src={imageUrl} alt={project?.title} />
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
    </div>
  );
}
