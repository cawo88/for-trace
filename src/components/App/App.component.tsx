import React from 'react';
import { useAppProps } from './App.props';
import { hoc } from '../../ultility/hoc';
import styles from './App.module.scss';
import { Video } from '.././Video';
import { Graphic } from '.././Graphic';
import { animated } from 'react-spring';

const App = hoc(
  useAppProps,
  ({
    setIsRestart,
    animatedArticleFadeOutStyle,
    animatedOverlayFadeInStyle,
    animatedOverlayFadeOutStyle,
    isPlaying,
  }) => {
    return (
      <section className={styles.container}>
        <animated.div
          className={styles.overlay}
          style={isPlaying ? animatedOverlayFadeOutStyle : animatedOverlayFadeInStyle}
        >
          <animated.main className={styles.main} style={animatedArticleFadeOutStyle}>
            <Graphic />
            <article className={styles.article}>
              <h1>
                Liebe soll dich begleiten <br />
                <button onClick={() => setIsRestart(true)}>
                  <b>Play video</b>
                </button>
              </h1>
            </article>
          </animated.main>
        </animated.div>
        <Video src="https://tracepaul.s3.eu-central-1.amazonaws.com/video.mp4" isAutoPlay isMute={!isPlaying} isLoop />
      </section>
    );
  },
);

export { App };
