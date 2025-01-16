import React from 'react';
import styles from '../styles/index.module.scss';
import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className={styles.page}>
            <Header />
            <Navigation />
            <main className={styles.container}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;