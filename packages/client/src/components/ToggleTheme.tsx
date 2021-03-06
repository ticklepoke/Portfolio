import React from 'react';
import { Theme, ToggleTheme } from '../common/useDarkMode';
import './ToggleTheme.css';

export interface ToggleThemeProps {
	theme: Theme;
	toggleTheme: ToggleTheme;
}

const Toggle = ({ theme, toggleTheme }: ToggleThemeProps) => {
	return (
		<div className="custom-control custom-switch pt-2">
			<input
				type="checkbox"
				className="custom-control-input"
				id="customSwitch1"
				checked={theme === 'light'}
				onClick={toggleTheme}
			/>
			<label className="custom-control-label" htmlFor="customSwitch1">
				{theme === 'light' ? 'Turn off the lights!' : 'Turn on the lights!'}
			</label>
		</div>
	);
};

export default Toggle;
