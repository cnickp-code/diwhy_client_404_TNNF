import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../src/components/Header/Header'
// import Footer from '../src/components/Footer/Footer'
import PrivateRoute from '../src/routes/PrivateRoute/PrivateRoute'
import PublicRoute from '../src/routes/PublicRoute/PublicRoute'
import RegistrationRoute from '../src/routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../src/routes/LoginRoute/LoginRoute'
import DashboardRoute from '../src/routes/DashboardRoute/DashboardRoute'
import WantedRoute from '../src/routes/WantedRoute/WantedRoute'
import NotFoundRoute from '../src/routes/NotFoundRoute/NotFoundRoute'
import ProfileRoute from '../src/routes/ProfileRoute/ProfileRoute'
import EditProfilePage from '../src/pages/EditProfilePage'
import HelpWantedItemPage from '../src/pages/HelpWantedItemPage'
import SplashPage from '../src/pages/SplashPage'
import './App.css'
import ThreadItemPage from './pages/ThreadItemPage'
import TokenService from './Services/token-service'
import IdleService from './Services/idle-service'

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        this.fetchRefreshToken()
      })
    }
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
              path={'/wanted'}
              component={WantedRoute}
            />
            <PrivateRoute
              path={'/wanted-item/:id'}
              component={HelpWantedItemPage}
            />
            <PrivateRoute
              path={'/thread/:id'}
              component={ThreadItemPage}
            />
            <PrivateRoute
              path={'/profile'}
              component={ProfileRoute}
            />
            <PrivateRoute
              path={'/edit'}
              component={EditProfilePage}
            />
            <PublicRoute
              path={'/welcome'}
              component={SplashPage}
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
