'use client'

import Badge from "@/icons/badge";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Skills from "./skills";
import Projects from "./projects";
import SendEmailModal from "../shared/sendEmailModal";

export default function Main() {

    const [mounted, setMounted] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const translator = useTranslations('Home')
        
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <main className="mt-4 sm:mt-8">
        <section className="flex">
            <h1 className="text-texthighlight text-xl sm:text-4xl sm:mr-2">Rogério Nakayama Bernardo</h1>
            <Badge />
        </section>
        <section>
            <article>
                <h2 className="text-textbase text-xl mt-2 sm:text-2xl sm:mt-4">{translator('role')}</h2>
                <p className="test-textbase text-sm sm:text-base mt-3 text-justify sm:mt-5">{translator('workDescription')}</p>
                <p className="text-textbase text-sm sm:text-base mt-3">{translator('personalTime')}</p>
                <button
                    className="text-mainact border-mainact border-3 py-2 px-4 sm:py-3 sm:px-7 my-5 hover:bg-hover hover:cursor-pointer active:bg-hover"
                    onClick={() => setIsModalOpen(true)}
                >
                    {translator('contactButton')}
                </button>
            </article>
        </section>
        <section className="flex justify-between flex-col lg:flex-row">
            <Skills />
            <Projects />
        </section>
        <SendEmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </main>
}