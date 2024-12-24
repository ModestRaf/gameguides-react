import React from 'react';
import styles from './NavButton.module.scss'; // Импортируем стили

interface NavButtonProps {
    text: string; // Текст кнопки
    href: string; // Ссылка для кнопки
}

const NavButton: React.FC<NavButtonProps> = ({ text, href }) => {
    return (
        <button
            className={`${styles.navButton} ${styles.button}`}
            data-href={href}
        >
            {text}
        </button>
    );
};

export default NavButton;