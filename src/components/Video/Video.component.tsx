import React from 'react';
import { useVideoProps } from './Video.props';
import { hoc } from '../../ultility/hoc';
import styles from './Video.module.scss';

const Video = hoc(useVideoProps, ({ src, isAutoPlay, isMute, isLoop, videoRef }) => {
  return (
    <section className={styles.container}>
      <div className={styles.controller}></div>

      <video ref={videoRef} className={styles.video} autoPlay={isAutoPlay} muted={isMute} loop={isLoop}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
});

export { Video };
