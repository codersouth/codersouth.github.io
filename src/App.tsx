import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import { Questions } from './pages/Questions'
import { MakeAQuestion } from './pages/MakeAQuestion'
import { Home } from './pages/Home'
import { Menu } from './components/Menu'
import { useUser } from './data/useUser'

export const App = () => {
  const { user } = useUser()

  return (
    <>
      <Menu />
      <Container
        background="white"
        height="100vh"
        maxW="container.xl"
        padding="2rem 1.9rem"
      >
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={user ? <MakeAQuestion /> : <Navigate replace to="/" />}
            path="/make-a-question"
          />
          <Route
            element={user ? <Questions /> : <Navigate replace to="/" />}
            path="/questions"
          />
        </Routes>
      </Container>
    </>
  )
}
