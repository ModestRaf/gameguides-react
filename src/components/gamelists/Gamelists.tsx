import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/index.module.scss";
import { guideCardData } from '../../data';
import GuideCard from "../cards/GuideCard";

const Gamelists: React.FC = () => {
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
            {guideCardData.map((card, index) => (
                <GuideCard
                    key={index}
                    title={card.title}
                    imageUrl={card.imageUrl}
                    onClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    );
};

export default Gamelists;