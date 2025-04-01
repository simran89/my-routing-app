"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const ResultPage = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    return (
        <div>
            <h1>Submitted Data is</h1>
            {name && email ? (
                <div>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                </div>
            ) : (
                <p>No data received</p>
            )}
        </div>
    );
};

export default function ResultPageWithSuspense() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResultPage />
        </Suspense>
    );
}
