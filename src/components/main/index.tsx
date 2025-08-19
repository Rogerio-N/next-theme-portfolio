'use client'

import Badge from "@/icons/badge";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Skills from "./skills";
import Projects from "./projects";

export default function Main() {

    const [mounted, setMounted] = useState(false)
    const translator = useTranslations('Home')
        
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <main className="mt-8">
        <section className="flex">
            <h1 className="text-texthighlight text-4xl mr-2">Rogério Nakayama Bernardo</h1>
            <Badge />
        </section>
        <section>
            <article>
                <h2 className="text-textbase text-2xl mt-4">{translator('role')}</h2>
                <p className="test-textbase text-base mt-5 text-justify">{translator('workDescription')}</p>
                <p className="text-textbase text-base mt-3">{translator('personalTime')}</p>
                <button className="text-mainact border-mainact border-3 p-3 px-7 my-5 hover:bg-hover hover:cursor-pointer">{translator('contactButton')}</button>
            </article>
        </section>
        <section className="flex justify-between">
            <Skills />
            <Projects />
        </section>
    </main>
}