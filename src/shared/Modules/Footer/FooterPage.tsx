import { Logo } from '@/configs/constant'
import Link from 'next/link'
import React from 'react'
import { FaInstagram,FaFacebook , FaTwitter,FaLinkedin  } from "react-icons/fa";

const FooterPage = () => {
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
    <footer className=' bg-black text-white py-10'>
      <div className=' container px-6 md:px-10 lg:px-16 m-auto'>
        <div className=' flex flex-col md:flex-row justify-between items-start'>
          <div className=' w-full flex flex-col items-center justify-center md:block md:w-1/3  mb-6 md:mb-0'>
          <Logo/>
         <p className='pt-8 text-gray-400 text-lg  '>A new way to make the payments easy, reliable and secure.</p>

          </div>
          <div className=' md:flex m-auto  md:m-0  flex-wrap md:space-x-16 space-y-6 md:space-y-0'>
            {footerLinks.map(({title,items})=>(
              <div key={title}>
                <h3 className='text-gray-300 font-semibold mb-3'>{title}</h3>
                <ul className=' text-gray-400 text-lg space-y-2'>
                  {items.map((item)=>(
                 <li key={item}>
                  <Link href="#" className=' hover:text-white'>
                  {item}</Link>
                 </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className=' flex flex-col md:flex-row  items-center justify-between  border-t border-gray-800 mt-10 pt-6'>
          <p className=' text-gray-500 text-sm'> Copyright 2025 EvoFin. All Rights Reserved.</p>
 
        <div className=' flex  space-x-5  mt-4 md:mt-0'>
        {[ FaInstagram,FaFacebook , FaTwitter,FaLinkedin].map((Icon:any,i:number)=>(
          <Link key={i} href={"#"} className=' text-gray-400 hover:text-white text-xl'>
            <Icon/>
          </Link>
        ))}
        </div>
        </div>
       
          
      </div>

    </footer>
  )
}

export default FooterPage