import React from 'react';

import './VideoItem.css';

const VideoItem = ({video}) => {

    const channelUrl = `https://www.youtube.com/channel/${video.snippet.channelId}`;
    const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;

    return (
        <div className="video-item item">
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <a 
                    className="header"
                    href={videoUrl}
                >
                    {video.snippet.title}
                </a>
                <div className="description">
                    From channel <a href={channelUrl}>{video.snippet.channelTitle}</a>.
                </div>
            </div>
        </div>
    )
}

export default VideoItem;
