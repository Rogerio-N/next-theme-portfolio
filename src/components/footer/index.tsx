'use client'

import Logo from "@/icons/logo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import SendEmailModal from "../shared/sendEmailModal";

export default function Footer() {

    const [mounted, setMounted] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const translator = useTranslations('Footer')
        
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (<footer className="justify-items-center mt-auto mx-auto">
        <Logo />
        <nav className="flex gap-3 sm:gap-5">
            <Link className="text-textbase text-sm sm:text-base" href="https://www.linkedin.com/in/rog%C3%A9rio-nakayama-566a391a4/" target="_blank">Linkedin</Link>
            <Link className="text-textbase text-sm sm:text-base" href="https://github.com/Rogerio-N" target="_blank">Github</Link>
            <button
                onClick={() => setIsModalOpen(true)}
                className="text-textbase text-sm sm:text-base hover:cursor-pointer bg-transparent border-none p-0"
            >
                {translator("contact")}
            </button>
        </nav>
        <SendEmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>)
}
