'use client'

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';

export default function LanguagePicker() {
    
    const locale = useLocale()
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const [mounted, setMounted] = useState(false)
    const translator = useTranslations('Header')
        
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    function handleLanguageChange(value:string) {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params` are used in combination with a given `pathname`. Since the two will always match for the current route, we can skip runtime checks.
            {pathname, params},
            {locale: value}
        )
    }

    return (<div className="outline-solid outline-mainact outline-3 px-5 ml-5">
        <select 
            value={locale} 
            aria-label={translator("language_label")}
            name="language" 
            id="language-picker" 
            className="text-textbase bg-transparent align-middle w-full h-full outline-none" 
            onChange={(e) => handleLanguageChange(e.target.value)}
        >
            <option value="pt-BR" className="text-ltext">Português</option>
            <option value="en" className="text-ltext">English</option>
        </select>
    </div>)
}