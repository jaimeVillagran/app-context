import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light'); // Puedes cambiar a 'dark' como valor inicial si prefieres

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<div className={theme}>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				{children}
			</ThemeContext.Provider>
		</div>
	);
};
