import React from 'react'

interface InputPoops {
    label:string;
    placeholder:string;
    type?:string;
}

const Input = ({label,placeholder,type= "text"}:InputPoops) => {
  return (
    <div className='flex flex-col'>
        <label className=' text-white text-lg font-DM-Sans font-bold mb-2 '>{label}</label> 
        <input type={type} placeholder={placeholder} className=' w-full h-[55px] font-DmSans text-lg gradient-input text-white px-4 py-3 rounded-md ]'/>

    </div>
  )
}

export default  Input