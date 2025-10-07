'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"

export default function ToastContainerWrapper() {
    const [mounted, setMounted] = useState(false)
    const {theme} = useTheme()


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <ToastContainer 
        theme={theme}
    />
    
}