import React, { FunctionComponent, ReactNode } from 'react'

import Nav from './nav/Nav'

interface children{
    children:ReactNode
}

const Layout:FunctionComponent<children> = ({children}) => {
  return (
    <>
         <Nav/>
        <main>{children}</main>
        <footer></footer>
    </>
  )
}

export default Layout