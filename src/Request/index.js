import { urlFor, client } from '../../Hooks/client';

export const getStaticProps = async () => {
  const data = await client.fetch(`*[_type == "post"]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  }`);
  return {
    props: {
      posts: data,
    },
  };
};
