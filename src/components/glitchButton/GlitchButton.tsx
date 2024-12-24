import React from 'react';
import styles from './GlitchButton.module.scss'; // Импортируем стили

interface GlitchButtonProps {
    text: string; // Текст кнопки
    className?: string; // Дополнительный класс для стилизации
}

const GlitchButton: React.FC<GlitchButtonProps> = ({ text, className }) => {
    return (
        <button className={`${styles.menuButton} ${className}`}>
            {text}
            <span className={styles.glitch} aria-hidden="true">
        {text}
      </span>
            <span className={styles.tag} aria-hidden="true">
        R25
      </span>
        </button>
    );
};

export default GlitchButton;