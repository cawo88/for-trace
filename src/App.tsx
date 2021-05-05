import React from 'react';
import styles from './App.module.scss';
import { Video } from './components/Video';
import { Graphic } from './components/Graphic';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <Graphic />
      </div>

      <Video src="https://tracepaul.s3.eu-central-1.amazonaws.com/video.mp4" isAutoPlay isMute isLoop />
    </div>
  );
}

export default App;
