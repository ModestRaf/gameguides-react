import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/index.module.scss";
import PlaylistCard from '../cards/PlaylistCard';
import { cardsData } from '../../data';

const Playlists: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = (index: number) => {
        if (index === 0) {
            navigate('/goodvibes');
        } else if (index === 1) {
            navigate('/other');
        } else if (index === 2) {
            navigate('/genshin');
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