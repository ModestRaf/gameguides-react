import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import NavButton from '../nav-button/NavButton';

const Navigation: React.FC = () => {
    const navigate = useNavigate(); // Хук для навигации

    return (
        <nav className={styles.navigation}>
            <NavButton
                text="Гудвайбсы"
                onClick={() => navigate('/')}
            />
            <NavButton
                text="Гайды"
                onClick={() => navigate('/guides')}
            />
        </nav>
    );
};

export default Navigation;