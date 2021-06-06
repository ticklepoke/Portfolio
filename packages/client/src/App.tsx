import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './common/Theme';
import ErrorBoundary from './common/ErrorBoundary';
import Navbar from './components/Navbar';
import Loading from './common/Loading';
import { GlobalStyles } from './common/GlobalStyle';
import { useDarkMode } from './common/useDarkMode';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
	duration: 1200,
});

const HomeLazy = lazy(() => import('./pages/Home'));
const ExperienceLazy = lazy(() => import('./pages/Experience'));
const ProjectsLazy = lazy(() => import('./pages/Projects'));
const NotFoundLazy = lazy(() => import('./pages/NotFound'));

const InlineHomeLazy = lazy(() => import('./pages/InlineHome'));

function App() {
	const [theme, toggleTheme, componentMounted] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!componentMounted) {
		return <div />;
	}

	return (
		<ThemeProvider theme={themeMode}>
			<ErrorBoundary>
				<GlobalStyles />
				<Router>
					<div style={{ minHeight: 'calc(100vh - 100px)' }}>
						<Suspense fallback={<Loading />}>
							<Switch>
								<Route path="/" exact>
									<InlineHomeLazy theme={theme} toggleTheme={toggleTheme} />
								</Route>
								<Route path="/depr" exact>
									<Navbar theme={theme} toggleTheme={toggleTheme} />
									<HomeLazy />
									<Footer />
								</Route>
								<Route path="/depr/experience" exact>
									<Navbar theme={theme} toggleTheme={toggleTheme} />
									<ExperienceLazy />
									<Footer />
								</Route>
								<Route path="/depr/projects" exact>
									<Navbar theme={theme} toggleTheme={toggleTheme} />
									<ProjectsLazy />
									<Footer />
								</Route>
								<Route path="/depr/home" exact>
									<Navbar theme={theme} toggleTheme={toggleTheme} />
									<Redirect to="/depr" />
									<Footer />
								</Route>
								<Route>
									<NotFoundLazy />
								</Route>
							</Switch>
						</Suspense>
					</div>
				</Router>
			</ErrorBoundary>
		</ThemeProvider>
	);
}

export default App;
