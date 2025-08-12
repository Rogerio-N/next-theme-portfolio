import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
    const translator = useTranslations('Home')
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <div className="w-1/2">
        <h2 className="text-textbase text-2xl font-bold mb-2">{translator('projects')}</h2>
        <div className="static flex flex-col">
            <Link className="underline underline-offset-3 mt-2" href="https://github.com/Rogerio-N/java-rest-assured-test" target="_blank">Java + RestAssured integration testing</Link>
            <Link className="underline underline-offset-3 mt-2" href="https://github.com/Rogerio-N/k6-js-test" target="_blank">K6 + JavaScript load testing the QuickkPizza</Link>
            <Link className="underline underline-offset-3 mt-2" href="https://github.com/Rogerio-N/cypress-ts-test" target="_blank">Cypress + Typescript e2e testing the Real World App</Link>
        </div>
    </div>
}