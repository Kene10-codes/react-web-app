import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarContainer } from 'components/Navbar/Navbar'
import { SidebarContainer } from 'components/Sidebar/Sidebar'


export const Layout = () => {
  return (
    <div>
      <NavbarContainer />
        <div className='flex flex-row'>
         <SidebarContainer />
         <Outlet  />
        </div> 
    </div>
  )
}

