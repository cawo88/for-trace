import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

interface VideoStoreParams {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  isRestart: boolean;
  isPlaying: boolean;
  isAutoPlay: boolean;
  isEnd: boolean;
  setIsRestart: (isRestart: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setIsAutoPlay: (isAutoPlay: boolean) => void;
  setIsEnd: (isEnd: boolean) => void;
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
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  console.log('video ref', videoRef, 'isRestart', isRestart, 'is Playing', isPlaying);

  const handleSetIsRestart = useCallback(
    (isRestart) => {
      setIsRestart(isRestart);
      if (isEnd) {
        // NOTE: set delay to avoid showing the play button on replay
        setTimeout(() => {
          setIsEnd(false);
        }, 1000);
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsAutoPlay(false);
      }
    },
    [setIsRestart, isEnd],
  );

  const handleSetIsPlaying = useCallback(
    (isPlaying) => {
      setIsPlaying(isPlaying);
      if (videoRef.current) {
        console.log('is play');
        videoRef.current.play();
        videoRef.current.controls = true;
      }
    },
    [setIsPlaying],
  );

  const handleOnEnd = useCallback(
    (isEnd) => {
      console.log('is end');
      setIsEnd(isEnd);
      setIsRestart(false);
      setIsPlaying(false);
      setIsAutoPlay(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    },
    [setIsEnd],
  );

  return (
    <VideoStoreContext.Provider
      value={{
        videoRef,
        isRestart,
        isPlaying,
        isAutoPlay,
        isEnd,
        setIsRestart: handleSetIsRestart,
        setIsPlaying: handleSetIsPlaying,
        setIsAutoPlay,
        setIsEnd: handleOnEnd,
      }}
    >
      {children}
    </VideoStoreContext.Provider>
  );
};

export { useVideoStore, VideoProvider };
