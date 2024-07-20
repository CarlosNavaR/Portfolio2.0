export type PostBaseType = {
  id: string;
  title: string;
  date: string;
};

export type PostType = {
  content: string;
  exists: boolean;
} & PostBaseType;
