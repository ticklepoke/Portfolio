import React, { Suspense, lazy } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './common/Theme'
import ErrorBoundary from './common/ErrorBoundary'
import Navbar from './components/Navbar'
import Loading from './common/Loading'
import { GlobalStyles } from './common/GlobalStyle'
import Toggle from './components/ToggleTheme'
import { useDarkMode } from './common/useDarkMode'

const HomeLazy = lazy(() => import('./pages/Home'))
const ExperienceLazy = lazy(() => import('./pages/Experience'))
const ProjectsLazy = lazy(() => import('./pages/Projects'))
const NotFoundLazy = lazy(() => import('./pages/NotFound'))

function App () {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <ErrorBoundary>
        <GlobalStyles />
        <Router>
          <Navbar theme={theme} />
          <Toggle toggleTheme={toggleTheme} />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/" exact>
                <HomeLazy />
              </Route>
              <Route path="/experience" exact>
                <ExperienceLazy />
              </Route>
              <Route path="/projects" exact>
                <ProjectsLazy />
              </Route>
              <Route>
                <NotFoundLazy />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
