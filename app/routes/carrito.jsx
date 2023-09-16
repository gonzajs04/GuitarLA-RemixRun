import { useState, useEffect } from "react";
import styles from "../styles/carrito.css";
import { useOutletContext } from "@remix-run/react";
import {ClientOnly} from 'remix-utils';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export function meta() {
  return [
    { title: "GuitarLA - Carrito de compras" },
    {
      name: "description",
      content: "Venta de guitarras, musica, blog, carrito de compras etc.",
    },
  ];
}

export default function carrito() {
  const { carrito,actualizarCantidad,eliminarGuitarra } = useOutletContext();
  const [total, setTotal] = useState(0);
  
  useEffect(()=>{
      const calculoTotal = carrito.reduce((total, guitarra)=>{
         return total + (guitarra.cantidad*guitarra.precio);}
      ,0);

      setTotal(calculoTotal);
  },[carrito])

  return (
    <ClientOnly fallback={'cargando...'}>
      {()=>(
        <main className="contenedor">
          <h1 className="heading">Carrito de compras</h1>
          <div className="contenido">
            <div className="container-carrito">
              <div className="carrito">
                <h2>Articulos</h2>
                {carrito?.lenght == 0
                  ? "Carrito vacio"
                  : carrito?.map((guitarra) => (
                      <div key={guitarra.id} className="producto">
                        <div className="producto-imagen">
                          <img
                            src={guitarra.imagen}
                            loading="lazy"
                            alt={` Imagen Guitara ${guitarra.titulo}`}
                          />
                        </div>
                        <div className="producto-square-det">
                          <p className="nombre">{guitarra.titulo}</p>
                          <p className="cantidad">Cantidad</p>
                          <select name="" className="select" id="" value={guitarra.cantidad} onChange={(e)=>actualizarCantidad({
                            cantidad:+e.target.value,
                            id: guitarra.id
                          })}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <p className="precio">
                            $ <span>{guitarra.precio}</span>
                          </p>
                          <p className="subtotal">
                            Subtotal: ${" "}
                            <span>{guitarra.precio * guitarra.cantidad}</span>
                          </p>
                        </div>
                        <button onClick={()=>eliminarGuitarra(guitarra.id)} className="btn-delete-gui" value="Eliminar">Eliminar</button>
                      </div>
                    ))}
              </div>
            </div>

            <aside className="resumen">
              <h3>Resumen del pedido</h3>
              <p>Total a pagar: $ {total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
}
