import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { ProjectsType } from '@/types/api';
import Project from '@/components/project';
import useTranslation from '@/hooks/useTranslate';
import Modal from '@/components/modal';
import { BsGithub } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import styles from './index.module.scss';

export default function index({ projects }: { projects: ProjectsType[] }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState<ProjectsType>({} as ProjectsType);

  const urlProject = project?.imgUrl?.asset?._ref.split('-') || [];
  const imageUrl = `${process.env.IMAGE_SANITY_URL}${urlProject[1]}-${urlProject[2]}.${urlProject[3]}`;

  const handleClose = () => {
    setOpen(!open);
  };
  const contentLength = projects.length * -480;

  const listRef = useRef<HTMLDivElement>(null);
  const [listWidth, setListWidth] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = listRef?.current?.offsetWidth;
      setListWidth(width || 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [listRef]);

  const mouseX = useMotionValue(0);
  const mouseVelocity = useMotionValue(0);

  const maxCarouselPosition = contentLength - listWidth;

  const xRange = [-listWidth / 2, listWidth / 2];
  const positionRange = [-maxCarouselPosition / 2, maxCarouselPosition / 2];

  const carouselX = useTransform(mouseX, xRange, positionRange);
  const carouselVelocity = useTransform(mouseVelocity, v => v * 0.0015);

  return (
    <div className={styles.projects_container}>
      <h1 className={styles.projects_title}>{t('Projects')}</h1>
      <motion.div
        className={styles.projects_list}
        ref={listRef}
        onMouseMove={event => {
          mouseX.set(event.clientX - (listRef?.current?.offsetLeft || 0));
          mouseVelocity.set(event.movementX);
        }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseVelocity.set(0);
        }}
      >
        {projects?.map(project => {
          return (
            <>
              <motion.div
                key={project?._id}
                style={{
                  x: carouselX,
                  rotateY: carouselVelocity,
                }}
                onClick={() => {
                  setProject(project);
                  setOpen(!open);
                }}
              >
                <Project project={project} />
              </motion.div>
            </>
          );
        })}
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
