import React from 'react'
import '../components/mystyles.css'
import {Link} from 'react-router-dom'

function AsideMenu() {
  return (
    <div>
        <aside>
            <Link to='/stringflowers'>
                <div>
                    <h2>Strings</h2>
                </div>
            </Link>
            <Link to='/poojaflowers'>
                <div>
                    <h2>Pooja Flowers</h2>
                </div>
            </Link>
            <Link to='/rosegarlands'>
                <div>
                    <h2>Rose Garlands</h2>
                </div>
            </Link>
            <Link to='/veni'>
                <div>
                    <h2>Veni</h2>
                </div>
            </Link>
        </aside>
    </div>
  )
}

export default AsideMenu