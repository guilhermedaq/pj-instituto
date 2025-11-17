 import logo from '../assets/pantanal-vivo-logo.png'
import { Link } from 'react-router-dom'

 function Navbar (){
   return(
        <header className='bg-[#3E402B] (marrom madeira) flex items-center justify-between'>  
            <img className="w-22" src={logo} />
            <ul className='flex gap-6 text-xl text-[#D1A054] font-sans'>
                <li><Link to="/" className=' hover:text-amber-200  '>Home</Link></li>
                <li><Link to="/sobre" className=' hover:text-amber-200  '>Sobre</Link></li>
                <li><a href="" className=' hover:text-amber-200'>Links</a></li>
            </ul>
            <div>
                
            </div>
        </header>
   )

}

export default Navbar

