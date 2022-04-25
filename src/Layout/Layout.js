import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarContainer } from 'components/Navbar/Navbar'
import { SidebarContainer } from 'components/Sidebar/Sidebar'


export const Layout = () => {
  return (
    <div className='flex flex-col'>  
      <NavbarContainer />
        <div  className='flex'>
         <SidebarContainer />
         <Outlet  />
        </div> 
    </div>
  )
}

