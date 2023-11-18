import React from 'react'
import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="" alt="" />
        <span>Smartex</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className='icon'/>
        <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon' />
        <div className="user">
          <img src="https://th.bing.com/th?id=OIP.EHx2RNEj9_cR4s2-vFKDvwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
          <span>Akram</span>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Navbar
