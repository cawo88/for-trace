import React from 'react';
import { useAppProps } from './App.props';
import { hoc } from '../../ultility/hoc';
import styles from './App.module.scss';
import { Video } from '.././Video';
import { Graphic } from '.././Graphic';
import { animated } from 'react-spring';
import { Trail } from '.././Trail';

const App = hoc(
  useAppProps,
  ({
    setIsRestart,
    animatedArticleFadeStyle,
    animatedOverlayOnLoadStyle,
    animatedOverlayOnPlayStyle,
    animatedOverlayOnRestartFadeStyle,
    isPlaying,
    isAutoPlay,
    isEnd,
    onLoad,
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
                  <h1 className={styles.heading}>
                    <span>Paul</span>&nbsp;
                    <small>,1986-2021</small>
                  </h1>
                ) : (
                  <h1 className={styles.heading}>Liebe soll dich begleiten</h1>
                )}

                <div className="mb-4" />
                <button
                  className={styles.button}
                  onClick={() => {
                    setIsRestart(true);
                  }}
                >
                  {isEnd ? 'replay' : 'play '}
                </button>
              </article>
            </Trail>
          </animated.main>
        </animated.div>
        <Video
          src="https://tracepaul.s3.eu-central-1.amazonaws.com/video.mp4"
          isAutoPlay={isAutoPlay}
          isMute={!isPlaying}
          isLoop={!isPlaying}
        />
      </section>
    );
  },
);

export { App };
