import { useState } from 'react';

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
  const [isPlaying, setPlaying] = useState<boolean>(false);
  return {
    ...props,
    isPlaying,
    setPlaying,
  };
};

export { useVideoProps };
