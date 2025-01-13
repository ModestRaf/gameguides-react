import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './styles/index.scss';
import { App } from './components/app/App';
import { ThemeProvider } from './ThemeContext';
import './images/favicon.ico';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <StrictMode>
        <ThemeProvider> {/* Оборачиваем App в ThemeProvider */}
            <App />
        </ThemeProvider>
    </StrictMode>
);