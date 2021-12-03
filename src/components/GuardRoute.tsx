import React, { VFC } from 'react'
import { Navigate, Route, RouteProps } from 'react-router-dom'
import { useUser } from '../data/useUser'

export const GuardRoute: VFC<RouteProps> = (props) => {
  const { user } = useUser()

  if (!user) {
    return <Navigate replace to="/" />
  }

  return <Route {...props} />
}
