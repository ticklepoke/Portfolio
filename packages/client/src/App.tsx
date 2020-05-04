import React, { Suspense, lazy } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './common/Theme'
import ErrorBoundary from './common/ErrorBoundary'
import Navbar from './components/Navbar'
import Loading from './common/Loading'
import { GlobalStyles } from './common/GlobalStyle'
import { useDarkMode } from './common/useDarkMode'
import Footer from './components/Footer'

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
          <div style={{ minHeight: 'calc(100vh - 100px)' }}>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
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
          </div>
          <Footer />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
