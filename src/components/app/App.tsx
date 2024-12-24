import clsx from 'clsx';
import React, {useState} from 'react';
import styles from '../../styles/index.module.scss';
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import Header from "../header/Header";
import Playlists from "../playlists/Playlists";

export const App: React.FC = () => {
    const [isVideoMode, setIsVideoMode] = useState(false); // Состояние для переключения режима
    const [currentVideos, setCurrentVideos] = useState<string[]>([]); // Состояние для хранения текущих видео

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