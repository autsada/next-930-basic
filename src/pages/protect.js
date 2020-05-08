import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function protect() {
  const [me, setMe] = useState(null)

  const router = useRouter()

  useEffect(() => {
    let isMounted = true
    const getUser = async () => {
      const response = await fetch(`http://localhost:3000/api/users/6`)

      if (!response.ok) {
        router.push('/')
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

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div style={{ width: '60%', margin: '0 auto' }}>
      {!me ? <p>Loading...</p> : <p>{me.name}'s dashboard</p>}
    </div>
  )
}

export default protect
