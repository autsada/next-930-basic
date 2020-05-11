import React from 'react'
import fetch from 'isomorphic-unfetch'

function dashboard({ me }) {
  return (
    <div style={{ width: '60%', margin: '0 auto' }}>
      {!me ? <p>Loading...</p> : <p>{me.name}'s dashboard</p>}
    </div>
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

  // if (!req.headers.cookie) {
  //   res.writeHead(302, { Location: '/' })
  //   res.end()
  // } else {
  //   // Query user info from data
  //   return {
  //     props: { me: 'Your personal dashboard' },
  //   }
  // }

  return {
    props: { me: user || null },
  }
}

export default dashboard
