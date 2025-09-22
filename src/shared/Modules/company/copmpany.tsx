import React from 'react'
import CopmpanyLogo from '@/assiets/svgs/CopmpanyLogo'



const Copmpany = () => {
  return (
    <>
    <div className=' mt-62' >
        <div className=' text-center'>
            <p className=' text-3xl text-[#DCDCDC] font-poppeins font-semibold'>Nos supports de paiement</p>
        </div>
       <div className='flex items-center justify-center'>
        <CopmpanyLogo/>
       </div>
    </div>
    </>
  )
}

export default Copmpany