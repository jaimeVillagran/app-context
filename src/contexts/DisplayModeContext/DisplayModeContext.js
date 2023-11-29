import React, { createContext, useState } from 'react';

// Crear el contexto para el modo de visualización
const DisplayModeContext = createContext();

// Crear el proveedor del contexto
const DisplayModeProvider = ({ children }) => {
	// Estado para el modo oscuro
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Función para cambiar el modo oscuro
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	// Retornar el proveedor del contexto
	return (
		<DisplayModeContext.Provider
			value={{
				isDarkMode,
				toggleDarkMode,
			}}>
			{children}
		</DisplayModeContext.Provider>
	);
};

export { DisplayModeContext, DisplayModeProvider };
