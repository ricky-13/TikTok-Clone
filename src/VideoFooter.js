import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({ channel, description, song }) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3>@{channel}</h3>
            <p>{ description }</p>
            <div className='videoFooter_ticker'>
                <MusicNoteIcon className='videoFooter_icon' />

{/* React Ticker is a lightweight, performant React component, that moves text, images and videos infinitely like a newsticker. */}
                <Ticker mode = "smooth" move = {true} speed = {2}>
                  {({ index }) => (
                    <>
                      <p>{ song }</p>
                    </>
                  )}
                </Ticker>
            </div>
        </div>

        <img 
          className='videoFooter_record'
          src = 'https://static.thenounproject.com/png/934821-200.png'
          alt = ""
          />

    </div>
  )
}

export default VideoFooter;