import { useState, useEffect } from 'react';
import { useSpring, config } from 'react-spring';
import { useVideoStore } from '../../hooks';
import { OVERLAY, ZINDEX } from '../../data/constants';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {}

/**
 * <App /> Props
 */
const useAppProps = (props: AppProps) => {
  const { isRestart, setIsRestart, isPlaying, setIsPlaying, isAutoPlay, isEnd } = useVideoStore();
  const [onLoad, setOnLoad] = useState<boolean>(false);

  useEffect(() => {
    setOnLoad(true);
  }, []);

  const animatedArticleFadeStyle = useSpring({
    config: config.slow,
    from: { opacity: 1 },
    to: {
      opacity: isRestart ? 0 : 1,
    },
  });

  const animatedOverlayOnLoadStyle = useSpring({
    from: { backgroundColor: OVERLAY.full },
    to: {
      backgroundColor: OVERLAY.opaque,
    },
    delay: 1200,
  });

  const animatedOverlayOnRestartFadeStyle = useSpring({
    config: config.slow,
    from: { backgroundColor: OVERLAY.opaque },
    to: {
      backgroundColor: isRestart ? OVERLAY.full : OVERLAY.opaque,
    },
    onRest: () => onAnimatedOverlayFadeStyleComplete(),
  });

  const animatedOverlayOnPlayStyle = useSpring({
    from: { zIndex: ZINDEX.top },
    to: { zIndex: ZINDEX.bottom },
  });

  const onAnimatedOverlayFadeStyleComplete = () => {
    console.log('on aniamted overlay fade complete');
    if (!isEnd) {
      setIsPlaying(true);
    }
  };

  return {
    ...props,
    setIsRestart,
    animatedArticleFadeStyle,
    animatedOverlayOnRestartFadeStyle,
    animatedOverlayOnPlayStyle,
    isPlaying,
    isAutoPlay,
    isEnd,
    setIsPlaying,
    onLoad,
    animatedOverlayOnLoadStyle,
  };
};

export { useAppProps };
