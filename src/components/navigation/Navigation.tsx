import React from 'react';
import styles from './Navigation.module.scss';
import NavButton from '../nav-button/NavButton';

const Navigation: React.FC = () => {
    return (
        <nav className={styles.navigation}>
            <NavButton text="Гудвайбсы" href="index.html" />
            <NavButton text="Гайды" href="guides.html" />
        </nav>
    );
};

export default Navigation;