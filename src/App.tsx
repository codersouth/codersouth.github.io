import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppProviders } from './AppProviders'
import { Questions } from './pages/Questions'
import { MakeAQuestion } from './pages/MakeAQuestion'
import { Home } from './pages/Home'
import { Menu } from './components/Menu'

export const App = () => (
  <AppProviders>
    <Menu />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<MakeAQuestion />} path="/make-a-question" />
      <Route element={<Questions />} path="/questions" />
    </Routes>
  </AppProviders>
)
