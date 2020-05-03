import React, { Suspense, lazy } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from './common/ErrorBoundary'
import Navbar from './components/Navbar'
import Loading from './common/Loading'

const HomeLazy = lazy(() => import('./pages/Home'))
const ExperienceLazy = lazy(() => import('./pages/Experience'))
const ProjectsLazy = lazy(() => import('./pages/Projects'))
const NotFoundLazy = lazy(() => import('./pages/NotFound'))

function App () {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
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
  )
}

export default App
