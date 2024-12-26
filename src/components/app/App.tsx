import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from '../../styles/index.module.scss';
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Playlists from "../playlists/Playlists";
import Guides from '../../pages/Guides';

const HomePage: React.FC = () => {
    const [isVideoMode, setIsVideoMode] = useState<boolean>(() => {
        const storedVideoMode = localStorage.getItem('isVideoMode');
        return storedVideoMode ? JSON.parse(storedVideoMode) : false;
    });

    const [currentVideos, setCurrentVideos] = useState<string[]>(() => {
        const storedVideos = localStorage.getItem('currentVideos');
        return storedVideos ? JSON.parse(storedVideos) : [];
    });

    useEffect(() => {
        localStorage.setItem('isVideoMode', JSON.stringify(isVideoMode));
    }, [isVideoMode]);

    useEffect(() => {
        localStorage.setItem('currentVideos', JSON.stringify(currentVideos));
    }, [currentVideos]);

    const handleGoodvibesClick = () => {
        setIsVideoMode(false);
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

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/guides" element={<Guides />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;