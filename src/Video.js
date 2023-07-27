import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';

function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    // if video is playing, stop it
    // otherwise if not playing, play it
    if(playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
    else {
      videoRef.current.play();
      setPlaying(true);
    }

  }


  return (
    <div className='video'>
        <video
            onClick={handleVideoPress}
            className='video_player'
            loop
            ref = {videoRef}
            // this ref is like a finger pointing towards that video (targets it)
            src = 'https://player.vimeo.com/external/420239207.sd.mp4?s=2b5a6633c37af1a6fb0beb02c06bdc376fdfcce2&profile_id=165&oauth2_token_id=57447761'></video>

{/* https://player.vimeo.com/external/420239207.sd.mp4?s=2b5a6633c37af1a6fb0beb02c06bdc376fdfcce2&profile_id=165&oauth2_token_id=57447761

https://player.vimeo.com/external/430014215.sd.mp4?s=2c2fedb46aa038dcc4664ad42ef6a0e002bf312a&profile_id=165&oauth2_token_id=57447761

https://v4.cdnpk.net/videvo_files/video/free/video0483/large_watermarked/_import_60d962f06b3ef8.86089157_FPpreview.mp4
*/}

      <VideoFooter />

        {/* <VideoFooter /> */}
        {/* <VideoSidebar /> */}
    </div>
  )
}

export default Video;