import React from 'react';
import { useNavigate } from 'react-router-dom'; // Используем useNavigate для навигации
import styles from './Navigation.module.scss';
import NavButton from '../nav-button/NavButton';

interface NavigationProps {
    onGoodvibesClick?: () => void; // Обработчик клика для кнопки "Гудвайбсы" (теперь опциональный)
}

const Navigation: React.FC<NavigationProps> = ({ onGoodvibesClick }) => {
    const navigate = useNavigate(); // Хук для навигации

    // Функция для обработки клика на кнопку "Гудвайбсы"
    const handleGoodvibesClick = () => {
        if (onGoodvibesClick) {
            onGoodvibesClick(); // Вызываем переданный обработчик, если он есть
        } else {
            navigate('/'); // По умолчанию перенаправляем на главную страницу
        }
    };

    return (
        <nav className={styles.navigation}>
            {/* Кнопка "Гудвайбсы" */}
            <NavButton
                text="Гудвайбсы"
                onClick={handleGoodvibesClick} // Используем handleGoodvibesClick
            />

            {/* Кнопка "Гайды" */}
            <NavButton
                text="Гайды"
                onClick={() => navigate('/guides')} // Навигация при клике
            />
        </nav>
    );
};

export default Navigation;