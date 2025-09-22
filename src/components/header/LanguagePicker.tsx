'use client'

import {useTranslations} from 'next-intl';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

export default function LanguagePicker({ initialLocale }: Readonly<{ initialLocale: string }>) {
    const [locale, setLocale] = useState(initialLocale);
    const translator = useTranslations('Header');
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        setLocale(initialLocale)
    }, [initialLocale]);

    if (!mounted) {
        return null;
    }

    function handleLanguageChange(value: string) {
        setLocale(value);
        document.cookie = `locale=${value}; path=/`;
        router.refresh();
    }

    return (
        <div className="outline-solid outline-mainact outline-3 px-2 ml-3 sm:px-5 sm:ml-5">
            <select 
                value={locale}
                aria-label={translator("language_label")}
                name="language" 
                id="language-picker" 
                className="text-sm sm:text-base text-textbase bg-transparent align-middle w-full h-full outline-none" 
                onChange={(e) => handleLanguageChange(e.target.value)}
            >
                <option value="pt-BR" className="text-ltext">Português</option>
                <option value="en" className="text-ltext">English</option>
            </select>
        </div>
    )
}
