import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import html from 'remark-html';
import { remark } from 'remark';
import { sanityClient } from '@/helpers/client';

export const getAboutMe = async () => {
  const query = `*[_type == "about"]`;
  const aboutMe = await sanityClient.fetch(query);
  return aboutMe;
};

export const getProjects = async () => {
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
  const projects = await sanityClient.fetch(query);
  return projects;
};

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPosts = async () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const id = fileName.replace(/\.md$/, '');

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  return allPostsData;
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id: id,
    content: contentHtml,
    ...(matterResult.data as { date: string; title: string }),
    exists: true,
  };
};

export const getPostPaths = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};
