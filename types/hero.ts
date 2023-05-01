export type HeroTextType = {
  id: number;
  content: string;
};

export type LanguageType = {
  id: number;
  name: string;
  icon: string;
  color: string;
};

export type ScaleVariantsType = {
  whileInView: {
    scale: number[];
    opacity: number[];
    transition: {
      duration: number;
      ease: string;
    };
  };
};
