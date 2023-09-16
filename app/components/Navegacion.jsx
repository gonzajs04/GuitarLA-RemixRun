
import {Link,useLocation} from '@remix-run/react';
import carrito from '../../public/img/carrito.png'
export default function Navegacion(){
    const location  = useLocation()
    return(
        <nav className="navegacion">
        <Link to='/' className={`${location.pathname=='/' ? 'active' : ''}`}>Inicio</Link>
        <Link to='/guitarras' className={`${location.pathname=='/guitarras' ? 'active' : ''}`}>Tienda</Link>
        <Link to='/nosotros' className={`${location.pathname=='/nosotros' ? 'active' : ''}`}>Nosotros</Link>
        <Link to='/posts' className={`${location.pathname=='/posts' ? 'active' : ''}`}>Posts</Link>
        <Link to='/carrito' className={`${location.pathname=='/carro' ? 'active' : ''}`}><img loading='lazy' src={carrito}/></Link>
    </nav>
    )
}