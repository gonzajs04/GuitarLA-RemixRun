export async function getGuitarras(){
    const response = await fetch(`${process.env.API_URl}/guitarras?populate=imagen`);
    const data = await response.json();
    return data;
}

export async function getGuitarra(url){
    const response = await fetch(`${process.env.API_URl}/guitarras?filters[url]=${url.toLowerCase()}&populate=imagen`)
    return await response.json();
}

