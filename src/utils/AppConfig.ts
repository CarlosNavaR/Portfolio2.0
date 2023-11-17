export const AppConfig = {
  site_name: 'Carlos Nava',
  title: 'Carlos Nava | Software Engineer',
  description: 'Software Engineer, About me, Projects, Contact',
  author: 'Buz',
  locale_region: 'en-us',
  locale: 'en',
};

export interface I18NConfig {
  language: string;
}

export interface AppBlogConfig {
  isEnabled: boolean;
  postsPerPage: number;
  post: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  list: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  category: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  tag: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}
