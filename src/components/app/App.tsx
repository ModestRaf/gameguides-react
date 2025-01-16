import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';

export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </Router>
    );
};

export default App;
