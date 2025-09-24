"use client";
import React from "react";
import BackArrow from "@/assiets/svgs/BackArrow";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthCharacter from "@/assiets/svgs/AuthCharacter";
import GoogleIcon from "@/assiets/svgs/GoogleIcon";
import FacebookIcon from "@/assiets/svgs/FacebookIcon";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmiter: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full relative mb-10  px-2 md:px-10 pt-6  md:flex bg-hero-gradiant ">
      <div className=" relative z-10 w-[90%] md:w-[80%] mx-auto">
        <div className=" flex justify-between items-center">
          <Link href={"/"}>
            <BackArrow />
          </Link>
        </div>
        {/* sing form  */}
        <div className=" w-full md:flex gap-2 min-h-[60vh] p-3 shadow mt-10  bg-[#F3F3F3] rounded-2xl">
          {/* left  */}
          <div className="md:w-[36%] bg-from-gradient relative  rounded-2xl">
            <div className="w-ful h-full flex items-center justify-center z-10">
              <AuthCharacter />
            </div>
          </div>

          {/* right  */}
          <div className=" md:w-[64%] z-10 pt-[4%]">
            <form
              onSubmit={handleSubmit(onSubmiter)}
              className=" md:w-[80%] lg:w-[70%] w-[90%] m-auto"
            >
              <div>
                <h1 className=" font-Jakarta-Sans font-semibold text-3xl text-[#2A3547]">
                  Bienvenue sur MyPay
                </h1>
                <p className=" font-Jakarta-Sans text-sm text-[#2A3547] py-2">
                  Votre admin panel
                </p>
                <div className="my-6 flex gap-4 items-center">
                  <GoogleIcon />
                  <FacebookIcon />
                </div>
                <div className=" flex items-center my-5 font-Jakarta-Sans text-sm text-[#5A6A85]">
                  <div className=" flex-1 border-t border-[#EAEFF4]"></div>
                  <span className="px-3">ou </span>
                  <div className=" flex-1 border-t border-[#EAEFF4]"></div>
                </div>
                <div className="my-4">
                  <label className=" font-poppeins text-[12px] text-[#2A3547] font-semibold">
                 Nom d’utilisateur
                  </label>

                  <input type="text" 
                  {...register("username",{
                    required:"must be required username"
                  })} className=' w-full px-2 text-lg font-poppeins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border rounded-md border-[#EAEFF4] py-2' />{errors.username &&(
                  <p className=' text-red-500  text-sm pt-1'>
                    {errors.username.message}
                   </p>
                  )}
                </div>

                  <div className="my-4">
                  <label className=" font-poppeins text-[12px] text-[#2A3547] font-semibold">
                   Email
                  </label>

                  <input type="email" 
                  {...register("email",{
                    required:"must be required username"
                  })} className=' w-full px-2 text-lg font-poppeins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border rounded-md border-[#EAEFF4] py-2' />{errors.email &&(
                  <p className=' text-red-500  text-sm pt-1'>
                    {errors.email.message}
                   </p>
                  )}
                </div>

                <div className="my-4">
                  <label className=" font-poppeins text-[12px] text-[#2A3547] font-semibold">
                   Mot de passe
                  </label>

                  <input type="password" 
                  {...register("password",{
                    required:"must be required username",
                    minLength:{
                        value:6,
                        message:"gave 6 caracter"
                    }
                  })} className=' w-full px-2 text-lg font-poppeins font-medium text-[#333333] outline-none placeholder:text-[#333333] bg-transparent border rounded-md border-[#EAEFF4] py-2' />{errors.password &&(
                  <p className=' text-red-500  text-sm pt-1'>
                    {errors.password.message}
                   </p>
                  )}
                </div>

                <div>
                    <button type="submit" className="w-full rounded-lg bg-[#5D87FF] h-[55px] my-10">
                        <span className="font-Jakarta-Sans font-semibold text-base text-[#FFFFFF]">Créer un compte</span>
                    </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
