import React from 'react';
import { useVideoProps } from './Video.props';
import { hoc } from '../../ultility/hoc';
import styles from './Video.module.scss';

const Video = hoc(useVideoProps, ({ src, isAutoPlay, isMute, isLoop }) => {
  return (
    <section className={styles.container}>
      <div className={styles.controller}>
        <button className={styles.playBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path fill="#fff" d="M6 4l20 12L6 28z" />
          </svg>
        </button>
      </div>

      <video className={styles.video} autoPlay={isAutoPlay} muted={isMute} loop={isLoop}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
});

export { Video };
