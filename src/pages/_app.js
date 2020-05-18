import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/Layout'

const theme = {
  colors: {
    primary: 'teal',
    secondary: 'blue',
  },
}

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  let user
  const response = await fetch(`http://localhost:3000/api/users/4`)

  if (!response.ok) {
    res.writeHead(302, { Location: '/' })
    res.end()
  } else {
    const data = await response.json()

    if (data) {
      user = data
    } else {
      res.writeHead(302, { Location: '/' })
      res.end()
    }
  }

  return {
    props: { me: user || null },
  }
}

export default App
