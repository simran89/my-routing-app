"use client"
import {useRouter} from "next/navigation";

export default function Contact(){

    const router = useRouter();
    return (<div>
        <h1> Contact Page</h1>
        <button onClick={ ()=> router.back()}
        >Go back</button>
    </div>);
}