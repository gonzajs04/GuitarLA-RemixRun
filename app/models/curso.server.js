//SERVER INDICA QUE SE EJECUTA EN EL SERVIDOR DE REMIX

export async function getCurso(){
    const response = await fetch(`https://guitarla-strapi-ybp7.onrender.com/api/curso?populate=imagen`);
    return await response.json();
}
