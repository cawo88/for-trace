import { useSpring, config } from 'react-spring';
import { useVideoStore } from '../../hooks';
import { OVERLAY } from '../../data/constants';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {}

/**
 * <App /> Props
 */
const useAppProps = (props: AppProps) => {
  const { isRestart, setIsRestart, isPlaying, setIsPlaying } = useVideoStore();

  const animatedArticleFadeOutStyle = useSpring({
    config: config.slow,
    from: { opacity: 1 },
    to: {
      opacity: isRestart ? 0 : 1,
    },
    onRest: () => animatedOverlayFadeInStyle,
  });

  const animatedOverlayFadeInStyle = useSpring({
    config: config.slow,
    from: { backgroundColor: OVERLAY.opaque },
    to: {
      backgroundColor: !isRestart ? OVERLAY.opaque : OVERLAY.full,
    },
    onRest: () => onAnimatedOverlayFadeInStyleComplete(),
  });

  const animatedOverlayFadeOutStyle = useSpring({
    to: { backgroundColor: OVERLAY.tranparent, zIndex: -1 },
    from: { backgroundColor: OVERLAY.full, zIndex: 0 },
  });

  const onAnimatedOverlayFadeInStyleComplete = () => {
    console.log('complete');
    setIsPlaying(true);
  };

  return {
    ...props,
    setIsRestart,
    animatedArticleFadeOutStyle,
    animatedOverlayFadeInStyle,
    animatedOverlayFadeOutStyle,
    isPlaying,
  };
};

export { useAppProps };
