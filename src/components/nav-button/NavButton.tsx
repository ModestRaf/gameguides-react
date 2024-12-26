import React from 'react';
import styles from './NavButton.module.scss'; // Импортируем стили

interface NavButtonProps {
    text: string; // Текст кнопки
    onClick?: () => void; // Обработчик клика (теперь опциональный)
}

const NavButton: React.FC<NavButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className={styles.navButton}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default NavButton;