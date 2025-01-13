import React from 'react';
import styles from "../../styles/index.module.scss";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";

const MassEffect: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <Navigation/>
            <main className={styles.container}>
            </main>
            <Footer />
        </div>
    );
};

export default MassEffect;