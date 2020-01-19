import React from 'react'
import NextApp from 'next/app'
import GlobalStyle from './global.styles'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}
