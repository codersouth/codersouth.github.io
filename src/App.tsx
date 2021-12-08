import React, { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { useUser } from './data/useUser'
import { Layout } from './components/Layout'

const Questions = lazy(() => import('./pages/Questions'))
const Profile = lazy(() => import('./pages/Profile'))
const Members = lazy(() => import('./pages/Members'))

export const App = () => {
  const { user } = useUser()

  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={user ? <Questions /> : <Navigate replace to="/" />}
          path="/questions"
        />
        <Route
          element={user ? <Profile /> : <Navigate replace to="/" />}
          path="/profile"
        />
        <Route
          element={user ? <Members /> : <Navigate replace to="/" />}
          path="/members"
        />
      </Routes>
    </Layout>
  )
}
