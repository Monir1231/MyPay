import React from 'react'
import Arrow from '@/assiets/svgs/Arrow'
import APIsupportPlatforms from '@/assiets/svgs/APIsupportPlatforms'

const Api = () => {
  return (
    <div className='w-[90%] md:py-10 m-auto flex gap-12'>
        <div className=' md:w-[50%] w-full '>
         <h3 className=' text-[#E1E1E1] text-[40px] w-[613px] md:leading-[50px] font-medium font-poppeins'>Nous disposons d’une api solide fait pour s’intégrer au mieux à votre environnement.</h3>
          <button className="w-[219px] h-[69px] rounded-full  border-2 border-[#42A3FF] mt-6 mb-3 flex items-center justify-center gap-2 ">
         <span className=" text-[28px] text-[#75F2F6]">VOIR l’API</span>
         <Arrow/>
        </button>
        </div>
        <div className=' md:w-[50%] w-full flex justify-center'>
           <APIsupportPlatforms/>
        </div>

    </div>
  )
}

export default Api  