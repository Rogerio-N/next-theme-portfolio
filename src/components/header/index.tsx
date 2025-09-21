'use client'

import ThemeComponent from "@/components/header/ThemeComponent";
import Logo from "@/icons/logo";
import LanguagePicker from "./LanguagePicker";
import { useEffect, useState } from "react";

export default function Header() {
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <header className="flex w-full justify-between">
        <Logo />
        <div className="flex">
            <ThemeComponent />
            <LanguagePicker />
        </div>
    </header>
    
}