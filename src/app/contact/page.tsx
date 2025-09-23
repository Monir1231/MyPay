'use client'

import Link from 'next/link'
import React from 'react'
import BackArrow from '@/assiets/svgs/BackArrow'
import CallIcon from '@/assiets/svgs/CallIcon'
import LocationIcon from '@/assiets/svgs/LocationIcon'
import EmailIcon from '@/assiets/svgs/EmailIcon'
import { SubmitHandler,useForm } from 'react-hook-form'
import Arrow from '@/assiets/svgs/Arrow'

type FromData ={
  firstName:string;
  lastName:string;
  email:string;
  message:string;
}

const Page = () => {

   const {
     register,
     handleSubmit,
     formState:{errors}


   } = useForm<FormData>();

   const onSubmiter:SubmitHandler<FromData> = (data) =>{
    console.log(data)
   }
  
  
  
  return (
    <div
    className='w-full  relative mb-10  px-2 md:px-10 pt-24 md:py-28 md:flex bg-hero-gradiant '>
      <div className=' relative z-10 w-[90%] md:w-[80%] mx-auto '>
        <div className=' flex justify-between items-center'>
          <Link href={"/"}>
         <BackArrow/>
          </Link>

          <div>
            <h3 className= ' text-2xl md:text-4xl lg:text-5xl text-white font-poppeins font-medium'>Contactez-nous</h3>
          </div>

          <div></div>

        </div>
        {/* contact from  */}
        <div className='  w-full md:flex gap-2 min-h-[60vh] p-3 shadow mt-10  bg-[#F3F3F3] rounded-2xl'>
        <div className='md:w-[36%] bg-from-gradient relative h-full min-h-[58vh] rounded-2xl'>
          <div className=' relative p-3 md:p-8 !py-14 z-10'>
            <h3 className=' text-2xl font-poppeins'>
              Informations
            </h3>
            <p className=' text-[12px] font-poppeins text-[#BCBCBC] py-2'>Veuillez trouver ci-dessous nos informations de contact</p>

            <div className=' w-full mt-5 py-5  flex items-center gap-1'>
              <CallIcon/>
              <div>
                <p className='text-sm font-poppeins text-[#F7F7F7]'>+33 017 797 176</p>
                <p className='text-sm font-poppeins text-[#F7F7F7]'>+33 017 797 176</p>
              </div>
            </div>

            <div className=' w-full mt-5 py-5  flex items-center gap-1'>
            <EmailIcon/>
              <div>
                <p className='text-sm font-poppeins text-[#F7F7F7]'>Support@mypay.com</p>
               
              </div>
            </div>

              <div className=' w-full mt-5 py-5  flex items-center gap-1'>
             <LocationIcon/>
              <div>
                <p className='text-sm font-poppeins text-[#F7F7F7]'>Paris, France</p>
               
              </div>
            </div>


          </div>
        </div>
        {/* right  */}
        <div className=' md:w-[64%] z-10 pt-[4%]'>
             <form onSubmit={handleSubmit(onSubmiter)} className=' md:w-[90%] m-auto'>
              <div className=' grid grid-cols-2 gap-8'>
               <div>
                 <label className=' font-poppeins text-[12px] text-[#B0B0B0] font-medium'>
                  Votre nom
                 </label>
                 <input type='text' {...register("firstName",{
                  required:" Votre nom error",
                 })} placeholder='John ' className=' w-full font-poppeins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border-b border-[#B0B0B0] py-2'/>{errors.firstName &&(
                  <p className=' text-red-500  text-sm pt-1'>
                    {errors.firstName.message}
                  </p>
                 )}
               </div>
                <div>
                 <label className=' font-poppeins text-[12px] text-[#B0B0B0] font-medium'>
                Votre nom
                 </label>
                 <input type='text' {...register("lastName",{
                  required:" Votre nom error",
                 })} placeholder='  Doe' className=' w-full font-poppeins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border-b border-[#B0B0B0] py-2'/>{errors.lastName &&(
                  <p className=' text-red-500  text-sm pt-1'>
                    {errors.lastName.message}
                  </p>
                 )}
               </div>
              </div>


                 <div className='my-4'>
                   <div>
                 <label className=' font-poppeins text-[12px] text-[#B0B0B0] font-medium'>
                 Votre Email
                 </label>
                 <input type='text' {...register("email",{
                  required:" Votre nom error",
                 })} placeholder='John@doe.com' className=' w-[51%] font-poppeins block font-xl text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border-b border-[#B0B0B0] py-2'/>{errors.email &&(
                  <p className=' text-red-500  text-sm pt-1'>
                    {errors.email.message}
                  </p>
                 )}
               </div>


                 </div>

                 <div className='my-6'>
                  <label className=' font-poppeins text-[12px] text-[#B0B0B0] font-medium'>
                Message
                 </label>

                 <textarea {...register("message",{required:"Message is requred"})} rows={4} cols={8} placeholder='Ecrivez votre message' className=' w-full font-poppeins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border-b border-[#B0B0B0] py-2'></textarea> {errors.message &&(
                  <p className=' text-red-500  text-sm pt-1'>
                    {errors.email?.message}
                  </p>
                 )}

                 </div>
                  <button className="w-[219px] h-[69px] rounded-full  border-2 border-[#42A3FF] mb-3 flex items-center justify-center gap-2 ">
         <span className=" text-xl  font-bold bg-gradient-to-r from-[#4B86FC] to-[#75F2F6]  bg-clip-text text-transparent">ENVOYER</span>
         <Arrow/>
        </button>

                 
             </form>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Page