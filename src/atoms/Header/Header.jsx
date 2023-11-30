import React, { useContext } from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4'; // Icono para el modo oscuro
import Brightness7Icon from '@material-ui/icons/Brightness7'; // Icono para el modo claro
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import logo from './../../assets/img/logo.png';

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const isDarkMode = theme === 'dark';

	return (
		<AppBar position="sticky">
			<Toolbar>
				<img src={logo} width="35" height="35" alt="logo-lyric" />
				&nbsp;&nbsp;
				<h1>Lyric Finder App</h1>
				<IconButton onClick={toggleTheme} color="inherit">
					{isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
