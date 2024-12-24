import React from 'react';
import styles from './NavButton.module.scss'; // Импортируем стили

interface NavButtonProps {
    text: string; // Текст кнопки
    onClick: () => void; // Обработчик клика
}

const NavButton: React.FC<NavButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className={`${styles.navButton} ${styles.button}`}
            onClick={onClick} // Добавляем обработчик клика
        >
            {text}
        </button>
    );
};

export default NavButton;