import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  dataset: process.env.APP_SANITY_DATASET,
  projectId: process.env.APP_SANITY_PROJECT_ID,
  useCdn: true,
  apiVersion: '2023-01-10',
  token: process.env.APP_SANITY_TOKEN,
});

export const imageUrlBuilder = ImageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return imageUrlBuilder.image(source);
};
