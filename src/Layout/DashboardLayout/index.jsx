import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardNavbar } from '../../components';
import AuthContext from '../../Context/AuthContext';
import { Page403 } from '../../pages';
import './style.css'

export default function DashboardLayout() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <div className="App">
          <DashboardNavbar />
          <Outlet />
        </div>
      ) : (
        <div className="App">
          <Page403 />
        </div>
      )}
    </>
  )
}
