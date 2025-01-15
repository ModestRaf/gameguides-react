import React from 'react';
import styles from './Header.module.scss';
import { useTheme } from "../../ThemeContext";
import GlitchButton from "../glitchButton/GlitchButton";

const Header: React.FC = () => {
    const { setTheme } = useTheme(); // Используем только setTheme

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.logoTitle}>CyberTavern</h1>
                <p className={styles.logoText}>Гудвайбсы и гайды по играм</p>
            </div>
            <div className={styles.color}>
                <GlitchButton
                    text="Светлая"
                    className={styles.colorLight}
                    onClick={() => setTheme('light')} // Устанавливаем светлую тему
                />
                <GlitchButton
                    text="Авто"
                    className={styles.colorAuto}
                    onClick={() => setTheme('auto')} // Устанавливаем автоматическую тему
                />
                <GlitchButton
                    text="Темная"
                    className={styles.colorDark}
                    onClick={() => setTheme('dark')} // Устанавливаем тёмную тему
                />
            </div>
        </header>
    );
};

export default Header;