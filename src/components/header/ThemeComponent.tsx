'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
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
        <div onClick={handleThemeChange}>
            {isThemeLightActive ? <SunIcon /> : <MoonIcon />}
            <p>{theme}</p>
        </div>
    )
}