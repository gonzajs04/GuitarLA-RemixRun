
import { getPost } from '../models/posts.server';
import { useLoaderData, Link } from '@remix-run/react';
import { formatearFecha } from '../utils/helpers.js'
import styles from '../styles/blog.css'

export function links() {
  return [
    { rel: "stylesheet", href: styles }
  ]
}
export function meta({ data }) {
  if (!data) {
    return [
      { title: "GuitarLA - Blog No Encontrado" }
    ]
  }
  return [
    { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
    { description: "GuitarLA Blogs" }
  ]
}
export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: "Post no encontrado"
    })
  }
  return post;
}

export default function PostUrl() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
  return (
    <article className='post'>
      <img src={imagen.data?.attributes?.formats?.small?.url} className="imagen" alt={`Imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
        <Link className="enlace" to={'/posts'} >Volver</Link> {/**HACE REFERENCIA A LA RUTA postss.$postUrl.jsx */}
      </div>
    </article>
  );
}