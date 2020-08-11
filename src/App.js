import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import PrivateRoute from '../src/routes/PrivateRoute/PrivateRoute'
import PublicRoute from '../src/routes/PublicRoute/PublicRoute'
import RegistrationRoute from '../src/routes/RegistrationRoute/RegistrationRoute'
import LoginRoute from '../src/routes/LoginRoute/LoginRoute'
import DashboardRoute from '../src/routes/DashboardRoute/DashboardRoute'
import WantedRoute from '../src/routes/WantedRoute/WantedRoute'
import NotFoundRoute from '../src/routes/NotFoundRoute/NotFoundRoute'
import ProfileRoute from '../src/routes/ProfileRoute/ProfileRoute'
import BrowsePage from '../src/pages/BrowsePage'
import HelpWantedItemPage from '../src/pages/HelpWantedItemPage'
import './App.css'

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  //   componentDidMount() {
  //   /* set the callback to call when a user goes idle and logout */
  //   IdleService.setIdleCallback(this.logoutFromIdle);

  //   /* if a user is logged in */
  //   if (TokenService.hasAuthToken()) {
  //     /* tell the idle service to register event listeners. the event listeners are fired when a user does something, e.g. move their mouse
  //     if the user doesn't trigger one of these event listeners, the idleCallback (logout) will be invoked */
  //     IdleService.regiserIdleTimerResets()
  //     /* Tell the token service to read the JWT, looking at the exp value and queue a timeout just before the token expires */
  //     TokenService.queueCallbackBeforeExpiry(() => {
  //       /* the timeout will call this callback just before the token expires */
  //       AuthApiService.postRefreshToken()
  //     });
  //   };
  // };

  // componentWillUnmount() {
  //   /* when the app unmounts, stop the event listeners that auto logout (clear the token from storage) */
  //   IdleService.unRegisterIdleResets();
  //   /* and remove the refresh endpoint request */
  //   TokenService.clearCallbackBeforeExpiry();
  // };

  // logoutFromIdle = () => {
  //   /* remove the token from localStorage */
  //   TokenService.clearAuthToken();
  //   /* remove any queued calls to the refresh endpoint */
  //   TokenService.clearCallbackBeforeExpiry();
  //   /* remove the timeouts that auto logout when idle */
  //   IdleService.unRegisterIdleResets();
  //   /* react won't know the token has been removed from local storage, so we need to tell React to rerender */
  //   this.forceUpdate();
  // };

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
              path={'/wanted-item'}
              component={HelpWantedItemPage}
            />
            <PrivateRoute
              path={'/browse'}
              component={BrowsePage}
            />
            <PrivateRoute
              path={'/profile'}
              component={ProfileRoute}
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
