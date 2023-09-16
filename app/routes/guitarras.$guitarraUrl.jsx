import { useOutletContext, useLoaderData } from "@remix-run/react";
import { getGuitarra } from "../models/guitarras.server";
import {useState} from 'react'
import styles from "../styles/guitarras.css";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length===0) {
    throw new Response("",{
      status: 404,
      statusText: "Guitarra no encontrada"
    });
  }
  return guitarra;
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export function meta({ data }) {
 
  return [
    { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
    {
      descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo}`,
    },
  ];
}

export default function guitarra() {
 const {agregarCarrito} = useOutletContext();
  const[cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData() //accedemos a los datos de una;
  const { titulo, precio, descripcion, imagen } = guitarra.data[0].attributes;


  const handleSubmit =  e =>{
    e.preventDefault();
    if(cantidad>0){
      const guitarraSeleccionada={
        id: guitarra.data[0].id,
        titulo,
        descripcion,
        precio,
        imagen:imagen.data.attributes.url,
        cantidad
      }
      agregarCarrito(guitarraSeleccionada);
    }
    return cantidad<0 && alert("Debes seleccionar una cantidad")
    
  }

  return (
    <div className="guitarra">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${titulo}`}
      />

      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}</p>

        <form onSubmit={handleSubmit} className="formulario">
            {/*MANEJA EL ESTADO del carrito EN EL CLIENTE NO EN EL SERVIDOR */}
            <label htmlFor="cantidad">Cantidad</label>
            <select onChange={e=>setCantidad(+e.target.value)}  name="cantidad" id="cantidad">
              <option value="0">Seleccione</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}
