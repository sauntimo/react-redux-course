import React from 'react';

import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

    const channelUrl = `https://www.youtube.com/channel/${video.snippet.channelId}`;
    const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;

    const onClick = () => {
        onVideoSelect(video);
    }

    return (
        <div className="video-item item" onClick={onClick}>
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
                    From <a href={channelUrl}>{video.snippet.channelTitle}</a>.
                </div>
            </div>
        </div>
    )
}

export default VideoItem;
