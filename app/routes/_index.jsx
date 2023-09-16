import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import { getCurso } from "../models/curso.server";
import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "../components/ListadoGuitarras";
import ListadoPosts from "../components/ListadoPosts";
import Curso from "../components/Curso";
import stylesGuitarras from "../styles/guitarras.css";
import stylesPosts from "../styles/blog.css";
import stylesCurso from '../styles/curso.css'
export const links = () => {
  return [
    { rel: "stylesheet", href: stylesGuitarras },
    { rel: "stylesheet", href: stylesPosts },
    { rel: "stylesheet", href: stylesCurso },
  ];
};
export const meta = () => {
  return [
    { title: "GuitarLA - Inicio" },
    { name: "description", content: "Compra tu guitarra favorita" },
  ];
};
export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(),getCurso()]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}

export default function Index() {
  //Nombre en miniscula porque REMIX Automaticamente lo asigna como URL, pero la funcion declarada como componente puede estar en Mayus
  const { guitarras, posts,curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

        <Curso
            curso={curso.attributes}
        />

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}
//SI DESEAMOS CREAR HOJAS DE ESTILO O ETIQUETAS META PARA UN COMPONENTE, SOLO LO DETECTA PARA LAS RUTAS, NO COMPONENTES COMO HEADER, FOOTER, NAV, ETC
