import { sanityClient } from '@/helpers/client';
import { ContactFormType } from '@/types/api';
import emailjs from '@emailjs/browser';

export const getAboutMe = async () => {
  const query = `*[_type == "about"]`;
  const aboutMe = await sanityClient.fetch(query);
  return aboutMe;
};

export const getProjects = async () => {
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
  const projects = await sanityClient.fetch(query);
  return projects;
};
