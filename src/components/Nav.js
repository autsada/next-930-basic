import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavDiv = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`

function Nav() {
  return (
    <NavDiv>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/blogs'>
        <a>Blogs</a>
      </Link>
      <Link href='/dashboard'>
        <a>Dashboard</a>
      </Link>
      <Link href='/protect'>
        <a>Protect</a>
      </Link>
    </NavDiv>
  )
}

export default Nav
