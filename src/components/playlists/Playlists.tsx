import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Playlists.module.scss';
import PlaylistCard from '../card/PlaylistsCard';
import { cardsData } from '../../data';

const Playlists: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = (index: number) => {
        if (index === 0) {
            navigate('/video-goodvibes');
        } else if (index === 1) {
            navigate('/video-lcr');
        } else {
            console.warn('Функция для этого плейлиста еще не реализована');
        }
    };

    return (
        <div className={styles.container}>
            {cardsData.map((card, index) => (
                <PlaylistCard
                    key={index}
                    title={card.title}
                    imageUrl={card.imageUrl}
                    onClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    );
};

export default Playlists;