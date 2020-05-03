import React, { Suspense, lazy } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from './common/ErrorBoundary'

const HomeLazy = lazy(() => import('./pages/Home'))
const ExperienceLazy = lazy(() => import('./pages/Experience'))

function App () {
  return (
    <ErrorBoundary>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <h1>Header</h1>
          <Switch>
            <Route path="/" exact>
              <HomeLazy />
            </Route>
            <Route path="/experience" exact>
              <ExperienceLazy />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
