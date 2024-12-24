import React from 'react';
import styles from './Navigation.module.scss'; // Импортируем стили

const Navigation: React.FC = () => {
    return (
        <nav className={styles.navigation}>
            <button className={`${styles.navigation__button} ${styles.button}`} data-href="index.html">
                Гудвайбсы
            </button>
            <button className={`${styles.navigation__button} ${styles.button}`} data-href="guides.html">
                Гайды
            </button>
        </nav>
    );
};

export default Navigation;