import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/index.module.scss';
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Playlists from "../playlists/Playlists";

export const App: React.FC = () => {
    const [isVideoMode, setIsVideoMode] = useState<boolean>(() => {
        // Инициализация из LocalStorage
        const storedVideoMode = localStorage.getItem('isVideoMode');
        return storedVideoMode ? JSON.parse(storedVideoMode) : false;
    });

    const [currentVideos, setCurrentVideos] = useState<string[]>(() => {
        // Инициализация из LocalStorage
        const storedVideos = localStorage.getItem('currentVideos');
        return storedVideos ? JSON.parse(storedVideos) : [];
    });

    useEffect(() => {
        // Сохраняем состояние в LocalStorage
        localStorage.setItem('isVideoMode', JSON.stringify(isVideoMode));
    }, [isVideoMode]);

    useEffect(() => {
        // Сохраняем текущие видео в LocalStorage
        localStorage.setItem('currentVideos', JSON.stringify(currentVideos));
    }, [currentVideos]);

    const handleGoodvibesClick = () => {
        setIsVideoMode(false); // Возвращаемся к отображению плейлистов
    };

    return (
        <div className={styles.page}>
            <Header />
            <Navigation onGoodvibesClick={handleGoodvibesClick} />
            <main className={styles.container}>
                <Playlists
                    isVideoMode={isVideoMode}
                    setIsVideoMode={setIsVideoMode}
                    currentVideos={currentVideos}
                    setCurrentVideos={setCurrentVideos}
                />
            </main>
            <Footer />
        </div>
    );
};

export default App;
