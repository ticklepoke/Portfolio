/* eslint-disable max-len */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Toggle from './ToggleTheme';

function Navbar(props: any) {
	return (
		<nav
			className={
				'navbar navbar-expand-sm ' + (props.theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark')
			}
			style={{ transition: 'all 0.25s linear' }}>
			<Link to="/depr" className="navbar-brand">
				Nigel Lee
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarColor03"
				aria-controls="navbarColor03"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarColor03">
				<ul className="navbar-nav d-flex w-100 justify-content-between">
					<div className="d-flex buttons-container">
						<li className="nav-item">
							<Link
								to="/depr/experience"
								className={props.history.location.pathname === '/experience' ? 'nav-link active' : 'nav-link'}>
								Experience <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/depr/projects"
								className={props.history.location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>
								Projects
							</Link>
						</li>
					</div>
					<li className="nav-item">
						<Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default withRouter(Navbar);
