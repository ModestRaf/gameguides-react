import React from 'react';
import styles from './Playlists.module.scss';
import PlaylistCard from '../playlistsCard/PlaylistsCard';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import { cardsData, GoodvibesIds, LaughtCryIds } from '../../data';

interface PlaylistsProps {
    isVideoMode: boolean; // Состояние для переключения режима
    setIsVideoMode: (isVideoMode: boolean) => void; // Функция для изменения состояния
    currentVideos: string[]; // Текущие видео в контейнере
    setCurrentVideos: (videos: string[]) => void; // Функция для изменения текущих видео
}

const Playlists: React.FC<PlaylistsProps> = ({
                                                 isVideoMode,
                                                 setIsVideoMode,
                                                 currentVideos,
                                                 setCurrentVideos,
                                             }) => {
    const handleCardClick = (index: number) => {
        if (index === 0) {
            // Если кликнули на первую карточку, переключаемся в режим видео с GoodvibesIds
            setIsVideoMode(true);
            setCurrentVideos(GoodvibesIds);
        } else if (index === 1) {
            // Если кликнули на вторую карточку, переключаемся в режим видео с LaughtCryIds
            setIsVideoMode(true);
            setCurrentVideos(LaughtCryIds);
        } else {
            console.warn('Функция для этой карточки еще не реализована');
        }
    };

    return (
        <div className={styles.container}>
            {/* Если режим видео, отображаем видео */}
            {isVideoMode ? (
                currentVideos.map((videoId, index) => (
                    <VideoPlayer key={index} videoId={videoId} />
                ))
            ) : (
                // Иначе отображаем плейлисты
                cardsData.map((card, index) => (
                    <PlaylistCard
                        key={index}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        onClick={() => handleCardClick(index)}
                    />
                ))
            )}
        </div>
    );
};

export default Playlists;