import React from 'react';
import styles from './PlaylistsCard.module.scss'; // Импортируем стили

const PlaylistsCard: React.FC = () => {
    return (
        <div className={styles.playlistsCard}>
            <div className={styles.playlistsCardImage} />
            <h3 className={styles.playlistsCardTitle}>Название плейлиста</h3>
        </div>
    );
};

export default PlaylistsCard;