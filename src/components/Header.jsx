import React from 'react'
import '../components/mystyles.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-div'>
        <Link to='/'>
        <div><h1 className='header-title-div'>Davam Flowers</h1></div>
        </Link>
        <div><h3 className='contact-title-div'><a href='tel:551-689-0587'>Contact : <p className='phonenumber'>551-689-0587</p></a></h3></div>

    </div>
  )
}

export default Header