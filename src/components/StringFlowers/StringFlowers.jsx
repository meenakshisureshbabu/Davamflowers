import React from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import AsideMenu from '../AsideMenu'
import '../StringFlowers/stringflowers.css'
import {stringflowers} from '../../models/Stringflowers'


function StringFlowers() {
  return (
    <div>
        <Header/>
        <div className='string-page-div'>
            <div>
                <AsideMenu/>
            </div>
            
            <div className='string-pic-div'>
            
                {
                    stringflowers.map((data) => {
                        return(
                            <div className='flower-display-div'>
                               <div className='flower-inner'> 
                                    
                                    <div>
                                        <img className="flower-images" src={data.image} alt=""/>
                                    </div>
                                    <div className='name'>
                                        <p>{data.name}</p>
                                    </div>
                                    <div className='rate'>
                                        <h3>{data.rate}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default StringFlowers