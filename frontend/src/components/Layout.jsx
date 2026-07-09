import React from 'react'
import { Outlet, Link } from "react-router-dom";

import Header from './Header'
function Layout() {
  return (
    <div>
      <Header />
      <div className='container mt-2 border-2 card hv-100 pb-5 pt-2 shadow-lg'>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
