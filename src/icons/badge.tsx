'use client'

import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Badge() {
    const themeProvider = useTheme()
    const translator = useTranslations('Home')

    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const path = themeProvider.theme === 'light' ? '/badge-tema-claro.svg' : '/badge-tema-escuro.svg'

    return <Image 
        src={path}
        alt={translator('Badge.description')}
        width={1}
        height={1}
        className="w-6 sm:w-8"
    />
}