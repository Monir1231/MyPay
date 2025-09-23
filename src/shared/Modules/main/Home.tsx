

import React from 'react'
import HeroPage from '../hero/Hero'
import Copmpany from '../company/copmpany'
import Pricingpage from '../pricing/Pricing'
import Api from '../API/ApiPage'
import Clients from '../Clients/Clients'
import Information from '../Information/Information'
import ShadowSvgImg from '@/assiets/svgs/shadowSvg'

import { title } from 'process'

const Homepage = () => {
  const footerLinks =[
    {
      title:"Usefull Links",
      items:["Content","How it Works","Create","Explore","Terms & Services"]

    },
    {
      title:"Community",
      items:["Help Center","Partners","Suggestions","Blog","Newsletters"]

    },
    {
      title:"Partner",
      items:["Our Partner","Become a Partner"]

    }
  ]
  return (
    <div className=' overflow-hidden'>
    <HeroPage/>
    <Copmpany/>
    <Pricingpage/>
    <Api/>
    <Clients/>
    <div className=' relative'>
      <div className=' absolute left-[-10%] top-[-50%]'>
      <ShadowSvgImg/>
      </div>
       <Information/>

       <div className=' absolute right-[-5%] rotate-180 top-[-0%]'>
      <ShadowSvgImg/>
      </div>

    </div>
   

   
    </div>
  )
}

export default Homepage