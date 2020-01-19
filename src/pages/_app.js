import React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import GlobalStyle from './global.styles'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Simple NextJS Quick Start</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}
