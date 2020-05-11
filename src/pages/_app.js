import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: 'blue',
  },
}

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
