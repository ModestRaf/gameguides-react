import React from 'react';
import styles from './PlaylistsCard.module.scss';

interface PlaylistCardProps {
    title: string;
    imageUrl: string;
    onClick: () => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ title, imageUrl, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <h3 className={styles.title}>{title}</h3>
        </div>
    );
};

export default PlaylistCard;