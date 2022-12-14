import React from 'react'
// Utilizing an Outlet because it allows nested UI from a parent route to show up when child routes are rendered. If the parent route matches exactly, it will render a child index route or nothing at all 
// https://reactrouter.com/en/main/components/outlet
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout