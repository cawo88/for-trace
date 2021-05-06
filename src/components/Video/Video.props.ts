import { useVideoStore } from '../../hooks';

interface VideoProps {
  isAutoPlay?: boolean;
  isMute?: boolean;
  isLoop?: boolean;
  src: string;
}

/**
 * <Video /> Props
 */
const useVideoProps = (props: VideoProps) => {
  const { videoRef } = useVideoStore();
  return {
    ...props,
    videoRef,
  };
};

export { useVideoProps };
