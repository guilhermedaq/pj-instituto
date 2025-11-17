 import logo from '../assets/pantanal-vivo-logo.png'
import { Link } from 'react-router-dom'

 function Navbar (){
   return(
        <header className='bg-black flex items-center justify-between'>  
            <img class="w-22 md:w-30 lg:w-28" src={logo} />
            <ul className='flex gap-6 text-xl text-yellow-500 font-sans'>
                <li><a href="" className=' hover:text-amber-200  '>Home</a></li>
                <li><a href="" className=' hover:text-amber-200  '>Sobre</a></li>
                <li><a href="" className=' hover:text-amber-200  '>Ideia</a></li>
                <li><a href="" className=' hover:text-amber-200'>Links</a></li>
            </ul>
            <div>
                
            </div>
        </header>
   )

}

export default Navbar

