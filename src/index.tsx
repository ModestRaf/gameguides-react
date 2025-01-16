import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './styles/index.scss';
import App from './components/app/App';
import { ThemeProvider } from './ThemeContext';
import './images/favicon.ico';

const domNode = document.getElementById('root');
if (!domNode) {
    throw new Error("Root element not found. Please check your HTML structure.");
}

const root = createRoot(domNode as HTMLDivElement);

root.render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
);