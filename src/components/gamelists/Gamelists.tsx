import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/index.module.scss";
import { guideCardData } from '../../data';
import GuideCard from "../cards/GuideCard";

const Gamelists: React.FC = () => {
    const navigate = useNavigate();

    const handleCardClick = (index: number) => {
        let category = '';
        switch (index) {
            case 0:
                category = 'masseffect';
                break;
            case 1:
                category = 'dragonage';
                break;
            case 2:
                category = 'longdark';
                break;
            default:
                console.warn('Функция для этого списка еще не реализована');
                return;
        }
        navigate(`/guides/${category}`);
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