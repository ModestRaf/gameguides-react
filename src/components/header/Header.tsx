import React from 'react';
import styles from './Header.module.scss'; // Импортируем стили для Header
import GlitchButton from '../glitchButton/GlitchButton'; // Импортируем GlitchButton

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.logoTitle}>CyberTavern</h1>
                <p className={styles.logoText}>Гудвайбсы и гайды по играм</p>
            </div>
            <div className={styles.color}>
                <GlitchButton text="Светлая" className={styles.colorLight} />
                <GlitchButton text="Авто" className={styles.colorAuto} />
                <GlitchButton text="Темная" className={styles.colorDark} />
            </div>
        </header>
    );
};

export default Header;