export async function getPosts(){
    const response = await fetch(`https://guitarla-strapi-ybp7.onrender.com/api/posts?populate=imagen`)
    return response.json();
}


export async function getPost(url){
    const response = await fetch(`https://guitarla-strapi-ybp7.onrender.com/api/posts?filters[url]=${url}&populate=imagen`);
    return response.json();
}

