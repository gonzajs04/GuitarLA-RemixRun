import {Link} from '@remix-run/react'
export default function ErrorPage({error}){
 
    return(
    <p className="error">
        {error.status } {error.statusText}
        <Link className="error-enlace" to="/">Tal vez quieras volver a la pagina principal</Link>
      </p>
    )
}