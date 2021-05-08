import { useState, useEffect } from 'react';
import { useSpring, config } from 'react-spring';
import { useVideoStore } from '../../hooks';
import { OVERLAY, ZINDEX } from '../../data/constants';

/**
 * <Home /> Props
 */
const useHomeProps = () => {
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
    if (!isEnd) {
      setIsPlaying(true);
    }
  };

  return {
    setIsRestart,
    animatedArticleFadeStyle,
    animatedOverlayOnRestartFadeStyle,
    animatedOverlayOnPlayStyle,
    isPlaying,
    isAutoPlay,
    isRestart,
    isEnd,
    setIsPlaying,
    onLoad,
    animatedOverlayOnLoadStyle,
  };
};

export { useHomeProps };
