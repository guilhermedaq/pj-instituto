import logo from '../../assets/pantanal-vivo-logo.png'
import jaguarLogo from '../../assets/oncaptd.svg'

function Sobre(){
    return (
       <>
       <h1>Sobre o instituto</h1>
        <div className="card shadow-lg">
            <div className="card-body">
                <h5 className="card-title">AJUDE-NOS A MANTER O PANTALNAL VIVO</h5>
                    <div className='d-flex'>
                        <img src={logo} alt="" width='100' height='100' />
                        <img src={jaguarLogo} alt="" width='100' height='90' />
                    </div>
                            
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
 
    )
}

export default Sobre