import React from 'react';
import { animated } from 'react-spring';
import { useHomeProps } from './Home.props';
import { hoc } from '../../ultility/hoc';
import styles from './Home.module.scss';
import { Video } from '../../components/Video';
import { Graphic } from '../../components/Graphic';
import { Trail } from '../../components/Trail';
import VideoFileDesktop from '../../assets/videos/video--desktop.mp4';
import VideoFileMobile from '../../assets/videos/video--mobile.mp4';

const Home = hoc(
  useHomeProps,
  ({
    setIsRestart,
    animatedArticleFadeStyle,
    animatedOverlayOnLoadStyle,
    animatedOverlayOnPlayStyle,
    animatedOverlayOnRestartFadeStyle,
    isPlaying,
    isAutoPlay,
    isRestart,
    isEnd,
    onLoad,
    isMobileViewport,
  }) => {
    return (
      <section className={styles.container}>
        <animated.div
          className={styles.overlay}
          style={
            onLoad && !isPlaying
              ? animatedOverlayOnLoadStyle
              : isPlaying
              ? animatedOverlayOnPlayStyle
              : animatedOverlayOnRestartFadeStyle
          }
        >
          <animated.main className={styles.main} style={animatedArticleFadeStyle}>
            <Trail open>
              <Graphic />
              <article className={styles.article}>
                <div className="mt-3" />

                {isEnd ? (
                  <h1 className={styles.heading}>Für Paul</h1>
                ) : (
                  <h1 className={styles.heading}>Liebe soll dich begleiten</h1>
                )}

                <div className="mb-4" />
                <button
                  className={isEnd ? styles.buttonIsReplay : styles.button}
                  aria-label="Play video"
                  aria-pressed={!!isRestart}
                  tab-index="0"
                  onClick={() => {
                    setIsRestart(true);
                  }}
                >
                  {isEnd ? 'Zum Anfang' : 'Start '}
                </button>
              </article>
            </Trail>
          </animated.main>
        </animated.div>
        <Video
          src={isMobileViewport ? VideoFileMobile : VideoFileDesktop}
          isAutoPlay={isAutoPlay}
          isMute={!isPlaying}
          isLoop={!isPlaying}
        />
      </section>
    );
  },
);

export { Home };
