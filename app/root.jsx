import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import styles from "../app/styles/index.css";
import Header from "./components/Header.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";
import {useState,useEffect} from 'react';

export const meta = () => {
  return [
    { title: "GuitarLA - RemixRun" },
    { charset: "utf-8" },
    { viewport: "width=device-width, initial-scale=1" },
    { name: "description", content: "This app is the best" },
  ];
};

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
  ];
}

export default function App() {
  
 //SE EJECUTA EN EL SERVIDOR Y EN EL CLIENTE
  //En caso de que window(El navegador) es undefined, que no haga nada, de lo contrario que obtenga el localStorage
 //En caso de que no exista nada en localStroage, que el valor inicial sea un array vacio.
 //ESTO LLAMA AUTOMATICAMENTE AL LOCALSTORAGE.SETITEM, Y REFERENCIA A CARRITO, EN ESTE CASO CARRITO ES UNDEFINED TODAVIA, POR LO QUE VAMOS A HACER USO DE OPTIONAL CHANNING EN CARRITO.JSX AL RECORRER LOS ELEMENTOS.

 const carritoLocalStorage = typeof window !=='undefined' ? (JSON.parse(localStorage.getItem('carrito')) ?? []) : null ;  
 
  const [carrito, setCarrito] = useState(carritoLocalStorage);


  useEffect(()=>{
    localStorage.setItem('carrito',JSON.stringify(carrito));  //Lo convierton en string JSON
    //SOLO EXISTE EN EL NAVEGADOR. Al colocarlo en el useEffect solo se ejecuta en el navegador cliente de Remix
  },[carrito]);


  const agregarCarrito = (guitarraSeleccionada)=>{
    if(Object.keys(guitarraSeleccionada)?.length>0){
      if(carrito.some(guitarraCarrito=> guitarraCarrito.id === guitarraSeleccionada.id )){ //RETORNA UN TRUE SI AL MENOS UNA 
         const carritoActualizado = carrito.map(guitarraCarrito =>{
            if(guitarraCarrito.id === guitarraSeleccionada.id){ //EVALUO SI EXISTE YA LA GUITARRA QUE TRATAMOS DE AÑADIR
              guitarraCarrito.cantidad = guitarraSeleccionada.cantidad;
            }
            return guitarraCarrito;
          });
          setCarrito(carritoActualizado);
      }else{
       
        //REGISTRO NUEVO
        setCarrito(()=>{
          return [...carrito,guitarraSeleccionada] //HACE COPIA DEL ARRAY DEL CARRITO Y PUSHEA LA GUITARRA NUEVA SELECCIONADA A ESE ARRAY SIN ELIMINAR LOS OTROS DATOS
         });
      }
    }
  }

  const actualizarCantidad = guitarra => {
   const carritoActualizado = carrito.map(guitarraCarrito=>{
    if(guitarraCarrito.id === guitarra.id){
      guitarraCarrito.cantidad = guitarra.cantidad;
    }
    return guitarraCarrito;
   });
   setCarrito(carritoActualizado)
  }

  const eliminarGuitarra = id =>{
    const guitarrasActualizadas = carrito.filter(guitarraCarrito  => guitarraCarrito.id != id);
   setCarrito(guitarrasActualizadas)

}




  return (
      <Document>
        <Outlet
          context={{
            agregarCarrito,
            carrito,
            actualizarCantidad,
            eliminarGuitarra
          }}
        />
      </Document>
  
  );
}

function Document({ children }) {
  //EL CHILDREN ES EL COMPONENTE OUTLET, QUE RECIBe UN COMPONENTE SEGUN LA RUTA, POR EJ NOSOTROS, BLOG, TIENDA ETC..
  return (
    <html lang="es">
      <head>
        <Meta />
        {/* me permite detectar configuraciones de la funcion meta, con las caracteristicas del head como title, description, viewport, charset */}
        <Links />
        {/* me permite detectar configuraciones dela funcion links que declara rutas de hojas de estilo, fuentes del array de objetos */}
      </head>

      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />{" "}
        {/*OBTENEMOS MEJOR PERFORMANCE PARA NAVEGAR CON LA ETIQUETA LINK */}
        <LiveReload />
      </body>
    </html>
  );
}

/*MANEJO DE ERRORES */

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <ErrorPage error={error} />
      </Document>
    );
  }
}
