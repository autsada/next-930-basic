import React, { useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

function dashboard({ me }) {
  useEffect(() => {
    console.log('Public Key browser -->', process.env.NEXT_PUBLIC_MY_PUBLIC_KEY)
    console.log('Secrety Key browser -->', process.env.MY_SECRET_KEY)
  }, [])

  return <div>{!me ? <p>Loading...</p> : <p>{me.name}'s dashboard</p>}</div>
}

export default dashboard

export const getServerSideProps = async ({ req, res }) => {
  let user
  const response = await fetch(`http://localhost:3000/api/users/4`)

  console.log('Public Key server -->', process.env.NEXT_PUBLIC_MY_PUBLIC_KEY)
  console.log('Secrety Key server -->', process.env.MY_SECRET_KEY)

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
