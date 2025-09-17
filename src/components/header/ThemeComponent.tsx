'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeComponent() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const isThemeLightActive = theme === "light"

    return (
        <div className="hover:cursor-pointer" onClick={handleThemeChange}>
            {isThemeLightActive ? <SunIcon className="w-6 sm:w-8 h-full align-middle"/> : <MoonIcon className="w-5 h-full align-middle rotate-270 sm:w-6"/>}
        </div>
    )
}