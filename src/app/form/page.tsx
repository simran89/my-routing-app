"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function FormPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/result?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
    }
    return (<div>
        <h1> Eneter your details</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <br>
            </br>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br />
            <button type="submit">Submit </button>
        </form>
    </div>);
}