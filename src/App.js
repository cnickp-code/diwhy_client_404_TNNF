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
import Intro from './components/Intro/Intro'
import AppContext from './contexts/AppContext'

export default class App extends Component {
  static contextType = AppContext;

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
    console.log(this.context.user);
    console.log(this.context.user.intro);
    console.log(TokenService.hasAuthToken());
    return (
      <div className='App'>
        {this.context.user.intro && <Header />}
        {!this.context.user.intro && TokenService.hasAuthToken() &&

          <main>
            <Intro />
          </main>
        }
        {!TokenService.hasAuthToken() &&
          <main>
            <Switch>
              <PrivateRoute
                exact
                path={'/'}
                component={DashboardRoute}
              />
              <Route
                path={'/welcome'}
                component={SplashPage}
              />
              <Route
                path={'/register'}
                component={RegistrationRoute}
              />
              <Route
                path={'/login'}
                component={LoginRoute}
              />
              <Route
                component={NotFoundRoute}
              />
            </Switch>
          </main>
        }
        {this.context.user.intro && <main>
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
              path={'/profile/:user_name'}
              component={ProfileRoute}
            />
            <PrivateRoute
              path={'/edit'}
              component={EditProfilePage}
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
        </main>}
      </div>
    );
  }
}
