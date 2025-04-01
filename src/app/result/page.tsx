"use client";
import { useSearchParams } from "next/navigation";

export default function ResultPage() {

    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const email = searchParams.get("email");


    return (<div>
        <h1> Submiteed Data is</h1>
        {name && email ? (
            <div>
                <p><strong>Name:</strong>{name}</p>
             <p><strong>Email :</strong>{email}</p>
            </div>
        ) : (<p> No data received</p>)}
    </div>);

}