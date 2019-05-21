import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import Main from './components/main'
import GlobalStyle from './global.styles'

const App = ({ Component }) => (
  <>
    <GlobalStyle />
    <Component />
  </>
)

App.propTypes = {
  Component: PropTypes.func.isRequired
}

render(<App Component={Main} />, document.getElementById('main'))

if (module.hot) {
  module.hot.accept('./components/main', () => {
    const NextApp = require('./components/main').default
    render(<App Component={NextApp} />, document.getElementById('main'))
  })
}
