import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_APP_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-01-10',
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);
