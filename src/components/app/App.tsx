import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Guides from '../../pages/Guides';
import VideoGv from "../../pages/Video-gv";
import VideoLcr from "../../pages/Video-lcr";
import {HomePage} from "../../pages/HomePage";

export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/video-goodvibes" element={<VideoGv />} />
                <Route path="/video-lcr" element={<VideoLcr />} />
            </Routes>
        </Router>
    );
};

export default App;