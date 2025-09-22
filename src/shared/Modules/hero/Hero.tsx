import React from "react";
import "./custom.css";
import Herocharacter from "@/assiets/svgs/Herocharacter";
import Herohandcharacter from "@/assiets/svgs/Herohandcharacter";
import Arrow from "@/assiets/svgs/Arrow";

const HeroPage = () => {
  return (
    <div className="w-full px-2 md:px-10 h-[90vh] md:flex items-center bg-hero-gradiant relative ">
      {/* left  */}
      <div className="md:w-[50%] w-full relative z-10 md:pt-52 pt-36 ">
        <h1 className="lg:text-5xl md:text-4xl text-[30px] font-poppeins font-[700] md:leading-[70px] md:max-w-[711px]">
          <span className=" text-[#4B86FC] "> MyPay</span> Plateforme de gestion
          de paiements en ligne pour business High-Risk.
        </h1>

        <p className=" text-sm w-full md:w-[75%] font-poppeins text-[#E1E1E1] font-medium my-6">
          Business High-Risk pris en charge : Servitia Financia et Investitiones
          , Mercator es titulorum Pecuniae mutuatae ad diem Mercatores cryptae
          valutarum. Servitia Financia et Investitiones , Mercator es titulorum
          Pecuniae mutuatae ad diem Mercatores cryptae valutarum.
        </p>
        <button className="w-[219px] h-[69px] rounded-full  border-2 border-[#42A3FF] mb-3 flex items-center justify-center gap-2 ">
         <span className=" text-xl text-[#75F2F6]">COMMENCER</span>
         <Arrow/>
        </button>
      </div>
        {/* right */}
        <div  className=" md:w-[50%] w-full items-center justify-center relative z-10 md:pt-52 pt-36  ">
         
          
            <Herocharacter/>
       
           <div className=" absolute right-[-5%] top-[70%]">
            <Herohandcharacter/>
          </div>
        </div>
    </div>
  );
};

export default HeroPage;
