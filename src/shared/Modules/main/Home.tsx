import React from 'react'
import HeroPage from '../hero/Hero'
import Copmpany from '../company/copmpany'
import Pricingpage from '../pricing/Pricing'
import Api from '../API/ApiPage'

const Homepage = () => {
  return (
    <div className=' overflow-x-hidden'>
    <HeroPage/>
    <Copmpany/>
    <Pricingpage/>
    <Api/>
    

    
   
   
    </div>
  )
}

export default Homepage