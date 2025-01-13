import React from "react";
import styles from "../styles/index.module.scss";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Playlists from "../components/playlists/Playlists";
import Footer from "../components/footer/Footer";

export const HomePage: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <Navigation />
            <main className={styles.container}>
                <Playlists />
            </main>
            <Footer />
        </div>
    );
};