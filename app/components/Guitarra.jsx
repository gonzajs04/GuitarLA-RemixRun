import{Link} from '@remix-run/react'

export default function Guitarra({guitarra}){
    const{titulo,descripcion,imagen,precio} = guitarra;

    return(
        <div className="guitarra">
             <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${titulo}`} />
                <div className="contenido">
                
                    <h3 className="titulo">{titulo}</h3>
                    <p className="descripcion">{descripcion}</p>
                    <p className="precio">{precio}</p>
                    <Link className="enlace" to={`/guitarras/${titulo}`}>Ver Producto</Link> {/**HACE REFERENCIA A LA RUTA guitarras.$guitarraUrl.jsx */}
                </div>
        </div>
    )
}