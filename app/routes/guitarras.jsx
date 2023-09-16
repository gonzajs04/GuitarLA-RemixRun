import styles from '../styles/guitarras.css';
import {Outlet,useOutletContext} from '@remix-run/react'
export function links(){
    return[
        {rel:"stylesheet",href:styles}
    ]
}
export function meta(){
    return[
        {title:"GuitarLA - Tienda"},
        {name:"description", content:"GuitarLA - Nuestra coleccion de guitarras"}
    ]
}

export default function Tienda(){
    return(
        <main className="contenedor">
           <Outlet
            context ={useOutletContext()}
           />
        </main>

    )
}