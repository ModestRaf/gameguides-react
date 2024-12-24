import clsx from 'clsx';
import React from 'react';
import styles from '../../styles/index.module.scss';
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import Header from "../header/Header";

export const App: React.FC = () => {
    return (
        <div className={styles.page}> {/* Используем стили для .page */}
            <Header />
            <Navigation />
            <main className={styles.container}> {/* Используем стили для .container */}
            </main>
            <Footer/>
        </div>
    );
};

export default App;