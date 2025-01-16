import React from 'react';
import { useParams } from 'react-router-dom';
import { GenshinIds, GoodvibesIds, OtherIds } from "../data";
import PageLayout from "./PageLayout";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";

const VideoPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();

    let videoIds: string[];
    switch (category) {
        case 'goodvibes':
            videoIds = GoodvibesIds;
            break;
        case 'genshin':
            videoIds = GenshinIds;
            break;
        case 'other':
            videoIds = OtherIds;
            break;
        default:
            videoIds = [];
    }

    return (
        <PageLayout>
            {videoIds.map((videoId, index) => (
                <VideoPlayer key={index} videoId={videoId} />
            ))}
        </PageLayout>
    );
};

export default VideoPage;