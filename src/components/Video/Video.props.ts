import { useEffect } from 'react';
import { useVideoStore, useWindowSize } from '../../hooks'; // , useWindowSize

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
  const { videoRef, isPlaying } = useVideoStore();
  const { windowHeight } = useWindowSize(); // windowWidth,

  useEffect(() => {
    if (typeof document !== 'undefined' && videoRef.current && isPlaying) {
      // const videoWidth = videoRef.current.videoWidth;
      // const videoMarginLeft = windowWidth && (windowWidth - videoWidth) / 2;
      videoRef.current.style.height = `${windowHeight}px`;
      // videoRef.current.style.marginLeft = `${videoMarginLeft}px`;
      // videoRef.current.style.top = '0';
      // videoRef.current.style.left = '0';
      // videoRef.current.style.transform = 'translate(0,0)';
    }
  });

  return {
    ...props,
    videoRef,
    isPlaying,
  };
};

export { useVideoProps };
