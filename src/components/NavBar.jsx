import React from 'react'
import '../components/mystyles.css'
import Header from './Header'
import AsideMenu from './AsideMenu'

function NavBar() {
  return (
    <div className='nav-div'>
        <Header/>
        <div className='nav-inner-div'>
            <div>
                <AsideMenu/>
            </div>
            
        </div>
    </div>
  )
}

export default NavBar