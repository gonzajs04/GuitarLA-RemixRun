
import { getPosts } from "../models/posts.server";
import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "../components/ListadoPosts";
export async function loader() {
    const posts = await getPosts();
    return posts.data; //EXTRAIGO LA ID Y LOS ATRIBUTOS Y LOS RETORNO
  }
export default function postsIndex(){
    const posts = useLoaderData();
    return (
   
        <ListadoPosts
          posts= {posts}
        />
    );
}