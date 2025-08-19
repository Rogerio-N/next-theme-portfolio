'use client'

import Logo from "@/icons/logo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {

    const [mounted, setMounted] = useState(false)
    const translator = useTranslations('Footer')
        
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (<footer className="justify-items-center fixed bottom-0 left-0 right-0 mb-10">
        <Logo />
        <nav className="flex gap-5">
            <Link href="https://www.linkedin.com/in/rog%C3%A9rio-nakayama-566a391a4/" target="_blank">Linkedin</Link>
            <Link href="https://github.com/Rogerio-N" target="_blank">Github</Link>
            <p className="hover:cursor-pointer">{translator("contact")}</p>
        </nav>
    </footer>)
}
