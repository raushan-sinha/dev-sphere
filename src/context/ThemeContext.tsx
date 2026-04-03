import { createContext, useState, type ReactNode } from "react";

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    setTheme: (value: Theme) => void;
}


export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}