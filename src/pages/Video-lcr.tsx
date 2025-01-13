import React from 'react';
import styles from '../styles/index.module.scss';
import {LaughtCryIds} from "../data";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import Footer from "../components/footer/Footer";

const VideoLcr: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <Navigation />
            <main className={styles.container}>
                {LaughtCryIds.map((videoId, index) => (
                    <VideoPlayer key={index} videoId={videoId}/>
                ))}
            </main>
            <Footer/>
        </div>
    );
};

export default VideoLcr;