import React from 'react'
import {rosegarlands} from '../../models/Stringflowers.js'
import '../Rose/rose.css'
import Header from '../Header.jsx'
import AsideMenu from '../AsideMenu.jsx'

function RoseGarlands() {
  return (
    <div>
        <Header/>
        <div className='rose-page-div'>
            <div>
                <AsideMenu/>
            </div>
            
            <div className='rose-pic-div'>
            
                {
                    rosegarlands.map((data) => {
                        return(
                            <div className='flower-display-div'>
                               <div className='rose-inner'> 
                                    
                                    <div>
                                        <img className="flower-images" src={data.image} alt=""/>
                                    </div>
                                    <div>
                                        <p>{data.name}</p>
                                    </div>
                                    <div>
                                       <h3> {data.rate}</h3>
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

export default RoseGarlands