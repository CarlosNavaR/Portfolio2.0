type AnimationType = {
  direction: 'left' | 'right' | 'up' | 'down';
  type: 'spring' | 'tween' | 'keyframes';
  delay: number;
  duration: number;
  opacity?: number;
};

export const slideIn = ({
  direction,
  type,
  delay,
  duration,
}: AnimationType) => ({
  hidden: {
    x: (direction === 'left' && '-100%') || (direction === 'right' && '100%'),
    y: (direction === 'up' && '100%') || (direction === 'down' && '100%'),
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeIn',
    },
  },
});

export const fadeIn = ({
  direction,
  type,
  delay,
  duration,
  opacity = 1,
}: AnimationType) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeIn',
    },
  },
});
