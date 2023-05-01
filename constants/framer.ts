import { ScaleVariantsType } from '@/types/hero';

export const scaleVariants: ScaleVariantsType = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export const defaultLottieOptions = (LottieFile: unknown) => ({
  loop: true,
  autoplay: true,
  animationData: LottieFile,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
});

export const transitionOptions = (
  type: 'spring' | 'tween' = 'spring',
  duration: number = 1.5,
  ease: string = 'anticipate'
) => ({
  type,
  duration,
  ease,
});
