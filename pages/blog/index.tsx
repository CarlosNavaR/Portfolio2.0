import React from 'react';
import { getAllPosts } from '@/api';
import { PostBaseType } from '@/types/post';
import Link from 'next/link';
import Layout from '@/components/layout';
import styles from './index.module.scss';

export default function index({ projects }: { projects: PostBaseType[] }) {
  return (
    <Layout title='blog'>
      <div className={styles.container}>
        {projects.map(project => {
          return (
            <div key={project?.id}>
              <Link href={`blog/${project?.id}`}>{project?.title}</Link>
              <p>{project?.date}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const getAllProjects = await getAllPosts();

  return {
    props: {
      projects: getAllProjects,
    },
  };
};
