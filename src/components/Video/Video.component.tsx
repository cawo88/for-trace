import React from 'react';
import { useVideoProps } from './Video.props';
import { hoc } from '../../ultility/hoc';
import styles from './Video.module.scss';

const Video = hoc(useVideoProps, ({ src, isPlaying, isAutoPlay, isMute, isLoop, videoRef, setIsEnd }) => {
  return (
    <section className={styles.container}>
      <div className={styles.controller}></div>

      <video
        preload="metadata"
        ref={videoRef}
        className={isPlaying ? styles.videoIsPlaying : styles.video}
        autoPlay={isAutoPlay}
        muted={isMute}
        loop={isLoop}
        controlsList="nodownload"
        disablePictureInPicture
        onEnded={() => setIsEnd(true)}
        playsInline={isAutoPlay}
      >
        <source src={src} type="video/mp4" />
        Ihr Browser unterstützt das Video-Tag nicht.
      </video>
    </section>
  );
});

export { Video };
