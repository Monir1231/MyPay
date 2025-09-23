import React from 'react'
import CopmpanyLogo from '@/assiets/svgs/CopmpanyLogo'
import { Logo } from '@/configs/constant'
import LeftQuotesIcon from '@/assiets/svgs/LeftQuotesIcon'
import RightQuotesIcon from '@/assiets/svgs/RightQuotesIcon'

const Clients = () => {
  return (
    <div className='py-10'>
      <div className='text-center'>
        <p className=' text-5xl text-center text-[#F7F7F7] font-medium font-poppeins'>
            Nos clients
        </p>
      </div>
    <div className=' flex justify-center'>
          <CopmpanyLogo/>
    </div>
    <div className='md:w-[75%] m-auto'>
       <div className=' w-full p-6 mt-10 bg-[#171823] rounded-xl shadow-xl'>
        <div className=' w-full flex justify-center'>
         <Logo/>
        </div>
        <div className=' md:px-8 my-4 px-4 flex justify-between'>
          <LeftQuotesIcon/>
           <RightQuotesIcon/>
        </div>
        <div className='md:px-10 px-4'>
        <p className=' text-xl font-poppeins font-medium text-[#FFFFFF] text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        </div>
        <div className=' flex my-6 gap-3 justify-center w-full'>
          <img src={"https://avatar.iran.liara.run/public"}  width={50} height={50}/>
           <div>
          <h5 className='text-xl text-[#FFFFFF] font-poppeins'>Herman Jensen</h5>
          <p className='text-sm text-[#FFFFFF] font-poppeins'>CEO MyPay</p>
        </div>
        </div>
       
       </div>
    </div>
    </div>
  )
}

export default Clients