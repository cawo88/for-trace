import { useEffect } from 'react';
import { useVideoStore, useWindowSize } from '../../hooks';

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
  const { videoRef, isPlaying, setIsEnd } = useVideoStore();
  const { windowHeight } = useWindowSize();

  console.log('videoRef', videoRef);

  useEffect(() => {
    if (typeof document !== 'undefined' && videoRef.current && isPlaying) {
      videoRef.current.style.height = `${windowHeight}px`;
    } else if (videoRef.current) {
      videoRef.current.style.height = 'auto';
    }
  });

  return {
    ...props,
    videoRef,
    isPlaying,
    setIsEnd,
  };
};

export { useVideoProps };
