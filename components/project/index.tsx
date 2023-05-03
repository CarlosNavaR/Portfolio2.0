import React, { useState } from 'react';
import { ProjectsType } from '@/types/api';

import styles from './index.module.scss';

export default function index({ project }: { project: ProjectsType }) {
  const urlProject = project.imgUrl.asset._ref.split('-');
  const imageUrl = `${process.env.IMAGE_SANITY_URL}${urlProject[1]}-${urlProject[2]}.${urlProject[3]}`;

  return (
    <>
      <div className={styles.project_card}>
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
    </>
  );
}
