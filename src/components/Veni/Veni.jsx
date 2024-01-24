import React from 'react'
import '../Veni/veni.css'
import Header from '../Header'
import AsideMenu from '../AsideMenu'
import { veni } from '../../models/Stringflowers'

function Veni() {
  return (
    <div>
        <Header/>
        <div className='veni-page-div'>
            <div>
                <AsideMenu/>
            </div>
            
            <div className='veni-pic-div'>
            
                {
                    veni.map((data) => {
                        return(
                            <div className='flower-display-div'>
                               <div className='veni-inner'> 
                                    
                                    <div>
                                        <img className="veni-images" src={data.image} alt=""/>
                                    </div>
                                    <div>
                                        <p>{data.name}</p>
                                    </div>
                                    <div>
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

export default Veni