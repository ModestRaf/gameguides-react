import React from "react";
import Playlists from "../components/playlists/Playlists";
import PageLayout from "./PageLayout";

export const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Playlists />
        </PageLayout>
    );
};