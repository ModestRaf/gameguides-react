import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/index.module.scss";
import PlaylistCard from '../cards/PlaylistCard';
import { cardsData } from '../../data';

const Playlists: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = (index: number) => {
        let category = '';
        switch (index) {
            case 0:
                category = 'goodvibes';
                break;
            case 1:
                category = 'other';
                break;
            case 2:
                category = 'genshin';
                break;
            default:
                console.warn('Функция для этого плейлиста еще не реализована');
                return;
        }
        navigate(`/video/${category}`);
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