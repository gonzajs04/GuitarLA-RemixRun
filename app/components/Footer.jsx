import Navegacion from "./Navegacion"

export default function Footer(){
    return(
        <footer className="footer">

            <div className="footer-contenido">
            <Navegacion/>
            <p className="copyright">Todos los derechos reservados { new Date().getFullYear()} &copy;</p>
            </div>
           
        </footer>
    )
}