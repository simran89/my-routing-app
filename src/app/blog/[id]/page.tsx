"use client";
import { useParams, useRouter } from "next/navigation";


export default function BlogPost(){

    const params = useParams();
    const {id} = params;
    const router = useRouter();

    return(
        <div>
            <h1> Blog post {id}</h1>
            <p>This is the content for blog post {id}</p>

            <button onClick={() =>router.back()}>Go Back</button>
        </div>
    );

}