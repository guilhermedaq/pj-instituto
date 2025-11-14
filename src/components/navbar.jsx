 import Styles from './navbar.module.css'
 import logo from '../assets/pantanal-vivo-logo.png'
import { Link } from 'react-router-dom'

 function Navbar (){
   return(
        <>  
        <nav className='navbar navbar-expand-md navbar-dark bg-dark px-3'>
            <a href="" className='navbar-brand'>
                <img src={logo} alt="Logo da empresa" width="70" height="70"/>
                <span className='ms-3 link-gray'>Projeto Pantanal Vivo</span>
            </a> 

            {/* botão para mobile*/}
            <button
                className='navbar-toggler collapsed'
                type='button'
                data-bs-toggle="collapse"
                data-bs-target="#navbarItens"
                aria-expanded="false"
            >
                <span className='navbar-toggler-icon'></span>
                
            </button>

            {/* botões de navegação */ }
            <div className='navbar-collapse collapse' id='navbarItens'>
                <ul className='navbar-nav mx-auto gap-4 fs-5'>
                    <li className='nav-item'>
                        <Link className='nav-link  text-warning link-gray' to="/">
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link className='nav-link  text-warning link-gray' to="/sobre">
                            Sobre
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link className='nav-link text-warning link-gray' to="/contato">
                            Contato
                        </Link>
                    </li>   

                    <li className='nav-item dropdown'>
                        <a href=""
                           className='nav-link dropdown-toggle  text-warning link-gray'
                           data-bs-toggle='dropdown'
                           aria-haspopup='true'
                           aria-expanded='false'
                           id='dropdownNav'>
                           Links 
                        </a>

                        <div className='dropdown-menu' aria-labelledby="dropdownNav">
                            <a href="https://www.youtube.com/watch?v=SIpQchq50C4" className='dropdown-item' target="_blank" rel="noopener noreferrer"> VÍDEO: Onça preda jacaré</a>
                            <a href="https://sospantanal.org.br/" className='dropdown-item' target="_blank" rel="noopener noreferrer"> SOS Pantanal</a>
                            <a href="https://servicos.ibama.gov.br/ctf/" className='dropdown-item' target="_blank" rel="noopener noreferrer"> Ibama</a>
                        </div>
                    </li>               
                </ul>
                <a href="">
                    <h4>
                        <a className="badge text-bg-warning text-dark link-gray text-decoration-none" href='https://sospantanal.org.br/' target="_blank" rel="noopener noreferrer">
                        DOAR
                        </a>
                    </h4>
                </a>
                
            </div>

        </nav>

        </>
   )

}

export default Navbar

