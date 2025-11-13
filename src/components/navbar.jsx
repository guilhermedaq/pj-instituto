 import Styles from './navbar.module.css'
 import logo from '../assets/oncaptd.svg'

 function Navbar (){
   return(
        <>  
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark px-3'>
            <a href="" className='navbar-brand gap-1'>
                <img src={logo} alt="Logo da empresa" width="70" height="70"/>
                ONG ETC
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
                        <a className='nav-link  text-warning' href="">
                            Home
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a className='nav-link  text-warning' href="">
                            Contato
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a className='nav-link text-warning' href="">
                            Sobre
                        </a>
                    </li>   

                    <li className='nav-item dropdown'>
                        <a href=""
                           className='nav-link dropdown-toggle  text-warning'
                           data-bs-toggle='dropdown'
                           aria-haspopup='true'
                           aria-expanded='false'
                           id='dropdownNav'>
                           Dropdown
                        </a>

                        <div className='dropdown-menu' aria-labelledby="dropdownNav">
                            <a href="" className='dropdown-item'> aaa</a>
                            <a href="" className='dropdown-item'> bbb</a>
                            <a href="" className='dropdown-item'> ccc</a>
                        </div>
                    </li>               
                </ul>
                <a href="">
                    <h4><span className="badge text-bg-warning" id='doar'>DOAR</span></h4>
                </a>
                
            </div>

        </nav>

        </>
   )

}

export default Navbar

