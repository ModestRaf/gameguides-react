import React, { useState } from 'react';
import styles from './PlanetAccordion.module.scss';
import Popup from "../popupPlanets/Popup";

interface Planet {
    id: number;
    name: string;
    location: string;
    mapImage: string;
    hasReaper: boolean;
}

interface PlanetAccordionProps {
    planets: Planet[];
}

const PlanetAccordion: React.FC<PlanetAccordionProps> = ({ planets }) => {
    const [expandedPlanetId, setExpandedPlanetId] = useState<number | null>(null);
    const [popupImageUrl, setPopupImageUrl] = useState<string | null>(null);

    const handlePlanetClick = (id: number) => {
        setExpandedPlanetId(expandedPlanetId === id ? null : id);
    };

    const openPopup = (imageUrl: string) => {
        setPopupImageUrl(imageUrl);
    };

    const closePopup = () => {
        setPopupImageUrl(null);
    };

    return (
        <div className={styles.accordion}>
            {planets.map((planet) => (
                <div key={planet.id} className={styles.planet}>
                    <div
                        className={styles.planetHeader}
                        onClick={() => handlePlanetClick(planet.id)}
                    >
                        <h3>{planet.name}</h3>
                        <span>{expandedPlanetId === planet.id ? '▲' : '▼'}</span>
                    </div>
                    {expandedPlanetId === planet.id && (
                        <div className={styles.planetContent}>
                            <p><strong>Местоположение:</strong> {planet.location}</p>
                            <p>
                                <strong>Молотильщик:</strong> {planet.hasReaper ? 'Есть' : 'Нет'}
                            </p>
                            <img
                                src={planet.mapImage}
                                alt={`Карта ${planet.name}`}
                                className={styles.mapImage}
                                onClick={() => openPopup(planet.mapImage)}
                            />
                        </div>
                    )}
                </div>
            ))}
            {popupImageUrl && <Popup imageUrl={popupImageUrl} onClose={closePopup} />}
        </div>
    );
};

export default PlanetAccordion;