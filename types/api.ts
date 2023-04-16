export type PropsHomeType = {
  query: {
    aboutMe: AboutType[];
    projects: ProjectsType[];
  };
};

export type ProjectsType = {
  _id: string;
  description: string;
  imgUrl: ImgUrlType;
  projectLink: string;
  sourceCode: string;
  tags: TagType[];
  title: string;
};

export type ImgUrlType = {
  _type: string;
  asset: AssetType;
};

export type AssetType = {
  _ref: string;
  _type: string;
};

export type TagType = {
  color: string;
  title: string;
};

export type AboutType = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  description: string;
  title: string;
};

export type ContactFormType = {
  buzName: string;
  buzEmail: string;
  buzMessage: string;
};
