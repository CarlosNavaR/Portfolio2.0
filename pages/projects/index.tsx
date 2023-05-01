import React from 'react';
import { ProjectsType } from '@/types/api';
import Project from '@/components/project';
import styles from './index.module.scss';
import useTranslation from '@/hooks/useTranslate';

export default function index({ projects }: { projects: ProjectsType[] }) {
  const { t } = useTranslation();

  return (
    <div className={styles.projects_container}>
      <h1 className={styles.projects_title}>{t('Projects')}</h1>
      <div className={styles.projects_list}>
        {projects?.map(project => {
          return <Project key={project?._id} project={project} />;
        })}
      </div>
    </div>
  );
}
