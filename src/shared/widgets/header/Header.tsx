import { Logo } from '@/configs/constant'
import Link from 'next/link'
import React from 'react'
import LinkIcon from '@/assiets/icon/icon-link'

const Header = () => {
  return (
    <div className='w-full flex p-6 items-center absolute top-0 left-0 justify-between z-10 mx-auto'>
      <Logo/>
     <Link href={"/"} className=' flex items-center gap-[6px]'>
     <div>
       <LinkIcon/>
     </div>
     <div>
      <h4 className=' text-[22px] font-medium text-[#FFFFFF] '>Espace client</h4>
     </div>
     </Link>
    </div>
    
  )
}

export default Header