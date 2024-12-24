import React from 'react';
import styles from './Navigation.module.scss';
import NavButton from '../nav-button/NavButton';

interface NavigationProps {
    onGoodvibesClick: () => void; // Обработчик клика для кнопки "Гудвайбсы"
}

const Navigation: React.FC<NavigationProps> = ({ onGoodvibesClick }) => {
    return (
        <nav className={styles.navigation}>
            <NavButton text="Гудвайбсы" onClick={onGoodvibesClick} />
            <NavButton text="Гайды" onClick={() => console.log('Гайды clicked')} />
        </nav>
    );
};

export default Navigation;