import { ChildrenType } from '@/types/general';
import React from 'react';

export default function index({ children }: { children: ChildrenType }) {
  return <div>{children}</div>;
}
