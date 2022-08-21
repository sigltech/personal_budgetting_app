import React, { useContext } from 'react'
import AuthContext from "../../Context/AuthContext";
import Logo from '../../assets/imgs/budgyLogo.png';


export default function DashboardNavbar() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className='navigation-container'>
        <nav className='dashboard-nav'>
          <img className='budgy-logo' src={Logo} alt="budgy logo" />
          <div className="nav-links">
            <a href="/dashboard">dashboard</a>
            <a href="/dashboard">Account</a>
            <a onClick={logoutUser}>Logout</a>
          </div>
        </nav>
      </div>
  )
}
