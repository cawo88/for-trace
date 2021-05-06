import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

interface VideoStoreParams {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  isRestart: boolean;
  setIsRestart: (isRestart: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const VideoStoreContext = createContext<VideoStoreParams>({} as VideoStoreParams);

/**
 * Get Video Store params
 */
const useVideoStore = () => useContext(VideoStoreContext);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VideoProvider = ({ children }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRestart, setIsRestart] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  console.log('video ref', videoRef);

  const handleSetIsRestart = useCallback(
    (isRestart) => {
      setIsRestart(isRestart);

      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    },
    [setIsRestart],
  );

  const handleSetIsPlaying = useCallback(
    (isPlaying) => {
      setIsPlaying(isPlaying);
      if (videoRef.current) {
        videoRef.current.play();
        videoRef.current.controls = true;
      }
    },
    [setIsPlaying],
  );

  return (
    <VideoStoreContext.Provider
      value={{
        videoRef,
        isRestart,
        isPlaying,
        setIsRestart: handleSetIsRestart,
        setIsPlaying: handleSetIsPlaying,
      }}
    >
      {children}
    </VideoStoreContext.Provider>
  );
};

export { useVideoStore, VideoProvider };
