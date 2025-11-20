import OncaJpg from "../../assets/onca-pintada-59.jpg"
import pantanalcapa from "../../assets/pantanal-capa.jpg" 

function BigCard(){
    return (
        <div className="flex flex-col items-center  lg:flex-row lg:justify-center lg:items-stretch mx-1  gap-5">
            {/* primeiro card prinicipal */}
            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#F9F6EE] rounded-xl w-85 md:w-96 transition-transform duration-300 ease-in hover:scale-105 cursor-pointer">
                <img src={OncaJpg} className="rounded-t" alt="" />
                <div className="flex flex-col items-center font-serif px-1 py-1">
                    <h1 className="font-serif text-2xl">Situação atual </h1>
                    <p className="text-justify leading-relaxed px-3 py-1 text-gray-700">
                        A situação atual do Pantanal é de extrema vulnerabilidade, com dados recentes indicando uma intensa seca, agravamento das queimadas (com um aumento de 157% em 2024 em relação ao ano anterior) e degradação ambiental acelerada pela expansão da pecuária e mineração.   
                    </p>
                </div>
                <div className="bg-[#3E402B] rounded-b px-2">
                    <ul className="flex gap-4 justify-between p-5  text-amber-50 text-shadow-lg/30    ">
                        <li className="flex flex-col items-center ">
                           <span className="font-bold">72%</span>
                           <span>queimado</span>
                        </li>
                        <li className="flex flex-col items-center ">
                           <span className="font-bold">4M(ha)</span>
                           <span>devastados</span>
                        </li>
                        <li className="flex flex-col items-center ">
                           <span className="font-bold">17M</span>
                           <span>animais mortos</span>
                        </li>
                    </ul>
                </div>
            </div>
             
            {/* segundo card prinicipal */}
            <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#F9F6EE] rounded-xl  w-85 md:w-96 transition-transform duration-300 ease-in hover:scale-105 cursor-pointer">
                <img src={pantanalcapa} alt="foto" className="rounded-t md:h-65 " />
                <div className="flex flex-col items-center font-serif px-1 py-1"> 
                    <h1 className="font-serif text-2xl">Importância ambiental</h1>
                    <p className="text-justify leading-relaxed text-sm text-gray-700">Atua como um grande reservatório de água doce e tem papel fundamental no ciclo hidrológico da região. 
                       Durante as cheias, parte grande da planície é inundada — isso traz nutrientes ao solo e favorece muitos organismos. 
                       É fundamental para a conservação da biodiversidade: muitas espécies dependem do ciclo de enchente/seca. 
                       Reconhecimentos: é Reserva da Biosfera e Patrimônio Natural (UNESCO) e também Patrimônio Nacional do Brasil.</p>
                </div>

            </div>

            
        </div>

        
    )
}

export default BigCard;