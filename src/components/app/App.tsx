import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Guides from '../../pages/Guides';
import Goodvibes from "../../pages/Video/Goodvibes-video";
import OtherVideo from "../../pages/Video/Other-video";
import {HomePage} from "../../pages/HomePage";
import MassEffect from "../../pages/Guides/ME-guides";
import DragonAge from "../../pages/Guides/DA-guides";
import LongDark from "../../pages/Guides/LongDark-guides";
import Genshin from "../../pages/Video/Genshin-video";

export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/goodvibes" element={<Goodvibes />} />
                <Route path="/other" element={<OtherVideo />} />
                <Route path="/genshin" element={<Genshin />} />
                <Route path="/masseffect" element={<MassEffect />} />
                <Route path="/dragonage" element={<DragonAge />} />
                <Route path="/longdark" element={<LongDark />} />
            </Routes>
        </Router>
    );
};

export default App;