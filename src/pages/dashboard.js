import React from 'react'

function dashboard({ me }) {
  return <div style={{ width: '60%', margin: '0 auto' }}>{me}</div>
}

export const getServerSideProps = async ({ req, res }) => {
  if (!req.headers.cookie) {
    res.writeHead(302, { Location: '/' })
    res.end()
  } else {
    // Query user info from data
    return {
      props: { me: 'Your personal dashboard' },
    }
  }
}

export default dashboard
