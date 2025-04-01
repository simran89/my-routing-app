import { Exo } from "next/font/google"
import Link from "next/link"

export default function Blog(){
    return(
        <div>
            <ul>
                <li><Link href ="/blog/1">Blog Post 1</Link></li>
                <li><Link href ="/blog/2">Blog Post 2</Link></li>
                <li><Link href ="/blog/3">Blog Post 3</Link></li>
                <li><Link href ="/blog/4">Blog Post 4</Link></li>
            </ul>
        </div>
    );

}