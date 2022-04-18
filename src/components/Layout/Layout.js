import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarContainer } from 'components/Navbar/Navbar'

export const Layout = () => {
  return (
    <div>
         <NavbarContainer />
         <Outlet />
    </div>
  )
}

