import React from 'react'
import '../components/mystyles.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-div'>
        <Link to='/' style={{textDecoration:"none"}}>
        <div><h1 className='header-title-div'>Davam Garlands</h1></div>
        </Link>
        <div><h3 className='contact-title-div'><a href='https://wa.me/15516890587?text=Hi!I would like to know more about the garlands!!'>WhatsApp me @ : <p className='phonenumber'>551-689-0587</p></a></h3></div>

    </div>
  )
}

export default Header