export async function getGuitarras(){
    const response = await fetch(`https://guitarla-strapi-ybp7.onrender.com/api/guitarras?populate=imagen`);
    const data = await response.json();
    return data;
}

export async function getGuitarra(url){
    const response = await fetch(`https://guitarla-strapi-ybp7.onrender.com/api/guitarras?filters[url]=${url.toLowerCase()}&populate=imagen`)
    return await response.json();
}

