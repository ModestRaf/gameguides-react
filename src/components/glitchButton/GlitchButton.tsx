import React from 'react';
import styles from './GlitchButton.module.scss';

interface GlitchButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
}

const GlitchButton: React.FC<GlitchButtonProps> = ({ text, className, onClick }) => {
    return (
        <button className={`${styles.menuButton} ${className}`} onClick={onClick}>
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