//SERVER INDICA QUE SE EJECUTA EN EL SERVIDOR DE REMIX

export async function getCurso(){
    const response = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
    return await response.json();
}