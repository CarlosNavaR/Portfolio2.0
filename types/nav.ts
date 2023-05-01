import { ReactNode } from 'react';

export type LinkType = {
  id: string;
  url: string;
  text: string;
};

export interface LinksContainerRefProps {
  current: HTMLDivElement | null;
  style?: CSSStyleDeclaration;
}

export type ThemeOptionsType = {
  value: 'light' | 'dark';
  icon: ReactNode;
};
