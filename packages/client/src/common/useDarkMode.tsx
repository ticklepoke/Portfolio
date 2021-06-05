import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';
export type ToggleTheme = () => void;

export const useDarkMode = (): [Theme, ToggleTheme, boolean] => {
	const [theme, setTheme] = useState<Theme>('light');
	const [componentMounted, setComponentMounted] = useState(false);

	const setMode = (mode: Theme) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const toggleTheme = () => {
		if (theme === 'light') {
			setMode('dark');
		} else {
			setMode('light');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme) {
			setMode('dark');
		} else if (localTheme) {
			setTheme(localTheme as Theme);
		} else {
			setMode('light');
		}

		setComponentMounted(true);
	}, []);

	return [theme, toggleTheme, componentMounted];
};
