import React from 'react';
import styles from "../../../styles/index.module.scss";
import Header from "../../../components/header/Header";
import Navigation from "../../../components/navigation/Navigation";
import Footer from "../../../components/footer/Footer";
import PlanetAccordion from "../../../components/accordion/PlanetAccordion";
import {planetsData} from "../../../data";

const MassEffectPlanets: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <Navigation />
            <main className={styles.container}>
                <PlanetAccordion planets={planetsData} />
            </main>
            <Footer />
        </div>
    );
};

export default MassEffectPlanets;