import { Outlet } from "@remix-run/react";
import styles from "../styles/blog.css";

export function meta() {
  return [{ title: "GuitarLA - Blog" }];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Posts() {
 return(
    <main className="contendor">
     <Outlet />
    </main>
 )
}

//SI DESEAMOS CREAR HOJAS DE ESTILO O ETIQUETAS META PARA UN COMPONENTE, SOLO LO DETECTA PARA LAS RUTAS, NO COMPONENTES COMO HEADER, FOOTER, NAV, ETC
