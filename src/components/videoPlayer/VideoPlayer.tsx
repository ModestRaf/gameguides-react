import React from 'react';

interface VideoPlayerProps {
    videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
    return (
        <iframe
            title="YouTube video player"
            width="320"
            height="190"
            src={`https://www.youtube.com/embed/${videoId}`}
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

export default VideoPlayer;