import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <AppContext.Consumer>
          {AppContext =>
            !!AppContext.user.userId
              ? <Component {...componentProps} />
              : (
                <Redirect
                  to={{
                    pathname: AppContext.user.idle ? '/login' : '/welcome',
                    state: { from: componentProps.location },
                  }}
                />
              )
          }
        </AppContext.Consumer>
      )}
    />
  )
}
