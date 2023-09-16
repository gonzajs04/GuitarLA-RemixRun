import ListadoGuitarras from '../components/ListadoGuitarras';
import {useLoaderData} from '@remix-run/react';
import {getGuitarras} from '../models/guitarras.server.js';
export async function loader(){ //SE EXPORTA Y SE IMPORTA AUTOMATICAMENTE PARA SU USO
    const datosGuitarras = await getGuitarras();
    return datosGuitarras;
}


export default function guitarrasIndex(){
    const guitarras = useLoaderData().data;

    return(
           <ListadoGuitarras
            guitarras={guitarras}
           />
    )
}