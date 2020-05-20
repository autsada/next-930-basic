import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function protect() {
  const [me, setMe] = useState(null)

  const router = useRouter()

  // console.log(router)
  useEffect(() => {
    let isMounted = true
    const getUser = async () => {
      const response = await fetch(`http://localhost:3000/api/users/6`)

      if (!response.ok) {
        router.replace('/')
      } else {
        const data = await response.json()

        if (data) {
          if (isMounted) {
            setMe(data)
          }
        } else {
          router.push('/')
        }
      }
    }

    getUser()

    console.log(router)

    return () => {
      isMounted = false
    }
  }, [])

  return <div>{!me ? <p>Loading...</p> : <p>{me.name}'s dashboard</p>}</div>
}

export default protect
