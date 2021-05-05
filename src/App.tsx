import React from 'react';
import './App.scss';
import { Video } from './components/Video';

function App() {
  return <Video src="https://tracepaul.s3.eu-central-1.amazonaws.com/video.mp4" isAutoPlay isMute isLoop />;
}

export default App;
