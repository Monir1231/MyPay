import Paymentgetway from "@/assiets/svgs/Paymentgetway";
import React from "react";
import RightMarkIcon from "@/assiets/svgs/RightMarkIcon";

const Pricingpage = () => {
  const Pricingdata = [
    "Transactions e-commerce",
    "Services basés sur l'abonnement",
    "Dons en ligne pour des associations à but non lucratif",
    "Paiements de réservations et de réservations",
    "Vente de produits numériques",
  ];

  const Pricingdata2 = [
    "Transactions Sécurisées",
    "Support Multi-Devises",
    "Protection contre la Fraude",
    "Paiement Personnalisable",
    "Interface Adaptée aux Mobiles",
    "Transactions Sécurisées",
    "Support Multi-Devises",
    "Protection contre la Fraude",
    "Paiement Personnalisable",
    "Interface Adaptée aux Mobiles",
  ];
  return (
    <div className=" py-10 text-center">
      <h1 className=" text-5xl  font-poppeins font-medium text-white">
        Choisissez votre pack & Abonnez-vous
      </h1>
      <p className=" text-lg font-poppeins font-medium py-4 text-[#E1E1E1]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      {/* pricing box  */}
      <div className=" md:w-[95%]  flex  my-6 m-auto">
        <div className="w-[55%] h-max relative z-40 bg-white/20 rounded-xl bg-clip-padding backdrop-blur-[100px] border-2 border-[#4b85FC] before:absolute before:inset-0 before:rounded-xl before: bg-gradient-to-r before:from-[#4b86coe] before:to-[#75f2f631] before:-z-10">
          <div className="p-6">
            <div className="w-full text-center">
              <button className=" bg-gradient-to-r h-[54px] w-[173px] rounded-[30px] from-[#4b86fc] text-lg font-Jakarta-Sans font-[600] to-[#75f2f6] text-[#000]">
                STANDARD
              </button>
            </div>
            <div className="w-full flex  justify-center my-5">
              <Paymentgetway />
            </div>
            <h3 className=" text-center bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] bg-clip-text text-transparent font-bold text-5xl font-poppeins py-3">
              5% + 0.25 €
            </h3>
            <div className="w-[90%] m-auto">
              <span className=" text-start font-poppeins block pt-4 text-white font-bold text-lg">
                Business Acceptés :
              </span>
            </div>
            {Pricingdata.map((i: string, index: number) => (
              <div key={index} className="py-4 flex items-center gap-2">
                <RightMarkIcon />
                <span className=" font-poppeins font-medium text-lg text-[#F7F7F7]">
                  {i}
                </span>
              </div>
            ))}
          </div>
          <div className=" w-full bg-[#07111E] h-[88px] cursor-pointer flex items-center justify-center rounded-xl">
            <span className=" text-white text-[28px] font-poppeins font-medium">
              Démarrer
            </span>
          </div>
        </div>
        {/* right part  */}
        <div className="w-[45%] ml-[-2] mt-[-1.5%] bg-hero-gradiant relative rounded-xl">
        <div className="p-4 w-full relative z-20">
        <div className="w-full text-center">
          <button className="bg-gradient-to-r h-[54px] w-[173px] rounded-[30px] from-[#4B86FC] text-lg font-Jakarta-Sans font-[600] to-[#75F2F6] text-[#000]">
            SUR MESURE
          </button>
          <h3 className="py-5 bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] font-poppeins font-bold text-[19px] bg-clip-text  text-transparent">
            Dix fonctionnalités essentielles
          </h3>
        </div>
        <div className="md:pl-10">
          {Pricingdata2.map((i:string,index:number)=>(
            <div key={index} className="py-3 flex items-center gap-2">
              <RightMarkIcon/>
              <span className="font-poppeins font-medium text-lg text-[#F7F7F7]">
                {i}
              </span>
            </div>
          ))}

        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Pricingpage;
