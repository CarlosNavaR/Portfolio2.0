import React from 'react';
import { getPostData, getPostPaths } from '@/api';
import { PostType } from '@/types/post';
import Layout from '@/components/layout';

export default function index({ post }: { post: PostType }) {
  console.log(post);
  return (
    <Layout title={post?.title}>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPostPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return {
    props: {
      post,
    },
  };
}
