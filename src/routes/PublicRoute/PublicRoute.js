import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <AppContext.Consumer>
          {AppContext =>
            !!AppContext.user.userId
              ? <Redirect to={'/'} />
              : <Component {...componentProps} />
          }
        </AppContext.Consumer>
      )}
    />
  )
}
