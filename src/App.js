import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import PrivateRoute from '../src/routesPrivateRoute/PrivateRoute'
import PublicRoute from '../src/routes/PublicRoute/PublicRoute'
import RegistrationRoute from '../src/routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../src/routes/LoginRoute/LoginRoute'
import DashboardRoute from '../src/routes/DashboardRoute/DashboardRoute'
import LearningRoute from '../src/routes/LearningRoute/LearningRoute'
import NotFoundRoute from '../src/routes/NotFoundRoute/NotFoundRoute'
import './App.css'

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    return (
      <div className='App'>
        <Header />
        <main>
          {hasError && (
            <p>There was an error! Oh no!</p>
          )}
          <Switch>
            <PrivateRoute
              exact
              path={'/'}
              component={DashboardRoute}
            />
            <PrivateRoute
              path={'/learn'}
              component={LearningRoute}
            />
            <PublicRoute
              path={'/register'}
              component={RegistrationRoute}
            />
            <PublicRoute
              path={'/login'}
              component={LoginRoute}
            />
            <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
