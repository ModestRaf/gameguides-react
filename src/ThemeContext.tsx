import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isBrowser = typeof window !== 'undefined';

    const [theme, setTheme] = useState<Theme>(() => {
        try {
            const savedTheme = isBrowser ? localStorage.getItem('theme') as Theme | null : null;
            return savedTheme || 'auto';
        } catch {
            return 'auto';
        }
    });

    useEffect(() => {
        if (!isBrowser) return;

        const resolvedTheme =
            theme === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
        document.documentElement.setAttribute('data-theme', resolvedTheme);

        if (theme === 'auto') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = () => {
                const newTheme = mediaQuery.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
            };
            mediaQuery.addEventListener('change', handleChange);

            return () => mediaQuery.removeEventListener('change', handleChange);
        }
    }, [theme, isBrowser]);

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('theme', theme);
        }
    }, [theme, isBrowser]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

