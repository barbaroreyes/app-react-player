import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
    return (
        <div className="video">
             <ReactPlayer
             className='player'
             controls
             url='https://www.twitch.tv/videos/1052860129'
             width='680px' height="1000px''"
             />
        </div>
    )
}

export default Video 
