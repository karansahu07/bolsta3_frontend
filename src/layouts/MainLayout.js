import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {

  
  return (
    <div className='container-fluid d-flex p-0' style={{ height: "100vh" }}>
        <div className='left-div ' style={{ width: "240px" }}>
        <Sidebar />
        </div>
        <div className='right-div' style={{ flexGrow : '1' }}>
            <Outlet />
       </div>
    </div>
  )
}

export default MainLayout