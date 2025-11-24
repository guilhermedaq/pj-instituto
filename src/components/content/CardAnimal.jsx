import fundoOnca from "../../assets/Onça-pintada.avif"
import oncaIcon from "../../assets/oncaIcon.jpg"

import { useState } from "react";
import { animais } from "./DataAnimal";

function CardAnimal (){
    const [currentAnimal, setCurrentAnimal] = useState("onca")
    const info = animais[currentAnimal]

    return (

        
        <div className="h-96 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-full bg-white my-6 rounded-xl flex flex-col items-center">
            <div
            className="h-1/2 w-full bg-center bg-cover rounded-t-xl flex justify-center items-end mb-2"
             style={{ backgroundImage: `url(${info.bg})` }} >
                <h1 className="text-white text-shadow-lg text-2xl font-extrabold drop-shadow-[0_3px_6px_rgba(0,0,0,1)] leading-relaxed  p-2 ">
                {info.titulo}
                </h1>
                
            </div>

            <div><img src={info.avatar} width='60px' className="rounded-full border-4 border-b-neutral-600 shadow-md" alt="avatar" /></div>

            
            <p className="text-justify leading-relaxed py-2 pb-4 text-gray-700 px-1">
                {info.texto}
            </p>

            <div className="flex gap-6 mb-2 text-amber-50">
                <button onClick={()=> setCurrentAnimal("onca")} className="bg-[#3E402B] px-4 py-1 hover:scale-105 cursor-pointer rounded-full text-amber-100 font-semibold hover:bg-[#4A4C34] transition">ONÇA</button>
                <button onClick={()=> setCurrentAnimal("jacare")} className="bg-[#3E402B] px-4 py-1 hover:scale-105 cursor-pointer rounded-full font-semibold text-amber-100 hover:bg-[#4A4C34] transition">JACARÉ</button> 
                <button onClick={()=> setCurrentAnimal("arara")} className="bg-[#3E402B] px-4 py-1 hover:scale-105 cursor-pointer rounded-full font-semibold text-amber-100 hover:bg-[#4A4C34] transition">ARARA</button>  
            </div>  
        </div>
    );

}
{/* https://uiverse.io/andrew-demchenk0/chatty-hound-50 card de inspiração*/ }
export default CardAnimal