
import {Link} from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Navegacion from './Navegacion';
export function meta(){
    return [
        {title:"Nosotros"}
    ]
}

export default function Header(){
    return(
        <header className="header">
            
            <div className="contenedor barra">
                <Link to="/"  className="logo">
                    <img loading='lazy' src={Logo} alt="logo" className="logo" />
                </Link>
                <Navegacion/>

            </div>
        </header>
    )
}