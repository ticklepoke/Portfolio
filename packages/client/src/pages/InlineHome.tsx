import React from 'react';
import { Link } from 'react-router-dom';
import Toggle, { ToggleThemeProps } from '../components/ToggleTheme';
import { InlineHomeData } from '../_data/InlineHome';

import './InlineHome.css';

// interface InlineHomeProps extends ToggleThemeProps {}

const { titleBar, about, work } = InlineHomeData;
function InlineHome({ theme, toggleTheme }: ToggleThemeProps) {
	return (
		<>
			<div className="m-3" style={{ minHeight: 'calc(100vh - 100px)' }}>
				<div className="d-md-flex d-sm-block justify-content-between">
					<div>
						<h1>
							{titleBar.name.en}
							&nbsp;&nbsp;
							{titleBar.name.cn}
						</h1>
						<h5>
							{titleBar.links.map(({ title, href, body }, idx) => (
								<>
									{title}: <a href={href}>{body}</a>
									{idx !== titleBar.links.length - 1 && '\t|\t'}
								</>
							))}
						</h5>
					</div>
					<Toggle theme={theme} toggleTheme={toggleTheme} />
				</div>
				<hr />
				{about.map((line) => (
					<p key={line} dangerouslySetInnerHTML={{ __html: line }} />
				))}
				<hr />
				<h3>Work Experience</h3>
				{work.map(({ company, title, period, description, technologies }) => (
					<div className="mt-3 mb-4" key={title}>
						<h5>
							<b>{company}</b>&nbsp;&nbsp;-&nbsp;&nbsp;{title}
						</h5>
						<h5>{period}</h5>
						<p>{description}</p>
						<span>
							Technologies Used:{' '}
							{technologies.map(({ title, icon }) => (
								<img
									key={title}
									className="tech-icon mx-1"
									src={require('../assets/icons/' + icon)}
									title={title}
									alt={title}
								/>
							))}
						</span>
					</div>
				))}
			</div>
			<div style={{ minHeight: '70px' }} className="m-3">
				<span>
					The old site has been deprecated. Visit it <Link to="/depr">here.</Link>
				</span>
			</div>
		</>
	);
}

export default InlineHome;
