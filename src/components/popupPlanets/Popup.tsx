import React, {useEffect} from 'react';
import styles from './Popup.module.scss';

interface PopupProps {
    imageUrl: string;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ imageUrl, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className={styles.popupOverlay} onClick={onClose}>
            <button className={styles.closeButton} onClick={onClose}>
                ×
            </button>
            <img src={imageUrl} alt="Full size" className={styles.fullSizeImage} />
        </div>
    );
};

export default Popup;