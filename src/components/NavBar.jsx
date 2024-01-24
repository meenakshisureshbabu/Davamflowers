import React from 'react'
import '../components/mystyles.css'
import Header from './Header'
import AsideMenu from './AsideMenu'

function NavBar() {
  return (
    <div className='nav-div'>
        <Header/>
        <AsideMenu/>
    </div>
  )
}

export default NavBar