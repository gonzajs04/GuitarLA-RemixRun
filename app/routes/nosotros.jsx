import styles from '../styles/nosotros.css'
import nosotrosImg from '../../public/img/nosotros.jpg';

export function meta(){
    return[
        {title:"GuitarLA - Mosotros"},
        {name:"description", content:"Seccion nosotros que explica nuestro origen"}
    ]
}
export function links(){
    return[
        {rel:"stylesheet", href:styles},
        {rel:"preload", href:nosotrosImg, as: "image"}
    ]
}
export default function Nosotros(){

    return (
        <main className="nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img loading="lazy" src={nosotrosImg} alt="Nosotros img" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officia quis! Repellat similique iure et magnam earum beatae, assumenda enim tenetur culpa odit architecto harum soluta mollitia. Architecto, explicabo amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officia quis! Repellat similique iure et magnam earum beatae, assumenda enim tenetur culpa odit architecto harum soluta mollitia. Architecto, explicabo amet.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officia quis! Repellat similique iure et magnam earum beatae, assumenda enim tenetur culpa odit architecto harum soluta mollitia. Architecto, explicabo amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officia quis! Repellat similique iure et magnam earum beatae, assumenda enim tenetur culpa odit architecto harum soluta mollitia. Architecto, explicabo amet</p>
                </div>
            </div>
        </main>
    )
}