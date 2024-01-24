import React from 'react'
import '../Pooja/pooja.css'
import Header from '../Header'
import AsideMenu from '../AsideMenu'
import { poojagarlands } from '../../models/Stringflowers'

function PoojaFlowers() {
  return (
    <div>
        <Header/>
        <div className='pooja-page-div'>
            <div>
                <AsideMenu/>
            </div>
            
            <div className='pooja-pic-div'>
            
                {
                    poojagarlands.map((data) => {
                        return(
                            <div className='flower-display-div'>
                               <div className='pooja-inner'> 
                                    
                                    <div>
                                        <img className="pooja-images" src={data.image} alt=""/>
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

export default PoojaFlowers