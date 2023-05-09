import React, { useEffect, useRef } from 'react';

type tagProps = {
  tag: {
    title: string;
    color: string;
  };
  styles_tag: string;
};

export default function index({ tag, styles_tag }: tagProps) {
  const badgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!badgeRef.current) return;
    const backgroundColor = badgeRef.current.style.backgroundColor;
    const textColor = getTextColor(backgroundColor);
    badgeRef.current.style.color = textColor;
  }, [tag]);

  function getTextColor(backgroundColor: string) {
    if (!backgroundColor) return '';
    const rgb = hexToRgb(backgroundColor);
    const luminosity = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
    return luminosity > 128 ? '#000000de' : '#ffffffde';
  }

  function hexToRgb(hex: string) {
    const isRgb = hex.startsWith('rgb');

    if (isRgb) {
      const rgb = hex.replace(/[^\d,]/g, '').split(',');
      return { r: parseInt(rgb[0]), g: parseInt(rgb[1]), b: parseInt(rgb[2]) };
    }

    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  return (
    <span
      ref={badgeRef}
      className={styles_tag}
      style={{ backgroundColor: tag.color }}
    >
      {tag.title}
    </span>
  );
}
