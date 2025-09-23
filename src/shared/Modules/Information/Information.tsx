'use client'

import React from 'react'
import Input from '@/shared/components/Input'
import Arrow from '@/assiets/svgs/Arrow'


const Information = () => {
  return (
    <div className=' relative z-20 mt-10 pb-20 flex justify-center items-center px-6'>
        <div className=' absolute top-0 left-0 opacity-[.7]'>
         <img src="worldimg.png"/>
        </div>
        <div className=' w-full max-w-4xl p-8 rounded-lg shadow-lg'>
         <h2 className=' text-5xl text-center font-poppeins font-medium text-white mb-8'>Demande d’information</h2>
        {/* info from  */}
        <form  className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
       <Input label='NOM'  placeholder='Votre nom'/>
        <Input label='Prenom'  placeholder='Votre prénom'/>
        <Input label='Email'  placeholder='email@example.com' type='email'/>
          <Input label='Nom de l’entreprise'  placeholder='Le nom de votre entreprise' type='text'/>
           <Input label='Type de votre business'  placeholder='type' type='' />
            <Input label='Siret'  placeholder='45637XXXXXXX' type='number' />
            <Input label='Chiffre d’affaire'  placeholder='1.0000.000' type='number' />
            <Input label='Pays'  placeholder='France' type='text' />
            <Input label='Numéro de téléphone'  placeholder='(+33) 675 763 445' type='number' />

            <button onSubmit={(e:any)=> e.preventDefault()} className="w-[219px] h-[69px] rounded-full  border-2 border-[#42A3FF] mt-5 flex items-center justify-center gap-3">
         <span className=" text-2xl text-[#75F2F6]">Envoyer</span>
         <Arrow/>
        </button>

          
      
        
        </form>
        </div>
        
    </div>
  )
}

export default Information