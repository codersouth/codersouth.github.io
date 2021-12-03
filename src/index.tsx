import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

const pageElement = document.getElementById('page')
render(<App />, pageElement)

if (module.hot) {
  module.hot.accept()
}
