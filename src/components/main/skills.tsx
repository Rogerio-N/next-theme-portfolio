'use client'

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

export default function Skills() {
    const skills = [
        'Manual Testing', 
        'Automated Testing', 
        'Functional Testing', 
        'Regression Testing', 
        'Documentation',
        'UI Testing (web/mobile)',
        'API Testing',
        'Performance Testing',
        'Postman',
        'JavaScript',
        'TypeScript',
        'Java',
        'Kotlin',
        'Cypress',
        'K6',
        'Git',
        'AWS'
    ]

    const translator = useTranslations('Home')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <div className="w-2/5">
        <h2 className="text-textbase text-2xl font-bold mb-2">{translator('skills')}</h2>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => 
                <p id={index.toString()} key={index} className="text-textbase border-2 border-mainact w-fit max-w-xs px-5 py-1 rounded-4xl">{skill}</p>
            )}
        </div>
    </div>

}