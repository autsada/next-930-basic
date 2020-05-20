// import { useEffect } from 'react'
import Router from 'next/router'

export default function Home() {
  // useEffect(() => {
  //   if (Router.router) {
  //     console.log(Router.router.query)
  //   }
  // }, [])

  Router.events.on('routeChangeStart', () => console.log('Start'))
  Router.events.on('routeChangeComplete', () => console.log('Complete'))

  return (
    <>
      <h2>Getting Started</h2>

      <p>Welcome to the Next.js documentation!</p>

      <p>
        If you're new to Next.js we recommend that you start with the learn
        course.
      </p>

      <p>
        The interactive course with quizzes will guide you through everything
        you need to know to use Next.js.
      </p>
    </>
  )
}
