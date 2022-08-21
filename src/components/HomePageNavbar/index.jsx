import React, {useContext, useState} from 'react'
import AuthContext from '../../Context/AuthContext';
import Logo from '../../assets/imgs/budgyLogo.png';


export default function HomePageNavbar() {
  const { user, logoutUser } = useContext(AuthContext);
  const [active, setActive] = useState(false);

  const activeClass = active ? 'active' : '';

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className='navigation-container'>
        <nav className='homepage-nav'>
            <img className='budgy-logo' src={Logo} alt="budgy logo" />
            <div>
                {user ? (
                    <>
                      <a href='/' onClick={handleClick}>Home</a>
                      <a href='/Dashboard' onClick={handleClick}>My Dashboard</a>
                      <a href='/login' onClick={handleClick}>Login</a>
                      <a href='/register' onClick={handleClick}>Sign Up</a>
                    </>
                  ) : (
                    <>
                      <a href='/' onClick={handleClick}>Home</a>
                      {/* <a href='/Dashboard' onClick={handleClick}>My Dashboard</a> */}
                      <a href='/login' onClick={handleClick}>Login</a>
                      <a href='/register' onClick={handleClick}>Sign Up</a>
                    </>
                  )
                }
            </div>
        </nav>
    </div>
  )
}
