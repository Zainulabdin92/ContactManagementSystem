import React from 'react'
import Navbar from '../Components/Navbar'
import '../assets/css/dashboard.css'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'


function Dashboard() {
  return (
    <>
    <Navbar/>
    <div className="dashboard">
        <div className="sidebar-container">
            <Sidebar/>
        </div>
        <div className="contact-container">
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Dashboard